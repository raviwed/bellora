
import React, { ReactNode, useState } from "react";
import {
    Image,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    type ImageSourcePropType,
    KeyboardTypeOptions,
} from "react-native";
import EyeCloseIcon from "../assets/svg/EyeCloseIcon.svg";
import EyeOpenIcon from "../assets/svg/EyeOpenIcon.svg";
import LockIcon from "../assets/svg/LockIcon.svg";
import MailIcon from "../assets/svg/MailIcon.svg";
import SafeAreaComponent from "./SafeAreaComponent";
import { BelloraColors } from "../assets/constants/enums";
import CommonButton from "./CommonBtn";
import LeftarrowIcon from "../assets/svg/BottomTabNav/LeftarrowIcon";


export interface SocialLoginOption {
    id: string;
    title: string;
    onPress: () => void;
}

export interface ReusableAuthScreenProps {
    heading?: string;
    subtitle?: string;
    logoSource?: ImageSourcePropType;
    showLogo?: boolean;
    showBackButton?: boolean;
    onBackPress?: () => void;
    showEmailInput?: boolean;
    emailLabel?: string;
    emailPlaceholder?: string;
    emailValue?: string;
    onEmailChange?: (value: string) => void;
    emailKeyboardType?: KeyboardTypeOptions;
    emailIcon?: ReactNode;
    showPasswordInput?: boolean;
    passwordLabel?: string;
    passwordPlaceholder?: string;
    passwordValue?: string;
    onPasswordChange?: (value: string) => void;
    passwordIcon?: ReactNode;
    showPasswordToggle?: boolean;
    showForgotPassword?: boolean;
    forgotPasswordText?: string;
    onForgotPasswordPress?: () => void;
    buttonTitle?: string;
    onButtonPress?: () => void;
    buttonDisabled?: boolean;
    showSocialLogin?: boolean;
    socialTitle?: string;
    socialOptions?: SocialLoginOption[];
    showSignUpFooter?: boolean;
    footerText?: string;
    signUpText?: string;
    onSignUpPress?: () => void;
    headerContent?: ReactNode;
    beforeFields?: ReactNode;
    afterFields?: ReactNode;
    footerContent?: ReactNode;
    children?: ReactNode;
    contentContainerStyle?: object;
    lableRequried?:boolean;
}

