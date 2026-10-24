import { StyleSheet } from "react-native";
import { BelloraColors } from "../../assets/constants/enums";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
    },

    title: {
        fontSize: 22,
        color: BelloraColors.textDark,
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
        borderColor: BelloraColors.cardBorder,
        backgroundColor: BelloraColors.white,
    },
    chipActive: {
        backgroundColor: BelloraColors.brown,
        borderColor: BelloraColors.brown,
    },
    chipTxt: {
        fontSize: 14,
        color: BelloraColors.textDark,
        fontFamily: "BelloraDescription-Regular",
    },
    chipTxtActive: {
        color: BelloraColors.white,
    },

    // List
    listContent: {
        paddingBottom: 24,
        gap: 14,
    },

    // Order card
    card: {
        backgroundColor: BelloraColors.white,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: BelloraColors.cardBorder,
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
        color: BelloraColors.textDark,
        fontFamily: "BelloraDescription-Regular",
    },
    amountTxt: {
        marginTop: 6,
        fontSize: 13,
        color: BelloraColors.textSecondary,
        fontFamily: "BelloraDescription-Regular",
    },
    dateTxt: {
        marginTop: 4,
        fontSize: 12,
        color: BelloraColors.textMuted,
        fontFamily: "BelloraDescription-Regular",
    },

    // Status badge
    badge: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12,
    },
    badgeDelivered: {
        backgroundColor: BelloraColors.deliveredBackground,
    },
    badgeProcessing: {
        backgroundColor: BelloraColors.processingBackground,
    },
    badgeTxt: {
        fontSize: 11,
        fontFamily: "BelloraDescription-Regular",
    },
    badgeTxtDelivered: {
        color: BelloraColors.deliveredText,
    },
    badgeTxtProcessing: {
        color: BelloraColors.processingText,
    },

    emptyTxt: {
        textAlign: "center",
        marginTop: 40,
        fontSize: 14,
        color: BelloraColors.textMuted,
        fontFamily: "BelloraDescription-Regular",
    },
});