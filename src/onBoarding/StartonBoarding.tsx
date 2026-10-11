
import React, { useState } from "react";
import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import SafeAreaComponent from "../../Components/SafeAreaComponent";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const onboardingData = [
    {
        title: "Pure Ingredients",
        subtitle: "Real Good ness",
        description: [
            "Made with natural jaggery",
            "No refined sugar, no maida",
        ],
        image: require("../../assets/png/jaggery.png"),
    },
    {
        title: "WholeSome",
        subtitle: "Delicious",
        description: [
            "Soft, light and easy to digest",
            "Good ness in every bite",
        ],
        image: require("../../assets/png/biscut.png"),
    },
    {
        title: "Better Choices",
        subtitle: "For Healthier You",
        description: [
            "jaggery based. No perservatives",
            "just pure, natural ingredients",
        ],
        image: require("../../assets/png/boxbiscut.png"),
    },
];

const StartonBoarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigation = useNavigation<any>();

    const currentScreen = onboardingData[currentIndex];
    const isLastScreen =
        currentIndex === onboardingData.length - 1;

    const handleNext = () => {
        if (!isLastScreen) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
            navigation.navigate("MainTabs");
        }
    };

    return (
        <SafeAreaComponent>
            <View style={styles.pureIngredient}>
                <Image
                    source={require("../../assets/png/logo.png")}
                    style={styles.logoImage}
                    resizeMode="contain"
                />

                <View style={styles.titleContainer}>
                    <Text style={styles.pureTxt}>
                        {currentScreen.title}
                    </Text>

                    <Text style={styles.subtitleTxt}>
                        {currentScreen.subtitle}
                    </Text>
                </View>
                <View style={styles.madejaggery}>
                    <Text style={styles.descriptionTxt}>
                        {currentScreen.description[0]}
                    </Text>
                    <Text style={styles.descriptionTxt}>
                        {currentScreen.description[1]}
                    </Text>
                </View>

                <Image
                    source={currentScreen.image}
                    style={styles.jaggeryImage}
                    resizeMode="contain"
                />

                <View style={styles.pagination}>
                    {onboardingData.map((_, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setCurrentIndex(index)}
                            activeOpacity={0.7}
                            accessibilityLabel={`Go to onboarding page ${index + 1}`}
                            accessibilityRole="button"
                            style={[
                                styles.dot,
                                currentIndex === index && styles.activeDot,
                            ]}
                        />
                    ))}
                </View>

                <TouchableOpacity
                    style={styles.nextBtn}
                    onPress={handleNext}
                    activeOpacity={0.8}
                >
                    <Text style={styles.nextbtnTxt}>
                        {isLastScreen ? "Get Started" : "Next"}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaComponent>
    );
};

export default StartonBoarding;