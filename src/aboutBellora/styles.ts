import { StyleSheet } from "react-native";
import { BelloraColors } from "../../assets/constants/enums";

// Montserrat static TTFs live in assets/fonts – file name === PostScript name,
// so the same string works on iOS and Android.
const FONTS = {
    regular: "Montserrat-Regular",
    medium: "Montserrat-Medium",
    semiBold: "Montserrat-SemiBold",
};

export const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 8,
        gap: 12,
    },
    backBtn: {
        padding: 4,
    },
    headerTitle: {
        fontSize: 17,
        color: BelloraColors.textDark,
        fontFamily: FONTS.semiBold,
    },

    content: {
        paddingHorizontal: 20,
        paddingTop: 8,
        paddingBottom: 24,
    },

    // Logo + tagline
    brand: {
        alignItems: "center",
        marginBottom: 16,
    },
    logo: {
        width: 150,
        height: 83,
    },
    tagline: {
        marginTop: 2,
        fontSize: 10,
        letterSpacing: 1.6,
        color: BelloraColors.textDark,
        fontFamily: FONTS.medium,
    },

    paragraph: {
        marginBottom: 14,
        fontSize: 13,
        lineHeight: 20,
        textAlign: "center",
        color: BelloraColors.textSecondary,
        fontFamily: FONTS.regular,
    },

    // Cookie banner – the source image is a circle crop, so it is scaled up
    // inside the frame to keep the transparent corners out of view.
    banner: {
        height: 150,
        marginTop: 4,
        borderRadius: 14,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: BelloraColors.chocolate,
    },
    bannerImage: {
        width: "135%",
        aspectRatio: 1,
    },

    // Feature highlights
    features: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16,
    },
    feature: {
        flex: 1,
        alignItems: "center",
    },
    featureIcon: {
        width: 34,
        height: 34,
        borderRadius: 17,
        borderWidth: 1,
        borderColor: BelloraColors.cardBorder,
        backgroundColor: BelloraColors.white,
        alignItems: "center",
        justifyContent: "center",
    },
    featureTxt: {
        marginTop: 6,
        fontSize: 10,
        color: BelloraColors.textSecondary,
        fontFamily: FONTS.regular,
    },

    // Bottom CTA
    footer: {
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 12,
    },
    storyBtn: {
        backgroundColor: BelloraColors.buttonBrown,
    },
    storyBtnTxt: {
        fontSize: 15,
        fontWeight: "normal",
        fontFamily: FONTS.semiBold,
    },
});
