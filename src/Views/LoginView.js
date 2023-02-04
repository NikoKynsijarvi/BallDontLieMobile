import { StyleSheet, Text, View } from 'react-native';
import LoginForm from '../Components/LoginForm';



const LoginView = () => {
    return(
       <View style={styles.loginContainer}>
        <LoginForm />
       </View> 
    )
}

export default LoginView

const styles = StyleSheet.create({
    loginContainer: {
      display:"flex",
      width:"100%",
      height:"100%",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center"
    },
  });
  