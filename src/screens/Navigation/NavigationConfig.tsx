import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Slider from '../../component/Slider';
import Login from '../Login';
import Welcome from '../Welcome';
import Profile from '../Profile';

const Stack = createNativeStackNavigator();

export default function NavigationConfig() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
     
      <Stack.Screen name="Slider" component={Slider} />
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Group>
        <Stack.Screen name="Login" component={Login} />
        
      </Stack.Group>
      
    </Stack.Navigator>
  );
}