import React, { useMemo, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import SafeAreaComponent from "../../Components/SafeAreaComponent";
import { styles } from "./styles";

type OrderStatus = "Processing" | "Delivered";
type OrderFilter = "All" | OrderStatus;

type Order = {
    id: string;
    amount: number;
    items: number;
    date: string;
    status: OrderStatus;
};

const FILTERS: OrderFilter[] = ["All", "Processing", "Delivered"];

const orders: Order[] = [
    { id: "BELLORA12345", amount: 370, items: 2, date: "23 Sep 2025", status: "Delivered" },
    { id: "BELLORA12344", amount: 320, items: 3, date: "18 Sep 2025", status: "Delivered" },
    { id: "BELLORA12343", amount: 480, items: 2, date: "12 Sep 2025", status: "Delivered" },
];

const OrdersScreen = () => {
    const [activeFilter, setActiveFilter] = useState<OrderFilter>("All");

    const filteredOrders = useMemo(
        () =>
            activeFilter === "All"
                ? orders
                : orders.filter((order) => order.status === activeFilter),
        [activeFilter]
    );

    const renderOrder = ({ item }: { item: Order }) => {
        const isDelivered = item.status === "Delivered";

        return (
            <TouchableOpacity style={styles.card} activeOpacity={0.8}>
                <View style={styles.cardTopRow}>
                    <Text style={styles.orderId}>#{item.id}</Text>
                    <View
                        style={[
                            styles.badge,
                            isDelivered ? styles.badgeDelivered : styles.badgeProcessing,
                        ]}
                    >
                        <Text
                            style={[
                                styles.badgeTxt,
                                isDelivered ? styles.badgeTxtDelivered : styles.badgeTxtProcessing,
                            ]}
                        >
                            {item.status}
                        </Text>
                    </View>
                </View>

                <Text style={styles.amountTxt}>
                    ₹{item.amount} · {item.items} {item.items === 1 ? "item" : "items"}
                </Text>
                <Text style={styles.dateTxt}>{item.date}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaComponent>
            <View style={styles.container}>
                <Text style={styles.title}>My Orders</Text>
                <View style={styles.filterRow}>
                    {FILTERS.map((filter) => {
                        const isActive = activeFilter === filter;
                        return (
                            <TouchableOpacity
                                key={filter}
                                style={[styles.chip, isActive && styles.chipActive]}
                                onPress={() => setActiveFilter(filter)}
                                activeOpacity={0.8}
                                accessibilityRole="button"
                                accessibilityState={{ selected: isActive }}
                            >
                                <Text style={[styles.chipTxt, isActive && styles.chipTxtActive]}>
                                    {filter}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
                <FlatList
                    data={filteredOrders}
                    keyExtractor={(item) => item.id}
                    renderItem={renderOrder}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContent}
                    ListEmptyComponent={
                        <Text style={styles.emptyTxt}>No orders found</Text>
                    }
                />
            </View>
        </SafeAreaComponent>
    );
};

export default OrdersScreen;