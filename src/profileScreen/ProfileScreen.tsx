import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import SafeAreaComponent from "../../Components/SafeAreaComponent";
import type { SvgProps } from "react-native-svg";
import EditIcon from "../../assets/svg/EditIcon.svg";
import NotePadIcon from "../../assets/svg/NotePadIcon.svg";
import LocationShareIcon from "../../assets/svg/LocationShareIcon.svg";
import HeartOutlineIcon from "../../assets/svg/HeartOutlineIcon.svg";
import NotificationIcon from "../../assets/svg/Notification.svg";
import HelpCircleIcon from "../../assets/svg/HelpCircleIcon.svg";
import ReadIcon from "../../assets/svg/ReadIcon.svg";
import RegulaizerIcon from "../../assets/svg/RegulaizerIcon.svg";
import ChevronRightIcon from "../../assets/svg/ChevronRightIcon.svg";
import { BelloraScreens } from "../../assets/constants/enums";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { RootStackParamList } from "../navigation/types";

type MenuItem = {
    id: string;
    label: string;
    Icon: React.FC<SvgProps>;
    nav?: keyof RootStackParamList; // optional: only items with a screen navigate
};

const user = {
    name: "Ravi Teja",
    email: "ravi@example.com",
};

const menuItems: MenuItem[] = [
    { id: "orders", label: "My Orders", Icon: NotePadIcon },
    { id: "addresses", label: "Addresses", Icon: LocationShareIcon },
    { id: "wishlist", label: "Wishlist", Icon: HeartOutlineIcon },
    { id: "notifications", label: "Notifications", Icon: NotificationIcon },
    { id: "help", label: "Help & Support", Icon: HelpCircleIcon, nav: BelloraScreens.helpsupport },
    { id: "about", label: "About Bellora", Icon: ReadIcon },
    { id: "settings", label: "Settings", Icon: RegulaizerIcon },
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
                        <EditIcon width={20} height={20} />
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
                                <View style={styles.menuIcon}>
                                    <item.Icon width={20} height={20} />
                                </View>
                                <Text style={styles.menuTxt}>{item.label}</Text>
                            </View>
                            <ChevronRightIcon width={18} height={18} />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaComponent>
    );
};

export default ProfileScreen;