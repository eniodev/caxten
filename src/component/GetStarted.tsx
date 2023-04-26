import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { FC } from "react";

type ButtonProps = TouchableOpacityProps & {
  onPress: (event: any) => void;
  title: string;
};


const Button: FC<ButtonProps> = ({ onPress, title, ...props }) => {

    const navigation = useNavigation();

    return (
      <TouchableOpacity 
        style={styles.button}
        //@ts-ignore
        onPress={() => navigation.navigate('Login')}
        {...props}
        >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
    )  
}

export default Button;

const styles = StyleSheet.create({
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
  });
  
