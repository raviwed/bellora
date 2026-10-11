import { StyleSheet } from "react-native";

export const styles =StyleSheet.create({
   headerContainer:{
    flexDirection:"row",
     justifyContent:"space-between", 
     alignItems:"center",

     paddingHorizontal:10,
   },
   headerIcons:{
    flexDirection:"row" 
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
   }

})