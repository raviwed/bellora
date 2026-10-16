
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { TextInput, View } from "react-native";

import ReusableAuthScreen, {
  SocialLoginOption,
  styles,
} from "../../Components/ReusableAuthScreen";

import { BelloraColors, BelloraScreens } from "../../assets/constants/enums";
import { RootStackParamList } from "../navigation/types";

const socialOptions: SocialLoginOption[] = [
  {
    id: "google",
    title: "Google",
    onPress: () => console.log("Google login"),
  },
  {
    id: "apple",
    title: "Apple",
    onPress: () => console.log("Apple login"),
  },
  {
    id: "phone",
    title: "Phone",
    onPress: () => console.log("Phone login"),
  },
];

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [fullName, setFullName] = useState("");
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const  onButtonPress=()=>{
    navigation.navigate(BelloraScreens.home)
   }
  return (
    <ReusableAuthScreen
      heading="Create Account"
      subtitle="Join the Bellora family"
      buttonTitle="Sign Up"
      onButtonPress={onButtonPress}

      onBackPress={() => navigation.goBack()}
      onForgotPasswordPress={() => console.log("Forgot password")}
      onSignUpPress={() => console.log("Navigate to signup")}
      socialOptions={socialOptions}
      showEmailInput={false}
      lableRequried={false}
      signUpText={"Login"}
      beforeFields={
        <View>
          {/* Full Name */}
          <TextInput
            style={[styles.textInput,styles.fullname]}
            placeholder="Full Name"
            placeholderTextColor={BelloraColors.placeholderColor}
            value={fullName}
            onChangeText={setFullName}
            autoCapitalize="words"
            autoCorrect={false}
            returnKeyType="next"
          />

          <TextInput
            style={[styles.textInput,styles.emailMobile]}
            placeholder="Email or Mobile Number"
            placeholderTextColor={BelloraColors.placeholderColor}
            value={emailOrMobile}
            onChangeText={setEmailOrMobile}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
          />
        </View>
      }
    />
  );
};

export default LoginScreen;
