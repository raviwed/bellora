import { StyleSheet } from "react-native";
import { BelloraColors } from "../../assets/constants/enums";

export const styles=StyleSheet.create({

    whishListContainer:{
     alignItems:"center",
     justifyContent:"center",
      flex:1,
    },
    noitemsList:{
        fontSize:34,
        fontFamily:"BelloraLogo-Regular",
        color:BelloraColors.primary
    },
    favCookies:{
       fontFamily:"BelloraDescription-Regular",
       color:BelloraColors.primary
    },
    exploreProBn:{
        width:"90%"
    },
    header:{
        flexDirection:"row"
    }
 
})