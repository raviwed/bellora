
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { TextInput, View } from "react-native";

import ReusableAuthScreen, {
  SocialLoginOption,
  styles,
} from "../../Components/ReusableAuthScreen";

import { BelloraColors } from "../../assets/constants/enums";

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
  const navigation = useNavigation();

  const [fullName, setFullName] = useState("");
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ReusableAuthScreen
      heading="Create Account"
      subtitle="Join the Bellora family"
      buttonTitle="Sign Up"
      onButtonPress={() => {
        console.log("Sign up pressed", {
          fullName,
          emailOrMobile,
          password,
        });
      }}
      onBackPress={() => navigation.goBack()}
      onForgotPasswordPress={() => console.log("Forgot password")}
      onSignUpPress={() => console.log("Navigate to signup")}
      socialOptions={socialOptions}
      showEmailInput={false}
      lableRequried={false}
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