const ReusableAuthScreen = ({
    heading = "Welcome Back",
    subtitle = "Good to see you again!",
    logoSource = require("../assets/png/logo.png"),
    showLogo = true,
    showBackButton = true,
    onBackPress,

    showEmailInput = true,
    emailLabel = "Email or Mobile Number",
    emailPlaceholder = "Enter your email or mobile number",
    emailValue,
    onEmailChange,
    emailKeyboardType = "email-address",
    emailIcon,

    showPasswordInput = true,
    passwordLabel = "Password",
    passwordPlaceholder = "Enter your password",
    passwordValue,
    onPasswordChange,
    passwordIcon,
    showPasswordToggle = true,

    showForgotPassword = true,
    forgotPasswordText = "Forgot Password?",
    onForgotPasswordPress,

    buttonTitle = "Login",
    onButtonPress,

    showSocialLogin = true,
    socialTitle = "Or continue with",
    socialOptions = [],

    showSignUpFooter = true,
    footerText = "Don't have an account?",
    signUpText = "Sign Up",
    onSignUpPress,
   lableRequried=true,
    headerContent,
    beforeFields,
    afterFields,
    footerContent,
    children,
    contentContainerStyle,
}: ReusableAuthScreenProps) => {
    const [internalEmail, setInternalEmail] = useState("");
    const [internalPassword, setInternalPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const currentEmail = emailValue ?? internalEmail;
    const currentPassword = passwordValue ?? internalPassword;

    const handleEmailChange = (value: string) => {
        setInternalEmail(value);
        onEmailChange?.(value);
    };

    const handlePasswordChange = (value: string) => {
        setInternalPassword(value);
        onPasswordChange?.(value);
    };

    return (
        <SafeAreaComponent>
            <KeyboardAvoidingView
                style={styles.keyboardContainer}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <ScrollView
                    contentContainerStyle={[
                        styles.scrollContainer,
                        contentContainerStyle,
                    ]}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    {showBackButton && (
                        <TouchableOpacity
                            style={styles.backButton}
                            activeOpacity={0.7}
                            onPress={onBackPress}
                        >
                            <LeftarrowIcon />
                        </TouchableOpacity>
                    )}

                    {showLogo && (
                        <Image
                            source={logoSource}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                    )}

                    {headerContent}

                    <Text style={styles.heading}>{heading}</Text>

                    {subtitle.length > 0 && (
                        <Text style={styles.subtitle}>{subtitle}</Text>
                    )}

                    {beforeFields}

                    {showEmailInput && (
                        <>
                            <Text style={styles.emailMobileNum}>{emailLabel}</Text>

                            <View style={styles.inputContainer}>
                                {emailIcon ?? (
                                    <MailIcon style={styles.iconInSignIn} />
                                )}

                                <TextInput
                                    style={styles.textInput}
                                    placeholder={emailPlaceholder}
                                    placeholderTextColor={
                                        BelloraColors.placeholderColor
                                    }
                                    value={currentEmail}
                                    onChangeText={handleEmailChange}
                                    keyboardType={emailKeyboardType}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                />
                            </View>
                        </>
                    )}

                    {showPasswordInput && (
                        <>
                         {lableRequried &&(  <Text style={styles.passwordLabel}>
                                {passwordLabel}
                            </Text>)}

                            <View style={[styles.inputContainer,!lableRequried&&{marginTop:25}]}>
                                {passwordIcon ?? (
                                    <LockIcon style={styles.iconInSignIn} />
                                )}

                                <TextInput
                                    style={styles.textInput}
                                    placeholder={passwordPlaceholder}
                                    placeholderTextColor={
                                        BelloraColors.placeholderColor
                                    }
                                    value={currentPassword}
                                    onChangeText={handlePasswordChange}
                                    secureTextEntry={!showPassword}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    returnKeyType="done"
                                    onSubmitEditing={onButtonPress}
                                />

                                {showPasswordToggle && (
                                    <TouchableOpacity
                                        onPress={() =>
                                            setShowPassword((previous) => !previous)
                                        }
                                        style={styles.passwordToggle}
                                        activeOpacity={0.7}
                                        accessibilityRole="button"
                                        accessibilityLabel={
                                            showPassword ? "Hide password" : "Show password"
                                        }
                                    >
                                        {showPassword ? (
                                            <EyeOpenIcon />
                                        ) : (
                                            <EyeCloseIcon />
                                        )}
                                    </TouchableOpacity>
                                )}
                            </View>
                        </>
                    )}

                    {showForgotPassword && (
                        <TouchableOpacity
                            style={styles.forgotContainer}
                            onPress={onForgotPasswordPress}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.forgotPass}>
                                {forgotPasswordText}
                            </Text>
                        </TouchableOpacity>
                    )}

                    {afterFields}

                    <CommonButton
                        title={buttonTitle}
                        onPress={onButtonPress ?? (() => { })}
                        buttonStyle={styles.btnStyles}
                    />

                    {showSocialLogin && socialOptions.length > 0 && (
                        <>
                            <View style={styles.dividerContainer}>
                                <View style={styles.divider} />
                                <Text style={styles.dividerText}>{socialTitle}</Text>
                                <View style={styles.divider} />
                            </View>

                            <View style={styles.socialContainer}>
                                {socialOptions.map((option) => (
                                    <TouchableOpacity
                                        key={option.id}
                                        style={styles.socialButton}
                                        onPress={option.onPress}
                                        activeOpacity={0.7}
                                    >
                                        <Text style={styles.socialText}>
                                            {option.title}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </>
                    )}

                    {children}

                    {showSignUpFooter && (
                        <View style={styles.boxTxt}>
                            <Text style={styles.pageLastTxt}>{footerText}</Text>

                            <TouchableOpacity
                                onPress={onSignUpPress}
                                activeOpacity={0.7}
                            >
                                <Text style={styles.signUp}>{signUpText}</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                    {footerContent}
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaComponent>
    );
};





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
    iconInSignIn: {
        marginRight: 10
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
        fontFamily: 'BelloraHeading-Bold',
        color: BelloraColors.primary,
        textAlign: "center",
        marginTop: 3,
    },

    subtitle: {
        fontSize: 13,
        color: BelloraColors.placeholderColor,
        textAlign: "center",
        fontFamily: "BelloraDescription-Regular",
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
        borderColor: "#EBD8C8",
        borderRadius: 10,
        backgroundColor: "#FFFEFC",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 11,
    },

    inputIcon: {
        fontSize: 15,
        color: "#B59B89",
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
    fullname: {
        backgroundColor: "#fff",
        padding: 13,
        borderRadius:10,
        borderWidth: 1,
        borderColor: BelloraColors.inputBorder,
    },
   emailMobile:{
     backgroundColor: "#fff",
        padding: 13,
        borderRadius:10,
        borderWidth: 1,
        borderColor: BelloraColors.inputBorder,
       marginTop:20,
   },
    passwordToggle: {
        padding: 3,
        marginLeft: 5,
    },

    eyeIcon: {
        color: "#A38B7B",
        fontSize: 14,
    },

    forgotContainer: {
        alignSelf: "flex-end",
        marginTop: 11,
        marginBottom: 13,
    },

    forgotPass: {
        fontSize: 14,
        color: "#E58B32",
    },

    btnStyles: {
        height: 50,
        borderRadius: 9,
        backgroundColor: "#713B20",
        width: "100%",
        marginTop: 20,
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
        backgroundColor: "#EFDFD2",
    },

    dividerText: {
        fontSize: 9,
        color: "#B59B89",
        marginHorizontal: 8,
    },

    socialContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 11,
        marginTop: 10,
    },

    socialButton: {
        flex: 1,
        height: 45,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#EBD8C8",
        backgroundColor: "#FFFEFC",
        alignItems: "center",
        justifyContent: "center",
    },

    socialText: {
        fontSize: 9,
        color: "#35261E",
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
        color: "#9F8878",
    },

    signupLink: {
        fontSize: 9,
        color: "#713B20",
        fontWeight: "500",
    },
    pageLastTxt: {
        color: BelloraColors.primary,
        fontFamily: "BelloraDescription-Regular"
    },
    signUp: {
        fontFamily: "BelloraHeading-Bold",
        fontWeight: "bold",
        marginLeft: 10,
        color: BelloraColors.primary
    },
    boxTxt: {
        flexDirection: "row",
        position: "absolute",
        alignSelf: "center",
        bottom: 10,
    }
});

export default ReusableAuthScreen;
