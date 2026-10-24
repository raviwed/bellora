import React, { useEffect, useRef, useState } from "react"
import {
    Keyboard,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TextInputProps,
    TouchableOpacity,
    View,
} from "react-native"
import Svg, { Ellipse, Path } from "react-native-svg"
import SafeAreaComponent from "../../Components/SafeAreaComponent"
import { styles } from "./styles"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { RootStackParamList } from "../navigation/types"
import { BelloraColors, BelloraScreens } from "../../assets/constants/enums"

const OTP_LENGTH = 6
const RESEND_SECONDS = 45

type TextInputRef = React.ElementRef<typeof TextInput>
type KeyPressEvent = Parameters<NonNullable<TextInputProps["onKeyPress"]>>[0]

const BackIcon = () => (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Path
            d="M19 12H5M11 6l-6 6 6 6"
            stroke={BelloraColors.titleBrown}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

const SproutIcon = () => (
    <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
        <Path d="M15 28V14" stroke={BelloraColors.titleBrown} strokeWidth="1.6" strokeLinecap="round" />
        <Path d="M15 15C15 9 11 5 5 4c0 6 3 10 10 11z" fill={BelloraColors.titleBrown} />
        <Path d="M15 12C15 7 18 3 24 2c0 5-3 9-9 10z" fill={BelloraColors.titleBrown} />
    </Svg>
)
const BranchDecoration = () => (
    <Svg width={170} height={230} viewBox="0 0 170 230" fill="none">
        <Path
            d="M10 230C25 170 55 110 100 40"
            stroke={BelloraColors.leaf}
            strokeWidth="1.5"
            strokeLinecap="round"
        />
        <Ellipse cx="62" cy="120" rx="34" ry="13" transform="rotate(-25 62 120)" stroke={BelloraColors.leaf} strokeWidth="1.5" />
        <Ellipse cx="38" cy="168" rx="36" ry="13" transform="rotate(-10 38 168)" stroke={BelloraColors.leaf} strokeWidth="1.5" />
        <Ellipse cx="92" cy="70" rx="30" ry="11" transform="rotate(-55 92 70)" stroke={BelloraColors.leaf} strokeWidth="1.5" />
        <Ellipse cx="22" cy="206" rx="30" ry="11" transform="rotate(8 22 206)" stroke={BelloraColors.leaf} strokeWidth="1.5" />
    </Svg>
)

type Props = {
    phoneNumber?: string
    onVerify?: (otp: string) => void
    onResend?: () => void
    onBack?: () => void
}

const formatTime = (s: number) => `00:${s.toString().padStart(2, "0")}`

const OtpVerificationScreen = ({
    phoneNumber = "+91 98765 43210",
    onVerify,
    onResend,
    onBack,
}: Props) => {
    const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""))
    const [focusedIndex, setFocusedIndex] = useState<number | null>(0)
    const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS)
    const inputs = useRef<(TextInputRef | null)[]>([])
    const navigation=useNavigation<NavigationProp<RootStackParamList>>()
    /* Resend countdown */
    useEffect(() => {
        if (secondsLeft <= 0) return
        const t = setTimeout(() => setSecondsLeft(s => s - 1), 1000)
        return () => clearTimeout(t)
    }, [secondsLeft])

    const isComplete = otp.every(d => d !== "")

    const handleChange = (text: string, index: number) => {
        const digits = text.replace(/\D/g, "")
        if (digits.length === 0) {
            const next = [...otp]
            next[index] = ""
            setOtp(next)
            return
        }
    
        const next = [...otp]
        let cursor = index
        for (const d of digits) {
            if (cursor >= OTP_LENGTH) break
            next[cursor] = d
            cursor++
        }
        setOtp(next)

        if (cursor >= OTP_LENGTH) {
            inputs.current[OTP_LENGTH - 1]?.blur()
            Keyboard.dismiss()
        } else {
            inputs.current[cursor]?.focus()
        }
    }

    const handleKeyPress = (e: KeyPressEvent, index: number) => {
        if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
            const next = [...otp]
            next[index - 1] = ""
            setOtp(next)
            inputs.current[index - 1]?.focus()
        }
    }

    const handleResend = () => {
        if (secondsLeft > 0) return
        setOtp(Array(OTP_LENGTH).fill(""))
        setSecondsLeft(RESEND_SECONDS)
        inputs.current[0]?.focus()
        onResend?.()
    }

    const handleVerify = () => {
        navigation.navigate(BelloraScreens.mainTabs)
        if (!isComplete) return
        onVerify?.(otp.join(""))
    }

    return (
        <SafeAreaComponent>
            <StatusBar barStyle="dark-content" />
            <View style={styles.root}>
                <View style={styles.decoration} pointerEvents="none">
                    <BranchDecoration />
                </View>

                <ScrollView
                    contentContainerStyle={styles.scroll}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <TouchableOpacity
                        style={styles.backBtn}
                        onPress={onBack}
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    >
                        <BackIcon />
                    </TouchableOpacity>
                    <View style={styles.header}>
                        <SproutIcon />
                        <Text style={styles.brand}>Bellora</Text>
                        <Text style={styles.heading}>Verify Your Phone</Text>
                        <Text style={styles.subHeading}>Enter the 6 digit code sent to</Text>
                        <Text style={styles.subHeading}>{phoneNumber}</Text>
                    </View>

                    <View style={styles.otpRow}>
                        {otp.map((digit, i) => (
                            <TextInput
                                key={i}
                                ref={r => {
                                    inputs.current[i] = r
                                }}
                                style={[
                                    styles.otpBox,
                                    focusedIndex === i && styles.otpBoxFocused,
                                    digit !== "" && styles.otpBoxFilled,
                                ]}
                                value={digit}
                                onChangeText={t => handleChange(t, i)}
                                onKeyPress={e => handleKeyPress(e, i)}
                                onFocus={() => setFocusedIndex(i)}
                                onBlur={() => setFocusedIndex(null)}
                                keyboardType="number-pad"
                                maxLength={i === 0 ? OTP_LENGTH : 1}
                                textContentType="oneTimeCode"
                                autoComplete="sms-otp"
                                autoFocus={i === 0}
                                selectTextOnFocus
                                caretHidden
                            />
                        ))}
                    </View>
                    <View style={styles.resendRow}>
                        {secondsLeft > 0 ? (
                            <Text style={styles.resendTxt}>
                                Resend OTP in <Text style={styles.timer}>{formatTime(secondsLeft)}</Text>
                            </Text>
                        ) : (
                            <TouchableOpacity onPress={handleResend}>
                                <Text style={[styles.resendTxt, styles.resendActive]}>Resend OTP</Text>
                            </TouchableOpacity>
                        )}
                    </View>

                    <TouchableOpacity
                        style={[styles.verifyBtn, !isComplete && styles.verifyBtnDisabled]}
                        activeOpacity={0.85}
                        disabled={!isComplete}
                        onPress={handleVerify}
                    >
                        <Text style={styles.verifyTxt}>Verify</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaComponent>
    )
}

export default OtpVerificationScreen