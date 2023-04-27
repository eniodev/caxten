import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Button from '../component/GetStarted'


const { width, height } = Dimensions.get('screen'); 




const Profile = () => {
  
  const route = useRoute();
  if(route.params) {

    const user  = route.params;
    console.log(user.user.accepted.message)
  }
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/ten.png')} style={styles.welcomeImage} />
      <Text>Hey! Você conseguiu entrar...</Text>
      <Button title='Sair' onPress={() => navigation.goBack()} />
    </View>
  )
}

export default Profile

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