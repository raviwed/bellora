import type { LatLng } from "react-native-maps";

// Temporary mock data – replace with the real order API response later.

export type OrderStatus = "placed" | "preparing" | "outForDelivery" | "delivered";

export type OrderStep = {
    status: OrderStatus;
    label: string;
};

export const ORDER_STEPS: OrderStep[] = [
    { status: "placed", label: "Order Placed" },
    { status: "preparing", label: "Preparing" },
    { status: "outForDelivery", label: "Out for Delivery" },
    { status: "delivered", label: "Delivered" },
];

export const STATUS_BADGE_LABEL: Record<OrderStatus, string> = {
    placed: "Order placed",
    preparing: "Preparing",
    outForDelivery: "Out for delivery",
    delivered: "Delivered",
};

export const MOCK_ORDER = {
    id: "#BELLORA12345",
    // Delivery is expected this many minutes after the screen opens
    etaMinutes: 45,
};

// Bakery (start) -> customer (end). Points follow the roads loosely.
export const STORE_LOCATION: LatLng = { latitude: 17.4239, longitude: 78.4482 };
export const CUSTOMER_LOCATION: LatLng = { latitude: 17.4375, longitude: 78.4689 };

export const DELIVERY_ROUTE: LatLng[] = [
    STORE_LOCATION,
    { latitude: 17.4262, longitude: 78.4511 },
    { latitude: 17.4281, longitude: 78.4547 },
    { latitude: 17.4303, longitude: 78.4579 },
    { latitude: 17.4318, longitude: 78.4612 },
    { latitude: 17.4337, longitude: 78.4641 },
    { latitude: 17.4356, longitude: 78.4668 },
    CUSTOMER_LOCATION,
];

// Demo timings (ms) for the simulated order progress
export const SIMULATION = {
    placedToPreparing: 4000,
    preparingToOutForDelivery: 5000,
    deliveryDuration: 25000,
    tickInterval: 500,
};

// Warm beige map theme (Google Maps / Android). Apple Maps on iOS ignores this.
export const MAP_STYLE = [
    { elementType: "geometry", stylers: [{ color: "#efe3d3" }] },
    { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#8c7a6c" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#f5e8d8" }] },
    { featureType: "poi", stylers: [{ visibility: "off" }] },
    { featureType: "poi.park", elementType: "geometry", stylers: [{ visibility: "on" }, { color: "#dfe8d4" }] },
    { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
    { featureType: "road", elementType: "labels", stylers: [{ visibility: "off" }] },
    { featureType: "transit", stylers: [{ visibility: "off" }] },
    { featureType: "water", elementType: "geometry", stylers: [{ color: "#d9e4e8" }] },
];
