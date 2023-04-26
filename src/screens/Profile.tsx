import { View, Text, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Button from '../component/GetStarted'

import React from 'react'




const Profile = () => {
  
  const route = useRoute();
  if(route.params) {

    const user  = route.params;
    console.log(user.user.accepted.message)
  }
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
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
    }
})