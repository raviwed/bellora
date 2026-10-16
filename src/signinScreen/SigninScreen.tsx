
import React from "react";
import ReusableAuthScreen, {
  type SocialLoginOption,
} from "../../Components/ReusableAuthScreen";
import {
  useNavigation,
  type NavigationProp,
} from "@react-navigation/native";
import { BelloraScreens } from "../../assets/constants/enums";
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

const SigninScreen = () => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogin = () => {
    console.log("Login pressed");
  };

  const handleForgotPassword = () => {};

  const handleSignUp = () => {
    navigation.navigate(BelloraScreens.logininScreen);
  };

  return (
    <ReusableAuthScreen
      heading="Welcome Back"
      subtitle="Good to see you again!"
      buttonTitle="Login"
      onButtonPress={handleLogin}
      onBackPress={() => navigation.goBack()}
      onForgotPasswordPress={handleForgotPassword}
      onSignUpPress={handleSignUp}
      socialOptions={socialOptions}
    />
  );
};

export default SigninScreen;
