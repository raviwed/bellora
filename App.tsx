
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import type { ComponentType } from "react";
import type { RootStackParamList } from "./src/navigation/types";

import SpalshScreen from "./src/spalshScreen/SpalshScreen";
import StartonBoarding from "./src/onBoarding/StartonBoarding";
import BottomTabNavigation from "./src/navigation/BottomTabNavigation";
import LoginScreen from "./src/loginScreen/LoginScreen";
import SigninScreen from "./src/signinScreen/SigninScreen";
import HomeScreen from "./src/homeScreen/HomeScreen";

import { BelloraScreens } from "./assets/constants/enums";
import HelpSupportScreen from "./src/helpSupport/HelpSupport";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import SingleProductPage from "./src/singleProductPage/SingleProductPage";
import OtpVerificationScreen from "./src/otpVerificationScreen/OtpVerificationScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

type AppScreen = {
  name: keyof RootStackParamList;
  component: ComponentType<any>;
};

const appScreens: AppScreen[] = [
  {
    name: BelloraScreens.splashScreen,
    component: SpalshScreen,
  },
  {
    name: BelloraScreens.startonBoarding,
    component: StartonBoarding,
  },
  {
    name: BelloraScreens.mainTabs,
    component: BottomTabNavigation,
  },
  {
    name: BelloraScreens.logininScreen,
    component: LoginScreen,
  },
  {
    name: BelloraScreens.signInScreens,
    component: SigninScreen,
  },
  {
     name: BelloraScreens.helpsupport,
    component: HelpSupportScreen,
  },
  {
    name:BelloraScreens.singleProductPage,
    component:SingleProductPage,
  },
  {
    name:BelloraScreens.otpScreenPage,
    component:OtpVerificationScreen,
  }
];

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <BottomSheetModalProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={BelloraScreens.splashScreen}
        screenOptions={{ headerShown: false }}
      >
        {appScreens.map(({ name, component }) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

export default App;
