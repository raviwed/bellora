import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SafeAreaComponent from "../../Components/SafeAreaComponent";
import CommonButton from "../../Components/CommonBtn";
import type { SvgProps } from "react-native-svg";
import LeftarrowIcon from "../../assets/svg/BottomTabNav/LeftarrowIcon";
import HelpCircleIcon from "../../assets/svg/HelpCircleIcon.svg";
import TelePhoneIcon from "../../assets/svg/TelePhone.svg";
import ChatIcon from "../../assets/svg/chatIcon.svg";
import TruckIcon from "../../assets/svg/TruckIcon.svg";
import PackerIcon from "../../assets/svg/PackerIcon.svg";
import ChevronRightIcon from "../../assets/svg/ChevronRightIcon.svg";
import { BelloraColors, BelloraScreens } from "../../assets/constants/enums";
import { RootStackParamList } from "../navigation/types";
import { styles } from "./styles";

type HelpItem = {
    id: string;
    label: string;
    Icon: React.FC<SvgProps>;
    iconSize?: number;
    nav?: keyof RootStackParamList;
};

const helpItems: HelpItem[] = [
    { id: "faqs", label: "FAQs", Icon: HelpCircleIcon },
    // TelePhone.svg is drawn edge-to-edge on a 15px canvas, so render it smaller to match the others
    { id: "contact", label: "Contact Us", Icon: TelePhoneIcon, iconSize: 15 },
    { id: "chat", label: "Live Chat", Icon: ChatIcon },
    { id: "track", label: "Track Order", Icon: TruckIcon, nav: BelloraScreens.orderTracking },
    { id: "refund", label: "Return & Refund", Icon: PackerIcon },
];

const HelpSupportScreen = () => {
    const navigation = useNavigation<any>();

    const handleItemPress = (item: HelpItem) => {
        if (!item.nav) return; // no screen yet for this item
        navigation.navigate(item.nav);
    };

    const handleContactSupport = () => {
    };

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
                <Text style={styles.headerTitle}>Help & Support</Text>
            </View>

            <ScrollView
                style={styles.flex}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.menuList}>
                    {helpItems.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.menuRow}
                            onPress={() => handleItemPress(item)}
                            activeOpacity={0.7}
                            accessibilityRole="button"
                        >
                            <View style={styles.menuLeft}>
                                <View style={styles.menuIcon}>
                                    <item.Icon width={item.iconSize ?? 20} height={item.iconSize ?? 20} />
                                </View>
                                <Text style={styles.menuTxt}>{item.label}</Text>
                            </View>
                            <ChevronRightIcon width={18} height={18} />
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.helpCard}>
                    <Text style={styles.helpCardTitle}>Need more help?</Text>
                    <Text style={styles.helpCardSubtitle}>We're here for you!</Text>
                    <CommonButton
                        title="Contact Support"
                        onPress={handleContactSupport}
                        buttonStyle={styles.contactBtn}
                        textStyle={styles.contactBtnTxt}
                    />
                </View>
            </ScrollView>
        </SafeAreaComponent>
    );
};

export default HelpSupportScreen;