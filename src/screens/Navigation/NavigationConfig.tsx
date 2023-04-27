import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Slider from '../../component/Slider';
import Login from '../Login';
import Profile from '../Profile';
import SignUp from '../SignUp';
import Home from '../Home';

const Stack = createNativeStackNavigator();

export default function NavigationConfig() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
     
      <Stack.Screen name="Slider" component={Slider} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Profile' component={Profile}/>
      
      <Stack.Group>
        <Stack.Screen name="Login" component={Login} />  
      </Stack.Group>
      
    </Stack.Navigator>
  );
}