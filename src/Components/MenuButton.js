import { View, StyleSheet, Image, Pressable } from "react-native";

const MenuButton = () => {
  return (
    <Pressable style={styles.container}>
      <Image source={require("./../../assets/menu.png")} />
    </Pressable>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 60,
    height: 60,
    borderRadius: 30,
    position: "absolute",
    backgroundColor: "rgba(170, 179, 172, 0.3)",
    top: 50,
    left: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
