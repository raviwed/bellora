import { StyleSheet } from "react-native";
import { BelloraColors } from "../../assets/constants/enums";

export const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
  },

  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 11,
    paddingBottom: 16,
  },

  backButton: {
    alignSelf: "flex-start",
    width: 35,
    height: 35,
    justifyContent: "center",
  },
  iconInSignIn:{
    marginRight:10
  },
  logo: {
    width: 100,
    height: 58,
    alignSelf: "center",
    marginTop: 5,
    marginBottom: 7,
  },

  heading: {
    fontSize: 40,
    fontFamily:'BelloraHeading-Bold',
    color: BelloraColors.primary,
    textAlign: "center",
    marginTop: 3,
  },

  subtitle: {
    fontSize: 13,
    color: BelloraColors.placeholderColor,
    textAlign: "center",
    fontFamily:"BelloraDescription-Regular",
    marginTop: 4,
    marginBottom: 26,
  },

  formContainer: {
    width: "100%",
  },

  emailMobileNum: {
    fontSize: 16,
    color: BelloraColors.primary,
    marginBottom: 6,
  },

  inputContainer: {
    height: 45,
    width: "100%",
    borderWidth: 1,
    borderColor: BelloraColors.inputBorder,
    borderRadius: 10,
    backgroundColor: BelloraColors.inputBackground,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 11,
  },

  inputIcon: {
    fontSize: 15,
    color: BelloraColors.dividerText,
    marginRight: 9,
    width: 10,
    textAlign: "center",
  },

  textInput: {
    flex: 1,
    height: "100%",
    fontSize: 13,
    color: BelloraColors.primary,
  },

  passwordLabel: {
    fontSize: 16,
    color: BelloraColors.primary,
    marginTop: 15,
    marginBottom: 6,
  },

  passwordToggle: {
    padding: 3,
    marginLeft: 5,
  },

  eyeIcon: {
    color: BelloraColors.eyeIcon,
    fontSize: 14,
  },

  forgotContainer: {
    alignSelf: "flex-end",
    marginTop: 11,
    marginBottom: 13,
  },

  forgotPass: {
    fontSize: 14,
    color: BelloraColors.orange,
  },

  btnStyles: {
    height: 50,
    borderRadius: 9,
    backgroundColor: BelloraColors.chocolate,
    width: "100%",
    marginTop:20,
    justifyContent: "center",
    alignItems: "center",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 13,
    marginBottom: 12,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: BelloraColors.authDivider,
  },

  dividerText: {
    fontSize: 9,
    color: BelloraColors.dividerText,
    marginHorizontal: 8,
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 11,
    marginTop:10,
  },

  socialButton: {
    flex: 1,
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: BelloraColors.inputBorder,
    backgroundColor: BelloraColors.inputBackground,
    alignItems: "center",
    justifyContent: "center",
  },

  socialText: {
    fontSize: 9,
    color: BelloraColors.espresso,
  },

  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    paddingTop: 45,
    paddingBottom: 8,
  },

  signupText: {
    fontSize: 9,
    color: BelloraColors.signupText,
  },

  signupLink: {
    fontSize: 9,
    color: BelloraColors.chocolate,
    fontWeight: "500",
  },
  pageLastTxt:{
    color:BelloraColors.primary,
    fontFamily:"BelloraDescription-Regular"
  },
   signUp:{
   fontFamily:"BelloraHeading-Bold",
   fontWeight:"bold",
   marginLeft:10,
   color:BelloraColors.primary
  },
  boxTxt:{
    flexDirection:"row" ,    
    position:"absolute",
    alignSelf:"center", 
    bottom:10,
  }
});
