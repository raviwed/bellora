import { StyleSheet } from "react-native";
import { BelloraColors } from "../../assets/constants/enums";

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
        color: BelloraColors.textDark,
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
        backgroundColor: BelloraColors.avatarBackground,
        alignItems: "center",
        justifyContent: "center",
    },
    avatarTxt: {
        fontSize: 22,
        color: BelloraColors.textDark,
        fontFamily: "BelloraHeading-Bold",
    },
    userInfo: {
        flex: 1,
        marginLeft: 14,
    },
    userName: {
        fontSize: 17,
        color: BelloraColors.textDark,
        fontFamily: "BelloraHeading-Bold",
    },
    userEmail: {
        marginTop: 2,
        fontSize: 12,
        color: BelloraColors.textMuted,
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
        borderBottomColor: BelloraColors.divider,
    },
    menuRowLast: {
        borderBottomWidth: 1,
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
        fontSize: 15,
        color: BelloraColors.textDark,
        fontFamily: "BelloraDescription-Regular",
    },
});