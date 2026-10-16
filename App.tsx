import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SpalshScreen from './src/spalshScreen/SpalshScreen';
import type { RootStackParamList } from './src/navigation/types';
import StartonBoarding from './src/onBoarding/StartonBoarding';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import LoginScreen from './src/loginScreen/LoginScreen';
import { BelloraScreens } from './assets/constants/enums';
import SigninScreen from './src/signinScreen/SigninScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={BelloraScreens.splashScreen}
      screenOptions={{
        headerShown: false,
      }}>
     <Stack.Screen name={BelloraScreens.splashScreen}  component={SpalshScreen} />
     <Stack.Screen name={BelloraScreens.startonBoarding} component={StartonBoarding} />
     <Stack.Screen  name={BelloraScreens.mainTabs} component={BottomTabNavigation} />
     <Stack.Screen  name={BelloraScreens.logininScreen} component={LoginScreen} />
     <Stack.Screen  name={BelloraScreens.signInScreens}component={SigninScreen} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
