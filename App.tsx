import { NavigationContainer } from '@react-navigation/native';
import NavigationConfig from './src/screens/Navigation/NavigationConfig';
import { SafeAreaProvider } from 'react-native-safe-area-context';




const App = () => {
  return (
    <SafeAreaProvider>
     <NavigationContainer>
      <NavigationConfig />
     </NavigationContainer>
    </SafeAreaProvider>
      
 
  );
};

export default App;






