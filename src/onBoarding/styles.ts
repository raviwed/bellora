import { StyleSheet } from "react-native";
import { BelloraColors } from "../../assets/constants/enums";

export const styles = StyleSheet.create({
    pureIngredient: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 20,
    },

    logoImage: {
        width: 140,
        height: 70,
    },

    pureTxt: {
        fontSize: 40,
        lineHeight: 48,
        textAlign: "center",
        fontFamily: "BelloraHeading-Bold",
        color: BelloraColors.cocoa,
    },

    subtitleTxt: {
        fontSize: 40,
        lineHeight: 48,
        textAlign: "center",
        fontFamily: "BelloraHeading-Bold",
        color: BelloraColors.cocoa,
    },
    
    jaggeryImage: {
        width: 300,
        height: 300,
        borderRadius: 150,
        overflow: "hidden",
    },

    bottomSection: {
        width: "100%",
        alignItems: "center",
    },

    pagination: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        marginBottom: 16,
    },

    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: BelloraColors.onboardingDotInactive,
    },

    activeDot: {
        width: 24,
        height: 8,
        borderRadius: 4,
        backgroundColor: BelloraColors.cocoa,
    },

    textBlock: {
        width: "100%",
        alignItems: "center",
        marginTop: 24,
        gap: 12,
    },

    titleContainer: {
        width: "100%",
        alignItems: "center",
    },

    madejaggery: {
        width: "100%",
        alignItems: "center",
        gap: 4,
    },

    descriptionTxt: {
        width: "100%",
        fontFamily: "BelloraLogo-Regular",
        color: BelloraColors.cocoa,
        fontSize: 16,
        lineHeight: 22,
        textAlign: "center",
    },

    imageWrapper: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 0,
        overflow: "hidden",
    },
});