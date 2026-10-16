import React, { useState } from "react";
import {
    Image,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    KeyboardAvoidingView,
    Platform,
} from "react-native";

import SafeAreaComponent from "../../Components/SafeAreaComponent";
import LeftarrowIcon from "../../assets/svg/BottomTabNav/LeftarrowIcon";
import { BelloraColors } from "../../assets/constants/enums";
import CommonButton from "../../Components/CommonBtn";
import EyeCloseIcon from "../../assets/svg/EyeCloseIcon.svg";
import EyeOpenIcon from "../../assets/svg/EyeOpenIcon.svg"
import LockIcon from "../../assets/svg/LockIcon.svg";
import MailIcon from "../../assets/svg/MailIcon.svg";
import { styles } from "./styles";

const SigninScreen = () => {
    const [emailMobile, setEmailMobile] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleNext = () => {
        console.log("Login:", emailMobile);
    };

    const handleForgotPassword = () => {

    };

    const handleSignUp = () => {

    };

    return (
        <SafeAreaComponent>
            <KeyboardAvoidingView
                style={styles.keyboardContainer}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >

                    <TouchableOpacity
                        style={styles.backButton}
                        activeOpacity={0.7}
                    >
                        <LeftarrowIcon />
                    </TouchableOpacity>

                    <Image
                        source={require("../../assets/png/logo.png")}
                        style={styles.logo}
                        resizeMode="contain"
                    />

                    <Text style={styles.heading}>Welcome Back</Text>

                    <Text style={styles.subtitle}>
                        Good to see you again!
                    </Text>

                        <Text style={styles.emailMobileNum}>
                            Email or Mobile Number
                        </Text>

                        <View style={styles.inputContainer}>
                          <MailIcon style={styles.iconInSignIn} />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Enter your email or mobile number"
                                placeholderTextColor={BelloraColors.placeholderColor}
                                value={emailMobile}
                                onChangeText={setEmailMobile}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                            />
                        </View>


                        <Text style={styles.passwordLabel}>Password</Text>

                        <View style={styles.inputContainer}>
                            <LockIcon  style={styles.iconInSignIn} />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Enter your password"
                                placeholderTextColor={BelloraColors.placeholderColor}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!showPassword}
                                autoCapitalize="none"
                                returnKeyType="done"
                                onSubmitEditing={handleNext}
                            />

                            <TouchableOpacity
                                onPress={() => setShowPassword(!showPassword)}
                                style={styles.passwordToggle}
                                activeOpacity={0.7}
                            >
                               {showPassword?<EyeOpenIcon/>:<EyeCloseIcon/>} 
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            style={styles.forgotContainer}
                            onPress={handleForgotPassword}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.forgotPass}>
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>

                        <CommonButton
                            title="Login"
                            onPress={handleNext}
                            buttonStyle={styles.btnStyles}
                        />

                    <View style={styles.dividerContainer}>
                        <View style={styles.divider} />

                        <Text style={styles.dividerText}>
                            Or continue with
                        </Text>

                        <View style={styles.divider} />
                    </View>

                    <View style={styles.socialContainer}>
                        <TouchableOpacity
                            style={styles.socialButton}
                            onPress={() => console.log("Google login")}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.socialText}>Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.socialButton}
                            onPress={() => console.log("Apple login")}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.socialText}>Apple</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.socialButton}
                            onPress={() => console.log("Phone login")}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.socialText}>Phone</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.boxTxt}>
                     <Text style={styles.pageLastTxt} >Don't have an account?</Text>
                     <Text style={styles.signUp}>Sign Up</Text>
                    </View>
                     
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaComponent>
    );
};

export default SigninScreen;