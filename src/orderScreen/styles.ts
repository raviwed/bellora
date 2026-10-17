import { StyleSheet } from "react-native";

const BROWN = "#6B3A1E";
const TEXT_DARK = "#3B2314";
const BORDER = "#E8D5C0";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
    },

    title: {
        fontSize: 22,
        color: TEXT_DARK,
        fontFamily: "BelloraHeading-Bold",
    },

    // Filter chips
    filterRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginTop: 16,
        marginBottom: 16,
    },
    chip: {
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: BORDER,
        backgroundColor: "#FFFFFF",
    },
    chipActive: {
        backgroundColor: BROWN,
        borderColor: BROWN,
    },
    chipTxt: {
        fontSize: 14,
        color: TEXT_DARK,
        fontFamily: "BelloraDescription-Regular",
    },
    chipTxtActive: {
        color: "#FFFFFF",
    },

    // List
    listContent: {
        paddingBottom: 24,
        gap: 14,
    },

    // Order card
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        borderWidth: 1,
        borderColor: BORDER,
        paddingHorizontal: 14,
        paddingVertical: 14,
    },
    cardTopRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    orderId: {
        fontSize: 16,
        fontWeight: "600",
        color: TEXT_DARK,
        fontFamily: "BelloraDescription-Regular",
    },
    amountTxt: {
        marginTop: 6,
        fontSize: 13,
        color: "#6E5A4C",
        fontFamily: "BelloraDescription-Regular",
    },
    dateTxt: {
        marginTop: 4,
        fontSize: 12,
        color: "#8C7A6C",
        fontFamily: "BelloraDescription-Regular",
    },

    // Status badge
    badge: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12,
    },
    badgeDelivered: {
        backgroundColor: "#DDEBD3",
    },
    badgeProcessing: {
        backgroundColor: "#FBEBCF",
    },
    badgeTxt: {
        fontSize: 11,
        fontFamily: "BelloraDescription-Regular",
    },
    badgeTxtDelivered: {
        color: "#4F7A3A",
    },
    badgeTxtProcessing: {
        color: "#A8701A",
    },

    emptyTxt: {
        textAlign: "center",
        marginTop: 40,
        fontSize: 14,
        color: "#8C7A6C",
        fontFamily: "BelloraDescription-Regular",
    },
});