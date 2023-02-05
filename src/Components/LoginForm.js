import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";

const LoginForm = () => {
  return (
    <View style={styles.loginFormContainer}>
      <Text style={styles.formText}>Login here</Text>
      <View>
        <TextInput placeholder="Username" style={styles.inputStyle} />
        <TextInput placeholder="Password" style={styles.inputStyle} />
      </View>
      <Pressable style={styles.loginButton}>
        <Text style={{ color: "#fff" }}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  loginFormContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-center",
    height: "50%",
    width: "100%",
    flexDirection: "column",
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: "#DCDCDC",
  },
  loginButton: {
    width: 150,
    height: 50,
    backgroundColor: "#7f03fc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20%",
    marginTop: 10,
  },
  formText: {
    fontSize: 30,
    color: "#fff",
  },
});

export default LoginForm;
