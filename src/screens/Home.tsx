import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Button from '../component/GetStarted'


const { width, height } = Dimensions.get('screen'); 




const Home = () => {
  
  const route = useRoute();
  if(route.params) {

    const user  = route.params;
    console.log(user)
  }
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/six.png')} style={styles.welcomeImage} />
      <Text>Você não está perdido, agora você tem uma conta...</Text>
      <Button title='Sair' onPress={() => navigation.goBack()} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeImage: {
      flex: 0.6,
      width,
      height
    }
})