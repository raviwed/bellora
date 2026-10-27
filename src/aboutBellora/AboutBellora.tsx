import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SafeAreaComponent from "../../Components/SafeAreaComponent";
import CommonButton from "../../Components/CommonBtn";
import LeftarrowIcon from "../../assets/svg/BottomTabNav/LeftarrowIcon";
import { CheckCircleIcon, LeafIcon, ShieldIcon } from "../../assets/svg/singlePageIcon";
import { BelloraColors } from "../../assets/constants/enums";
import { styles } from "./styles";

const FEATURES = [
    { id: "pure", label: "Pure Ingredients", Icon: LeafIcon },
    { id: "sugar", label: "No Refined Sugar", Icon: ShieldIcon },
    { id: "maida", label: "No Maida", Icon: CheckCircleIcon },
];

const AboutBelloraScreen = () => {
    const navigation = useNavigation<any>();

    const handleOurStory = () => {
        // navigation.navigate(BelloraScreens.ourStory)
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
                <Text style={styles.headerTitle}>About Bellora</Text>
            </View>

            <ScrollView
                style={styles.flex}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.brand}>
                    <Image
                        source={require("../../assets/png/logo.png")}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={styles.tagline}>SWEETNESS ROOTED IN NATURE</Text>
                </View>

                <Text style={styles.paragraph}>
                    Bellora was born from a simple belief — that good food should be natural,
                    wholesome and joyful.
                </Text>
                <Text style={styles.paragraph}>
                    We create delicious, jaggery-based cookies made with pure ingredients, for a
                    healthier tomorrow.
                </Text>

                <View style={styles.banner}>
                    <Image
                        source={require("../../assets/png/biscut.png")}
                        style={styles.bannerImage}
                        resizeMode="cover"
                    />
                </View>

                <View style={styles.features}>
                    {FEATURES.map(({ id, label, Icon }) => (
                        <View key={id} style={styles.feature}>
                            <View style={styles.featureIcon}>
                                <Icon size={16} color={BelloraColors.textDark} />
                            </View>
                            <Text style={styles.featureTxt}>{label}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <CommonButton
                    title="Our Story"
                    onPress={handleOurStory}
                    buttonStyle={styles.storyBtn}
                    textStyle={styles.storyBtnTxt}
                />
            </View>
        </SafeAreaComponent>
    );
};

export default AboutBelloraScreen;
