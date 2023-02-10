import { View, StyleSheet, Image, Pressable } from "react-native";

const MenuButton = () => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.line} />
      <View style={styles.line} />
      <View style={styles.line} />
    </Pressable>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(170, 179, 172, 0.3)",
    top: 50,
    left: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  line: {
    width: "60%",
    height: 5,
    backgroundColor: "black",
  },
});
