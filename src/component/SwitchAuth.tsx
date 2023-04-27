import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { FC } from "react";

type ButtonProps = TouchableOpacityProps & {
  onPress: (event: any) => void;
  title: string;
};


const SwitchAuth: FC<ButtonProps> = ({ onPress, title, ...props }) => {

    const navigation = useNavigation();

    return (
      <TouchableOpacity 
        style={styles.button}
        //@ts-ignore
        onPress={onPress}
        {...props}
        >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
    )  
}

export default SwitchAuth;

const styles = StyleSheet.create({
    button: {
      paddingHorizontal: 15,
      paddingVertical: 10,
      backgroundColor: 'rgba(0,0,0,0.05)',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      marginTop: 20
    },
    buttonText: {
      color: '#999',
    }
  });