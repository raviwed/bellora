import { StyleSheet } from "react-native";
import { BelloraColors } from "../../assets/constants/enums";

export const styles =StyleSheet.create({
   headerContainer:{
    flexDirection:"row",
     justifyContent:"space-between", 
     alignItems:"center",

     paddingHorizontal:10,
   },
   menutxt:{
    textAlign:"center",
     marginTop:10,
     fontSize:16,
     color:BelloraColors.primary,
     fontFamily:"BelloraDescription-Regular"
   },
   menuContainer:{
    flexGrow: 0,
    alignSelf: "flex-start",
   },
   menuBox:{
    alignItems: "center",
   alignSelf: "flex-start",
    marginHorizontal:10,
     marginTop:20
   },
   menuImage:{
    width: 80, 
    height: 80
   },
   headerIcons:{
    flexDirection:"row" 
   },
   bestSellerContainer:{
    marginTop:20,
    paddingHorizontal:10,
    flexDirection:"row",
    justifyContent:"space-between"
   },
   notificationContainer:{
    position:"absolute",
    right:0,
    top:-3,
    width:15, 
    height:15, 
    backgroundColor:"red", 
    borderRadius:10, 
    justifyContent:"center", 
    alignItems:"center"
   },
   bestSeller:{
    fontSize:34,
    color:BelloraColors.darkJaggery,
    fontFamily:"BelloraHeading-Bold"
   },
   viewTxt:{
    color:BelloraColors.lightjaggery,
    fontFamily:"BelloraDescription-Regular"
   },
   notifyTxt:{
    fontSize:10,
     color:"#fff",
   },
   searchbox:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:15,
    justifyContent:"center",
    backgroundColor:"#fff",
    borderWidth:1,
    paddingHorizontal:10,
    paddingVertical:5,
    alignSelf:"center",
    borderColor:"rgb(230, 211, 188)",
    borderRadius:30
   },
   containerBox:{
    marginTop:20,
    alignSelf:"center",
   }
})