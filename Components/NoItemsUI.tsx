import React from "react";
import {
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from "react-native";
import { BelloraColors } from "../assets/constants/enums";
import LeftarrowIcon from "../assets/svg/BottomTabNav/LeftarrowIcon";
import CommonButton from "./CommonBtn";
import SafeAreaComponent from "./SafeAreaComponent";

type Props = {
    headerTitle?: string;                   
    onBackPress?: () => void;              
    backIcon?: React.ReactNode;            
    rightComponent?: React.ReactNode;      
    headerStyle?: StyleProp<ViewStyle>;
    headerTitleStyle?: StyleProp<TextStyle>;
    icon?: React.ReactNode;              
    title: string;
    description?: string | string[];       
    buttonTitle?: string;                   
    onButtonPress?: () => void;
    containerStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    descriptionStyle?: StyleProp<TextStyle>;
    buttonStyle?: StyleProp<ViewStyle>;
};

const NoItemUI = ({
    headerTitle,
    onBackPress,
    backIcon,
    rightComponent,
    headerStyle,
    headerTitleStyle,
    icon,
    title,
    description,
    buttonTitle,
    onButtonPress,
    containerStyle,
    titleStyle,
    descriptionStyle,
    buttonStyle,
}: Props) => {
    const lines = Array.isArray(description)
        ? description
        : description
        ? [description]
        : [];

    const showHeader = !!headerTitle || !!onBackPress || !!rightComponent;

    return (
        <SafeAreaComponent>
            {showHeader && (
                <View style={[styles.header, headerStyle]}>
                    {onBackPress ? (
                        <TouchableOpacity
                            onPress={onBackPress}
                            style={styles.backBtn}
                            activeOpacity={0.7}
                            accessibilityRole="button"
                            accessibilityLabel="Go back"
                        >
                            {backIcon ?? <LeftarrowIcon />}
                        </TouchableOpacity>
                    ) : null}

                    <Text style={[styles.headerTitle, headerTitleStyle]} numberOfLines={1}>
                        {headerTitle}
                    </Text>

                    {rightComponent ? <View>{rightComponent}</View> : null}
                </View>
            )}

            <View style={[styles.container, containerStyle]}>
                {icon}

                <Text style={[styles.title, titleStyle]}>{title}</Text>

                {lines.map((line, index) => (
                    <Text
                        key={`${line}-${index}`}
                        style={[styles.description, descriptionStyle]}
                    >
                        {line}
                    </Text>
                ))}

                {buttonTitle ? (
                    <CommonButton
                        title={buttonTitle}
                        onPress={onButtonPress ?? (() => {})}
                        buttonStyle={[styles.button, buttonStyle]}
                    />
                ) : null}
            </View>
        </SafeAreaComponent>
    );
};

export default NoItemUI;

export const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 8,
    },
    backBtn: {
        marginRight: 10,
        padding: 4,
    },
    headerTitle: {
        flex: 1,
        fontSize: 18,
        color: BelloraColors.primary,
        fontFamily: "BelloraHeading-Bold",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 24,
    },
    title: {
        marginTop: 16,
        marginBottom: 6,
        fontSize: 34,
        textAlign: "center",
        fontFamily: "BelloraLogo-Regular",
        color: BelloraColors.primary,
    },
    description: {
        textAlign: "center",
        fontFamily: "BelloraDescription-Regular",
        color: BelloraColors.primary,
    },
    button: {
        width: "90%",
        marginTop: 20,
    },
});