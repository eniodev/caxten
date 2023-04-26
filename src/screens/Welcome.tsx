import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

interface UserProps {
    user: string
}

const navigation = useNavigation();

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text>Seja bem-vindo, Énio </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Welcome

