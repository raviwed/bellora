import { StyleSheet } from "react-native";
import { BelloraColors } from "../../assets/constants/enums";

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
        fontSize: 18,
        color: BelloraColors.textDark,
        fontFamily: "BelloraHeading-Bold",
    },

    // Content
    content: {
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 24,
    },

    // Help options list
    menuList: {
        marginBottom: 20,
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
    menuTxt: {
        fontSize: 15,
        color: BelloraColors.textDark,
        fontFamily: "BelloraDescription-Regular",
    },

    // Need more help card
    helpCard: {
        backgroundColor: BelloraColors.cardBackground,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: BelloraColors.avatarBackground,
        padding: 16,
    },
    helpCardTitle: {
        fontSize: 15,
        color: BelloraColors.textDark,
        fontFamily: "BelloraHeading-Bold",
    },
    helpCardSubtitle: {
        marginTop: 2,
        marginBottom: 14,
        fontSize: 12,
        color: BelloraColors.textMuted,
        fontFamily: "BelloraDescription-Regular",
    },
});