import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import SafeAreaComponent from "../../Components/SafeAreaComponent";

import { BelloraScreens } from "../../assets/constants/enums";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { RootStackParamList } from "../navigation/types";

type MenuItem = {
    id: string;
    label: string;
    icon: string;
    nav?: keyof RootStackParamList; // optional: only items with a screen navigate
};

const user = {
    name: "Ravi Teja",
    email: "ravi@example.com",
};

const menuItems: MenuItem[] = [
    { id: "orders", label: "My Orders", icon: "file-text" },
    { id: "addresses", label: "Addresses", icon: "map-pin" },
    { id: "wishlist", label: "Wishlist", icon: "heart" },
    { id: "notifications", label: "Notifications", icon: "bell" },
    { id: "help", label: "Help & Support", icon: "help-circle", nav: BelloraScreens.helpsupport },
    { id: "about", label: "About Bellora", icon: "info" },
    { id: "settings", label: "Settings", icon: "sliders" },
];

const getInitials = (name: string) =>
    name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0].toUpperCase())
        .join("");

const ProfileScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleEdit = () => {
        // navigation.navigate(BelloraScreens.editProfile)
    };

    const handleMenuPress = (item: MenuItem) => {
        if (!item.nav) return; // no screen yet for this item
        navigation.navigate(item.nav);
    };

    return (
        <SafeAreaComponent>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.title}>Profile</Text>

                {/* User info */}
                <View style={styles.userRow}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarTxt}>{getInitials(user.name)}</Text>
                    </View>

                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>{user.name}</Text>
                        <Text style={styles.userEmail}>{user.email}</Text>
                    </View>

                    <TouchableOpacity
                        onPress={handleEdit}
                        style={styles.editBtn}
                        activeOpacity={0.7}
                        accessibilityRole="button"
                        accessibilityLabel="Edit profile"
                    >
                        {/* <Icon name="edit-2" size={18} color="#3B2314" /> */}
                    </TouchableOpacity>
                </View>

                {/* Menu list */}
                <View style={styles.menuList}>
                    {menuItems.map((item, index) => (
                        <TouchableOpacity
                            key={item.id}
                            style={[
                                styles.menuRow,
                                index === menuItems.length - 1 && styles.menuRowLast,
                            ]}
                            onPress={() => handleMenuPress(item)}
                            activeOpacity={0.7}
                            accessibilityRole="button"
                        >
                            <View style={styles.menuLeft}>
                                {/* <Icon name={item.icon} size={18} color="#3B2314" /> */}
                                <Text style={styles.menuTxt}>{item.label}</Text>
                            </View>
                            {/* <Icon name="chevron-right" size={20} color="#A89484" /> */}
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaComponent>
    );
};

export default ProfileScreen;