import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import SafeAreaComponent from "../../Components/SafeAreaComponent";
import CommonButton from "../../Components/CommonBtn";
import { BelloraColors } from "../../assets/constants/enums";
import { styles } from "./styles";

const initialUser = {
    fullName: "Ravi Teja",
    email: "ravi@example.com",
    phone: "98765 43210",
};

const getInitials = (name: string) =>
    name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0].toUpperCase())
        .join("");

const EditProfileScreen = () => {
    const navigation = useNavigation<any>();

    const [fullName, setFullName] = useState(initialUser.fullName);
    const [email, setEmail] = useState(initialUser.email);
    const [phone, setPhone] = useState(initialUser.phone);

    const handleChangePhoto = () => {
        // open image picker here
    };

    const handleSave = () => {
        // call your update-profile API here, then go back
        navigation.goBack();
    };

    return (
        <SafeAreaComponent>
            <KeyboardAvoidingView
                style={styles.flex}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backBtn}
                        activeOpacity={0.7}
                        accessibilityRole="button"
                        accessibilityLabel="Go back"
                    >
                        {/* <Icon name="arrow-left" size={22} color={BelloraColors.textDark} /> */}
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Edit Profile</Text>
                </View>

                {/* Form (scrolls when the keyboard is open) */}
                <ScrollView
                    style={styles.flex}
                    contentContainerStyle={styles.content}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    {/* Avatar */}
                    <View style={styles.avatarSection}>
                        <View style={styles.avatar}>
                            <Text style={styles.avatarTxt}>{getInitials(fullName)}</Text>
                        </View>
                        <TouchableOpacity onPress={handleChangePhoto} activeOpacity={0.7}>
                            <Text style={styles.changePhotoTxt}>Change Photo</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Full name */}
                    <View style={styles.field}>
                        <Text style={styles.label}>Full Name</Text>
                        <TextInput
                            value={fullName}
                            onChangeText={setFullName}
                            style={styles.input}
                            placeholder="Enter your full name"
                            placeholderTextColor={BelloraColors.placeholderColor}
                            autoCapitalize="words"
                        />
                    </View>

                    {/* Email */}
                    <View style={styles.field}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            style={styles.input}
                            placeholder="Enter your email"
                            placeholderTextColor={BelloraColors.placeholderColor}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </View>

                    {/* Phone */}
                    <View style={styles.field}>
                        <Text style={styles.label}>Phone Number</Text>
                        <TextInput
                            value={phone}
                            onChangeText={setPhone}
                            style={styles.input}
                            placeholder="Enter your phone number"
                            placeholderTextColor={BelloraColors.placeholderColor}
                            keyboardType="phone-pad"
                            maxLength={11}
                        />
                    </View>
                </ScrollView>

                {/* Save button pinned at the bottom */}
                <View style={styles.footer}>
                    <CommonButton title="Save Changes" onPress={handleSave} />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaComponent>
    );
};

export default EditProfileScreen;