import { StyleSheet } from "react-native";
import { BelloraColors } from "../../assets/constants/enums";

export const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },

    // Header
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

    // Scroll content
    content: {
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 24,
    },

    // Avatar
    avatarSection: {
        alignItems: "center",
        marginBottom: 24,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: BelloraColors.avatarBackground,
        alignItems: "center",
        justifyContent: "center",
    },
    avatarTxt: {
        fontSize: 26,
        color: BelloraColors.textDark,
        fontFamily: "BelloraHeading-Bold",
    },
    changePhotoTxt: {
        marginTop: 10,
        fontSize: 13,
        color: BelloraColors.accent,
        fontFamily: "BelloraDescription-Regular",
    },

    // Form fields
    field: {
        marginBottom: 16,
    },
    label: {
        marginBottom: 6,
        fontSize: 12,
        color: BelloraColors.textDark,
        fontFamily: "BelloraDescription-Regular",
    },
    input: {
        height: 48,
        paddingHorizontal: 14,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: BelloraColors.cardBorder,
        backgroundColor: BelloraColors.white,
        fontSize: 14,
        color: BelloraColors.textDark,
        fontFamily: "BelloraDescription-Regular",
    },

    // Bottom button
    footer: {
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 16,
    },
});