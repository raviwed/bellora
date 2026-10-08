import { useEffect } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import SafeAreaComponent from "../../Components/SafeAreaComponent"
import type { RootStackParamList } from "../navigation/types";

type SplashScreenProps = NativeStackScreenProps<RootStackParamList, "splashScreen">;

const Dummy = () => null;

const SpalshScreen = ({ navigation }: SplashScreenProps) => {
    useEffect(() => {
        const timer = setTimeout(() => navigation.replace("Home"), 1000);
        return () => clearTimeout(timer);
    }, [navigation]);

    return(
        <SafeAreaComponent imageSource={require('../../assets/png/SpalshScreen.png')} >
            <Dummy />
        </SafeAreaComponent>
    )
}
export default SpalshScreen
