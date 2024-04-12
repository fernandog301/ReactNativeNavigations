import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screen/LoginScreen';
import ProfileScreen from './Screen/ProfileScreen';
import DataScreen from './Screen/DataScreen';
import { AppNativeParamsList } from './type';

// We want this outside of our function App
const Stack = createNativeStackNavigator<AppNativeParamsList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
        <Stack.Screen name='DataScreen' component={DataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}