import { Dimensions, StyleSheet } from "react-native"
import { BelloraColors } from "../../assets/constants/enums";

const { width, height } = Dimensions.get("window")

const FONTS = {
    serifBold: "PlayfairDisplay-Bold",
    bold: "Montserrat-Bold",
    semiBold: "Montserrat-SemiBold",
    medium: "Montserrat-Medium",
    regular: "Montserrat-Regular",
}

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: BelloraColors.cream,
    },
    image: {
        width,
        height: height * 0.38,
    },

    headerRow: {
        position: "absolute",
        left: 16,
        right: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerRight: {
        flexDirection: "row",
        gap: 10,
    },
    circleBtn: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: BelloraColors.white,
        alignItems: "center",
        justifyContent: "center",
    },

    /* Content */
    content: {
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: 18,
        paddingTop: 14,
        paddingBottom: 12,
    },
    brandStatus: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontFamily: FONTS.serifBold,
        fontSize: 21,
        color: BelloraColors.textDark,
    },
    inStockValue: {
        backgroundColor: BelloraColors.successBackground,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    inStockTxt: {
        fontFamily: FONTS.medium,
        fontSize: 10.5,
        color: BelloraColors.successText,
    },

    ratingRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
        gap: 8,
    },
    stars: {
        flexDirection: "row",
        gap: 2,
    },
    ratingTxt: {
        fontFamily: FONTS.regular,
        fontSize: 11.5,
        color: BelloraColors.textSubtle,
    },

    priceRow: {
        flexDirection: "row",
        alignItems: "baseline",
        marginTop: 18,
        gap: 8,
    },
    price: {
        fontFamily: FONTS.bold,
        fontSize: 24,
        color: BelloraColors.textDark,
    },
    oldPrice: {
        fontFamily: FONTS.regular,
        fontSize: 12.5,
        color: BelloraColors.textSubtle,
        textDecorationLine: "line-through",
    },

    featuresRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 4,
        marginTop: 18,
    },
    featureItem: {
        alignItems: "center",
        gap: 8,
    },
    featureCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: BelloraColors.productBorder,
        backgroundColor: BelloraColors.white,
        alignItems: "center",
        justifyContent: "center",
    },
    featureTxt: {
        fontFamily: FONTS.regular,
        fontSize: 10.5,
        color: BelloraColors.textSubtle,
    },

    description: {
        fontFamily: FONTS.regular,
        fontSize: 13,
        lineHeight: 19,
        color: BelloraColors.textSubtle,
        marginTop: 18,
    },

    /* Footer */
    footer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    qtyBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 84,
        height: 44,
        paddingHorizontal: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: BelloraColors.productBorder,
        backgroundColor: BelloraColors.white,
    },
    qtyTxt: {
        fontFamily: FONTS.semiBold,
        fontSize: 14,
        color: BelloraColors.textDark,
    },
    addBtn: {
        flex: 1,
        height: 48,
        borderRadius: 14,
        backgroundColor: BelloraColors.buttonBrown,
        alignItems: "center",
        justifyContent: "center",
    },
    addBtnTxt: {
        fontFamily: FONTS.semiBold,
        fontSize: 15,
        color: BelloraColors.white,
    },
})