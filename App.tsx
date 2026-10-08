import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SpalshScreen from './src/spalshScreen/SpalshScreen';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splashScreen"
      screenOptions={{
        headerShown: false,
      }}>
     <Stack.Screen name="splashScreen"  component={SpalshScreen} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
