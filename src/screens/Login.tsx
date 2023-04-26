import { View, Alert, TextInput, Button, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import Button from '../component/GetStarted';
import React, { useState } from 'react';
import axios from 'axios';

const { width, height } = Dimensions.get('screen');

const Login = () => {

  const [logged, setLogged] = useState(false);
  const navigation = useNavigation();  
  
  function handleLogin() {
    
    axios.get('https://app.caxten.com/api/web/authenticate', {
      headers: {
        email: 'malungokiala@gmail.com',
        password: '123456'
      }
    })
      .then(response => {
       console.log(response.data.accepted);
       if(response.status===200 && response.data) {
        setLogged(true);
        const user = response.data;
        navigation.navigate('Profile', {user});
       }
        
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/cartbag.png')} 
        style={styles.loginImage}/>
      
      <TextInput 
        placeholder='Email' 
        style={styles.input}
        keyboardType="email-address"/>
      
      <TextInput 
        placeholder='Password' 
        style={styles.input}
        secureTextEntry={true}/>
      
      <Button title={'Iniciar Sessão'} onPress={() => handleLogin()}/>
      
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: '900'
  },
  input: {
    width: '90%',
    padding: 10,
    paddingLeft: 12,
    height: 50,
    borderWidth: 1.5,
    borderColor: '#222',
    borderRadius: 7,
    marginTop: 10
  },
  loginImage: {
    flex: 0.5, 
    height, 
    width
  },
  button: {
    width: '90%',
    height: 50,
    position: 'absolute',
    bottom: 35,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  buttonText: {
    color: '#fff',
    fontWeight: '900'
  }
})

export default Login