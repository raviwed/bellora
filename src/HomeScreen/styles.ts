import { StyleSheet } from "react-native";
import { BelloraColors } from "../../assets/constants/enums";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    headerIcons: {
        flexDirection: "row",
    },
    notificationContainer: {
        position: "absolute",
        right: 0,
        top: -3,
        width: 15,
        height: 15,
        backgroundColor: "red",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    notifyTxt: {
        fontSize: 10,
        color: "#fff",
    },
    searchbox: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
        justifyContent: "center",
        backgroundColor: "#fff",
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignSelf: "center",
        borderColor: "rgb(230, 211, 188)",
        borderRadius: 30,
    },
    containerBox: {
        marginTop: 20,
        alignSelf: "center",
    },
    menuContainer: {
        flexGrow: 0,
    },
    menuBox: {
        width: 80,
        alignItems: "center",
        alignSelf: "flex-start",
        marginHorizontal: 10,
        marginTop: 20,
    },
    menuImage: {
        width: 80,
        height: 80,
    },
    menutxt: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 16,
        color: BelloraColors.primary,
        fontFamily: "BelloraDescription-Regular",
    },
    bestSellerContainer: {
        paddingHorizontal: 10,
        marginTop: 10,
        marginBottom: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    bestSeller: {
        fontSize: 34,
        color: BelloraColors.darkJaggery,
        fontFamily: "BelloraHeading-Bold",
    },
    viewTxt: {
        color: BelloraColors.lightjaggery,
        fontFamily: "BelloraDescription-Regular",
    },
});

export const cardStyles = StyleSheet.create({
    listContent: {
        paddingBottom: 30,
    },
    row: {
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginBottom: 16,
    },
    card: {
        width: "48%",
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#E8D5C0",
        overflow: "hidden",
    },
    cardImage: {
        width: "100%",
        height: 140,
    },
    cardBody: {
        padding: 12,
    },
    cardName: {
        fontSize: 16,
        fontWeight: "600",
        color: "#3B2314",
    },
    priceRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: "700",
        color: "#3B2314",
    },
    addBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#6B3A1E",
        alignItems: "center",
        justifyContent: "center",
    },
    addTxt: {
        color: "#FFFFFF",
        fontSize: 24,
        lineHeight: 26,
        fontWeight: "400",
    },
});