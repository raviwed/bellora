import { StyleSheet } from "react-native";
import { BelloraColors } from "../../assets/constants/enums";
const BROWN = "#6B3A1E";
const TEXT_DARK = "#3B2314";

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

//BottomSheet
   container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 24,
        gap: 14,
    },
    heading: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 10,
        color: TEXT_DARK,
        fontFamily: "BelloraHeading-Bold",
    },
    btn: {
        height: 52,
        borderRadius: 14,
        backgroundColor: BROWN,
        alignItems: "center",
        justifyContent: "center",
    },
    btnTxt: {
        color: "#FFFFFF",
        fontSize: 15,
        fontFamily: "BelloraDescription-Regular",
    },
    row: {
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#EADBCB",
    },
    rowTxt: {
        fontSize: 15,
        color: TEXT_DARK,
        fontFamily: "BelloraDescription-Regular",
    },
    input: {
        height: 48,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: "#E8D5C0",
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 14,
        fontSize: 14,
        color: TEXT_DARK,
    },
    applyBtn: {
        marginTop: 14,
        height: 52,
        borderRadius: 14,
        backgroundColor: BROWN,
        alignItems: "center",
        justifyContent: "center",
    },
    applyTxt: {
        color: "#FFFFFF",
        fontSize: 15,
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



export const sheetStyles = StyleSheet.create({
    productRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    productImg: {
        width: 80,
        height: 80,
        borderRadius: 16,
    },
    productInfo: {
        flex: 1,
        marginLeft: 14,
    },
    productName: {
        fontSize: 17,
        color: "#3B2314",
        fontFamily: "BelloraHeading-Bold",
    },
    productPrice: {
        marginTop: 4,
        fontSize: 16,
        fontWeight: "700",
        color: "#6B3A1E",
    },
    qtyRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
        marginBottom: 20,
    },
    qtyLabel: {
        fontSize: 14,
        color: "#3B2314",
        fontFamily: "BelloraDescription-Regular",
    },
    qtyBox: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#E8D5C0",
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
    },
    qtyBtn: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    qtyBtnTxt: {
        fontSize: 20,
        color: "#3B2314",
    },
    qtyDisabled: {
        opacity: 0.3,
    },
    qtyValue: {
        minWidth: 28,
        textAlign: "center",
        fontSize: 15,
        fontWeight: "600",
        color: "#3B2314",
    },
});