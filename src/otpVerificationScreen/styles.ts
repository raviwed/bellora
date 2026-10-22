import { StyleSheet } from "react-native"

export const COLORS = {
    background: "#FFF6F0",
    title: "#4A2C1A",
    muted: "#8C7568",
    border: "#EBD3BF",
    borderFocused: "#6B3A1E",
    button: "#6B3A1E",
    white: "#FFFFFF",
    leaf: "#EBCFAF",
}

// Playfair Display for the brand, heading and digits; Montserrat for the rest.
// Link the fonts, or remove the fontFamily lines to use the system font.
const FONTS = {
    serifBold: "PlayfairDisplay-Bold",
    serifMedium: "PlayfairDisplay-Medium",
    semiBold: "Montserrat-SemiBold",
    medium: "Montserrat-Medium",
    regular: "Montserrat-Regular",
}

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scroll: {
        flexGrow: 1,
        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 24,
    },
    decoration: {
        position: "absolute",
        left: -10,
        bottom: 0,
    },
    backBtn: {
        alignSelf: "flex-start",
        paddingVertical: 4,
    },

    /* Header */
    header: {
        alignItems: "center",
        marginTop: 16,
        paddingVertical: 8,
    },
    brand: {
        fontFamily: FONTS.serifMedium,
        fontSize: 30,
        color: COLORS.title,
        marginTop: 2,
    },
    heading: {
        fontFamily: FONTS.serifBold,
        fontSize: 26,
        color: COLORS.title,
        marginTop: 28,
        marginBottom: 8,
    },
    subHeading: {
        fontFamily: FONTS.regular,
        fontSize: 13,
        lineHeight: 19,
        color: COLORS.muted,
        textAlign: "center",
    },

    /* OTP boxes */
    otpRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 28,
    },
    otpBox: {
        width: 44,
        height: 52,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: COLORS.border,
        backgroundColor: COLORS.background,
        textAlign: "center",
        fontFamily: FONTS.serifMedium,
        fontSize: 22,
        color: COLORS.title,
        padding: 0,
    },
    otpBoxFilled: {
        backgroundColor: COLORS.white,
    },
    otpBoxFocused: {
        borderColor: COLORS.borderFocused,
        borderWidth: 1.5,
    },

    /* Resend */
    resendRow: {
        alignItems: "center",
        marginTop: 18,
    },
    resendTxt: {
        fontFamily: FONTS.regular,
        fontSize: 12.5,
        color: COLORS.muted,
    },
    timer: {
        fontFamily: FONTS.semiBold,
        color: COLORS.title,
    },
    resendActive: {
        fontFamily: FONTS.semiBold,
        color: COLORS.button,
    },

    /* Verify */
    verifyBtn: {
        height: 50,
        marginTop: 20,
        borderRadius: 14,
        backgroundColor: COLORS.button,
        alignItems: "center",
        justifyContent: "center",
    },
    verifyBtnDisabled: {
        opacity: 0.55,
    },
    verifyTxt: {
        fontFamily: FONTS.semiBold,
        fontSize: 15,
        color: COLORS.white,
    },
})