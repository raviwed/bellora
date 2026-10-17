import { StyleSheet } from "react-native";

const TEXT_DARK = "#3B2314";
const TEXT_MUTED = "#8C7A6C";
const DIVIDER = "#EADBCB";
const AVATAR_BG = "#EBD9C2";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 24,
    },

    title: {
        fontSize: 24,
        color: TEXT_DARK,
        fontFamily: "BelloraHeading-Bold",
    },

    // User info
    userRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 12,
    },
    avatar: {
        width: 68,
        height: 68,
        borderRadius: 34,
        backgroundColor: AVATAR_BG,
        alignItems: "center",
        justifyContent: "center",
    },
    avatarTxt: {
        fontSize: 22,
        color: TEXT_DARK,
        fontFamily: "BelloraHeading-Bold",
    },
    userInfo: {
        flex: 1,
        marginLeft: 14,
    },
    userName: {
        fontSize: 17,
        color: TEXT_DARK,
        fontFamily: "BelloraHeading-Bold",
    },
    userEmail: {
        marginTop: 2,
        fontSize: 12,
        color: TEXT_MUTED,
        fontFamily: "BelloraDescription-Regular",
    },
    editBtn: {
        padding: 8,
    },

    // Menu list
    menuList: {
        marginTop: 4,
    },
    menuRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: DIVIDER,
    },
    menuRowLast: {
        borderBottomWidth: 1,
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
});