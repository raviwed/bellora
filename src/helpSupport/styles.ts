import { StyleSheet } from "react-native";

const TEXT_DARK = "#3B2314";
const TEXT_MUTED = "#8C7A6C";
const DIVIDER = "#EADBCB";
const CARD_BG = "#F5E8D8";
const CARD_BORDER = "#EBD9C2";

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
        color: TEXT_DARK,
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
        borderBottomColor: DIVIDER,
    },
    menuLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 14,
    },
    menuTxt: {
        fontSize: 15,
        color: TEXT_DARK,
        fontFamily: "BelloraDescription-Regular",
    },

    // Need more help card
    helpCard: {
        backgroundColor: CARD_BG,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: CARD_BORDER,
        padding: 16,
    },
    helpCardTitle: {
        fontSize: 15,
        color: TEXT_DARK,
        fontFamily: "BelloraHeading-Bold",
    },
    helpCardSubtitle: {
        marginTop: 2,
        marginBottom: 14,
        fontSize: 12,
        color: TEXT_MUTED,
        fontFamily: "BelloraDescription-Regular",
    },
});