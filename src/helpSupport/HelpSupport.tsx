import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SafeAreaComponent from "../../Components/SafeAreaComponent";
import CommonButton from "../../Components/CommonBtn";
import { styles } from "./styles";

type HelpItem = {
    id: string;
    label: string;
    icon: string;
};

const helpItems: HelpItem[] = [
    { id: "faqs", label: "FAQs", icon: "help-circle" },
    { id: "contact", label: "Contact Us", icon: "phone-call" },
    { id: "chat", label: "Live Chat", icon: "message-square" },
    { id: "track", label: "Track Order", icon: "truck" },
    { id: "refund", label: "Return & Refund", icon: "package" },
];

const HelpSupportScreen = () => {
    const navigation = useNavigation<any>();

    const handleItemPress = (item: HelpItem) => {
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
                    {/* <Icon name="arrow-left" size={22} color={BelloraColors.textDark} /> */}
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
                                {/* <Icon name={item.icon} size={18} color={BelloraColors.textDark} /> */}
                                <Text style={styles.menuTxt}>{item.label}</Text>
                            </View>
                            {/* <Icon name="chevron-right" size={20} color={BelloraColors.chevron} /> */}
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.helpCard}>
                    <Text style={styles.helpCardTitle}>Need more help?</Text>
                    <Text style={styles.helpCardSubtitle}>We're here for you!</Text>
                    <CommonButton title="Contact Support" onPress={handleContactSupport} />
                </View>
            </ScrollView>
        </SafeAreaComponent>
    );
};

export default HelpSupportScreen;