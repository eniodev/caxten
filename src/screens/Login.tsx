import { View, Text, TextInput, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import axios from 'axios';

interface CredentialsProps {
  email: string,
  password: string
}

const { width, height } = Dimensions.get('screen');

const Login = () => {  
    const [logged, setLogged] = useState(false);
    const navigation = useNavigation();  
    const [showPassword, setShowPassword] = useState(false);
    const [credentials, setCredentials] = useState<CredentialsProps>({
      email: '',
      password: ''
    }) 
    
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    const handleEmail = (email: string) => {
      setCredentials({...credentials, email: email});
    }

    const handlePassword = (password: string) => {
      setCredentials({...credentials, password: password});
    }


  
  function handleLogin() {


    axios.get('https://app.caxten.com/api/web/authenticate', {
      headers: {
        email: `${credentials.email}`,
        password: `${credentials.password}`
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
      source={require('../assets/fourteen.png')}
      style={styles.loginImage}
      />
      <TextInput 
        placeholder='Email' 
        style={styles.input}
        keyboardType="email-address"
        onChangeText={handleEmail}
        />
      
      <View style={
        [styles.input, 
        {flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
        }]}>
      
      <TextInput 
        placeholder='Password' 
        style={{width: '90%'}}
        secureTextEntry={!showPassword}
        onChangeText={handlePassword}
        />

      <TouchableOpacity onPress={toggleShowPassword}>
          <Ionicons 
            name= { showPassword ? "eye-outline" : "eye-off-outline" } 
            size={16} 
            color="#ccc" 
            />
      </TouchableOpacity>
      
      
      </View>
      
      <TouchableOpacity  
        onPress={() => handleLogin()}
        style={styles.button}
        >
        <Text style={styles.buttonText}>
          Iniciar Sessão
        </Text>
      </TouchableOpacity>
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
    flex: 0.6, 
    height, 
    width,
    marginTop: 50
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