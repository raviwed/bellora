import { StyleSheet } from "react-native";
import { BelloraColors } from "../../assets/constants/enums";

const STEP_CIRCLE_SIZE = 20;

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

    content: {
        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 24,
    },
    
    orderCard: {
        backgroundColor: BelloraColors.white,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: BelloraColors.cardBorder,
        paddingHorizontal: 14,
        paddingVertical: 14,
    },
    orderCardRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    orderId: {
        fontSize: 15,
        color: BelloraColors.textDark,
        fontFamily: "BelloraHeading-Bold",
    },
    badge: {
        backgroundColor: BelloraColors.cardBackground,
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    badgeDelivered: {
        backgroundColor: BelloraColors.deliveredBackground,
    },
    badgeTxt: {
        fontSize: 11,
        color: BelloraColors.textSecondary,
        fontFamily: "BelloraDescription-Regular",
    },
    badgeTxtDelivered: {
        color: BelloraColors.deliveredText,
    },
    arrivalTxt: {
        marginTop: 6,
        fontSize: 13,
        color: BelloraColors.textMuted,
        fontFamily: "BelloraDescription-Regular",
    },

    // Status timeline
    timeline: {
        marginTop: 14,
        marginBottom: 14,
    },
    stepRow: {
        flexDirection: "row",
    },
    stepIndicator: {
        width: STEP_CIRCLE_SIZE,
        alignItems: "center",
    },
    stepCircle: {
        width: STEP_CIRCLE_SIZE,
        height: STEP_CIRCLE_SIZE,
        borderRadius: STEP_CIRCLE_SIZE / 2,
        borderWidth: 1.5,
        borderColor: BelloraColors.cardBorder,
        backgroundColor: BelloraColors.white,
        alignItems: "center",
        justifyContent: "center",
    },
    stepCircleDone: {
        borderColor: BelloraColors.deliveredText,
        backgroundColor: BelloraColors.deliveredText,
    },
    stepLine: {
        flex: 1,
        width: 2,
        minHeight: 20,
        backgroundColor: BelloraColors.cardBorder,
    },
    stepLineDone: {
        backgroundColor: BelloraColors.deliveredText,
    },
    stepText: {
        flex: 1,
        marginLeft: 12,
        paddingBottom: 14,
    },
    stepLabel: {
        fontSize: 14,
        color: BelloraColors.textDark,
        fontFamily: "BelloraDescription-Regular",
    },
    stepLabelPending: {
        color: BelloraColors.textMuted,
    },
    stepTime: {
        marginTop: 2,
        fontSize: 11,
        color: BelloraColors.textMuted,
        fontFamily: "BelloraDescription-Regular",
    },

    // Map
    mapCard: {
        height: 200,
        borderRadius: 16,
        overflow: "hidden",
        backgroundColor: BelloraColors.cardBackground,
    },
    map: {
        ...StyleSheet.absoluteFill,
    },
    riderDot: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: BelloraColors.chocolate,
        borderWidth: 2,
        borderColor: BelloraColors.white,
    },
});
