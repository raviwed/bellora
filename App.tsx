import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SpalshScreen from './src/spalshScreen/SpalshScreen';
import HomeScreen from './src/HomeScreen/HomeScreen';
import type { RootStackParamList } from './src/navigation/types';
import StartonBoarding from './src/onBoarding/StartonBoarding';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splashScreen"
      screenOptions={{
        headerShown: false,
      }}>
     <Stack.Screen name="splashScreen"  component={SpalshScreen} />
     <Stack.Screen name="startonBoarding" component={StartonBoarding} />
     <Stack.Screen  name="MainTabs" component={BottomTabNavigation} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
