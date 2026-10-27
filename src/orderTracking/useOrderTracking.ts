import { useEffect, useMemo, useState } from "react";
import type { LatLng } from "react-native-maps";

import { DELIVERY_ROUTE, MOCK_ORDER, ORDER_STEPS, SIMULATION, type OrderStatus } from "./orderTrackingData";

const toRad = (deg: number) => (deg * Math.PI) / 180;

// Haversine distance in metres
const distanceBetween = (a: LatLng, b: LatLng) => {
    const R = 6371000;
    const dLat = toRad(b.latitude - a.latitude);
    const dLng = toRad(b.longitude - a.longitude);
    const h =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(a.latitude)) * Math.cos(toRad(b.latitude)) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
};

// Position at `progress` (0..1) of the total route length
const pointAlongRoute = (route: LatLng[], progress: number): LatLng => {
    const segments = route.slice(1).map((point, i) => distanceBetween(route[i], point));
    const total = segments.reduce((sum, d) => sum + d, 0);
    let remaining = Math.min(Math.max(progress, 0), 1) * total;

    for (let i = 0; i < segments.length; i++) {
        if (remaining <= segments[i]) {
            const t = segments[i] === 0 ? 0 : remaining / segments[i];
            return {
                latitude: route[i].latitude + (route[i + 1].latitude - route[i].latitude) * t,
                longitude: route[i].longitude + (route[i + 1].longitude - route[i].longitude) * t,
            };
        }
        remaining -= segments[i];
    }
    return route[route.length - 1];
};

export type StepTimes = Partial<Record<OrderStatus, Date>>;

/**
 * Simulates an order moving through its statuses and the rider travelling
 * along the route. Swap the internals for API polling / sockets later –
 * the returned shape can stay the same.
 */
export const useOrderTracking = () => {
    const [startedAt] = useState(() => new Date());
    const [stepIndex, setStepIndex] = useState(0);
    const [deliveryProgress, setDeliveryProgress] = useState(0);
    const [stepTimes, setStepTimes] = useState<StepTimes>(() => ({ placed: startedAt }));

    const status = ORDER_STEPS[stepIndex].status;

    const expectedDelivery = useMemo(
        () => new Date(startedAt.getTime() + MOCK_ORDER.etaMinutes * 60 * 1000),
        [startedAt],
    );

    // Advance placed -> preparing -> out for delivery
    useEffect(() => {
        const delay =
            status === "placed" ? SIMULATION.placedToPreparing
                : status === "preparing" ? SIMULATION.preparingToOutForDelivery
                    : null;
        if (delay === null) return;

        const timer = setTimeout(() => {
            const next = ORDER_STEPS[stepIndex + 1].status;
            setStepTimes(times => ({ ...times, [next]: new Date() }));
            setStepIndex(i => i + 1);
        }, delay);
        return () => clearTimeout(timer);
    }, [status, stepIndex]);

    // Move the rider while out for delivery, then mark delivered
    useEffect(() => {
        if (status !== "outForDelivery") return;

        const step = SIMULATION.tickInterval / SIMULATION.deliveryDuration;
        const interval = setInterval(() => {
            setDeliveryProgress(p => Math.min(p + step, 1));
        }, SIMULATION.tickInterval);
        return () => clearInterval(interval);
    }, [status]);

    useEffect(() => {
        if (status === "outForDelivery" && deliveryProgress >= 1) {
            setStepTimes(times => ({ ...times, delivered: new Date() }));
            setStepIndex(ORDER_STEPS.length - 1);
        }
    }, [status, deliveryProgress]);

    const riderLocation = useMemo(
        () => pointAlongRoute(DELIVERY_ROUTE, deliveryProgress),
        [deliveryProgress],
    );

    return {
        status,
        stepIndex,
        stepTimes,
        expectedDelivery,
        riderLocation,
        isDelivered: status === "delivered",
    };
};
