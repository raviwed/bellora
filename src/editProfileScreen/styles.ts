import { StyleSheet } from "react-native";

const TEXT_DARK = "#3B2314";
const BORDER = "#E8D5C0";
const AVATAR_BG = "#EBD9C2";
const ACCENT = "#D9822B";

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
        color: TEXT_DARK,
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
        backgroundColor: AVATAR_BG,
        alignItems: "center",
        justifyContent: "center",
    },
    avatarTxt: {
        fontSize: 26,
        color: TEXT_DARK,
        fontFamily: "BelloraHeading-Bold",
    },
    changePhotoTxt: {
        marginTop: 10,
        fontSize: 13,
        color: ACCENT,
        fontFamily: "BelloraDescription-Regular",
    },

    // Form fields
    field: {
        marginBottom: 16,
    },
    label: {
        marginBottom: 6,
        fontSize: 12,
        color: TEXT_DARK,
        fontFamily: "BelloraDescription-Regular",
    },
    input: {
        height: 48,
        paddingHorizontal: 14,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: BORDER,
        backgroundColor: "#FFFFFF",
        fontSize: 14,
        color: TEXT_DARK,
        fontFamily: "BelloraDescription-Regular",
    },

    // Bottom button
    footer: {
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 16,
    },
});