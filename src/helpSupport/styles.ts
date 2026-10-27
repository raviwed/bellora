import { StyleSheet } from "react-native";
import { BelloraColors } from "../../assets/constants/enums";

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

    // Content
    content: {
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 24,
    },

    // Help options list
    menuList: {
        marginBottom: 12,
    },
    menuRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: BelloraColors.divider,
    },
    menuLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 14,
    },
    menuIcon: {
        width: 20,
        height: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    menuTxt: {
        fontSize: 14,
        color: BelloraColors.textDark,
        fontFamily: FONTS.regular,
    },

    // Need more help card
    helpCard: {
        backgroundColor: BelloraColors.cardBackground,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: BelloraColors.avatarBackground,
        padding: 12,
    },
    helpCardTitle: {
        fontSize: 14,
        color: BelloraColors.textDark,
        fontFamily: FONTS.semiBold,
    },
    helpCardSubtitle: {
        marginTop: 4,
        marginBottom: 14,
        fontSize: 11,
        color: BelloraColors.textMuted,
        fontFamily: FONTS.regular,
    },
    contactBtn: {
        height: 46,
        borderRadius: 10,
        backgroundColor: BelloraColors.chocolate,
    },
    contactBtnTxt: {
        fontSize: 15,
        fontWeight: "normal",
        fontFamily: FONTS.medium,
    },
});
