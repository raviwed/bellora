import React, { useEffect, useRef, useState } from "react";
import { Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";

import SafeAreaComponent from "../../Components/SafeAreaComponent";
import LeftarrowIcon from "../../assets/svg/BottomTabNav/LeftarrowIcon";
import { CheckIcon, MapPinIcon } from "../../assets/svg/orderTrackingIcon";
import { BelloraColors } from "../../assets/constants/enums";
import {
    CUSTOMER_LOCATION,
    DELIVERY_ROUTE,
    MAP_STYLE,
    MOCK_ORDER,
    ORDER_STEPS,
    STATUS_BADGE_LABEL,
} from "./orderTrackingData";
import { useOrderTracking } from "./useOrderTracking";
import { styles } from "./styles";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// "6:30 PM"
const formatTime = (date: Date) => {
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes} ${date.getHours() < 12 ? "AM" : "PM"}`;
};

// "23 Sep, 10:24 AM"
const formatDateTime = (date: Date) =>
    `${date.getDate()} ${MONTHS[date.getMonth()]}, ${formatTime(date)}`;

const OrderTrackingScreen = () => {
    const navigation = useNavigation<any>();
    const mapRef = useRef<MapView>(null);
    // Custom marker views need a few frames to render before we freeze them (Android)
    const [tracksMarkerChanges, setTracksMarkerChanges] = useState(true);

    const { status, stepIndex, stepTimes, expectedDelivery, riderLocation, isDelivered } =
        useOrderTracking();

    useEffect(() => {
        const timer = setTimeout(() => setTracksMarkerChanges(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const fitRoute = () => {
        mapRef.current?.fitToCoordinates(DELIVERY_ROUTE, {
            edgePadding: { top: 50, right: 40, bottom: 40, left: 40 },
            animated: false,
        });
    };

    const arrivalText = isDelivered
        ? `Delivered today at ${formatTime(stepTimes.delivered ?? expectedDelivery)}`
        : `Arriving today by ${formatTime(expectedDelivery)}`;

    return (
        <SafeAreaComponent>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backBtn}
                    activeOpacity={0.7}
                    accessibilityRole="button"
                    accessibilityLabel="Go back"
                >
                    <LeftarrowIcon color={BelloraColors.textDark} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Track Order</Text>
            </View>

            <ScrollView
                style={styles.flex}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                {/* Order summary */}
                <View style={styles.orderCard}>
                    <View style={styles.orderCardRow}>
                        <Text style={styles.orderId}>{MOCK_ORDER.id}</Text>
                        <View style={[styles.badge, isDelivered && styles.badgeDelivered]}>
                            <Text style={[styles.badgeTxt, isDelivered && styles.badgeTxtDelivered]}>
                                {STATUS_BADGE_LABEL[status]}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.arrivalTxt}>{arrivalText}</Text>
                </View>

                {/* Status timeline */}
                <View style={styles.timeline}>
                    {ORDER_STEPS.map((step, index) => {
                        const isDone = index <= stepIndex;
                        const isLast = index === ORDER_STEPS.length - 1;
                        const time = stepTimes[step.status];

                        return (
                            <View key={step.status} style={styles.stepRow}>
                                <View style={styles.stepIndicator}>
                                    <View style={[styles.stepCircle, isDone && styles.stepCircleDone]}>
                                        {isDone && <CheckIcon />}
                                    </View>
                                    {!isLast && (
                                        <View
                                            style={[
                                                styles.stepLine,
                                                index < stepIndex && styles.stepLineDone,
                                            ]}
                                        />
                                    )}
                                </View>
                                <View style={styles.stepText}>
                                    <Text style={[styles.stepLabel, !isDone && styles.stepLabelPending]}>
                                        {step.label}
                                    </Text>
                                    <Text style={styles.stepTime}>
                                        {time
                                            ? formatDateTime(time)
                                            : step.status === "delivered"
                                                ? `Expected ${formatDateTime(expectedDelivery)}`
                                                : "Pending"}
                                    </Text>
                                </View>
                            </View>
                        );
                    })}
                </View>

                {/* Live map */}
                <View style={styles.mapCard}>
                    <MapView
                        ref={mapRef}
                        style={styles.map}
                        provider={Platform.OS === "android" ? PROVIDER_GOOGLE : undefined}
                        customMapStyle={MAP_STYLE}
                        userInterfaceStyle="light"
                        initialRegion={{
                            latitude: (DELIVERY_ROUTE[0].latitude + CUSTOMER_LOCATION.latitude) / 2,
                            longitude: (DELIVERY_ROUTE[0].longitude + CUSTOMER_LOCATION.longitude) / 2,
                            latitudeDelta: 0.03,
                            longitudeDelta: 0.03,
                        }}
                        onMapReady={fitRoute}
                        toolbarEnabled={false}
                        showsPointsOfInterests={false}
                        showsCompass={false}
                        rotateEnabled={false}
                        pitchEnabled={false}
                    >
                        <Polyline
                            coordinates={DELIVERY_ROUTE}
                            strokeColor={BelloraColors.chocolate}
                            strokeWidth={3}
                            lineDashPattern={[8, 6]}
                        />

                        <Marker
                            coordinate={CUSTOMER_LOCATION}
                            anchor={{ x: 0.5, y: 1 }}
                            tracksViewChanges={tracksMarkerChanges}
                        >
                            <MapPinIcon />
                        </Marker>

                        {!isDelivered && (
                            <Marker
                                coordinate={riderLocation}
                                anchor={{ x: 0.5, y: 0.5 }}
                                tracksViewChanges={tracksMarkerChanges}
                            >
                                <View style={styles.riderDot} />
                            </Marker>
                        )}
                    </MapView>
                </View>
            </ScrollView>
        </SafeAreaComponent>
    );
};

export default OrderTrackingScreen;
