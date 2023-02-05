import { useState } from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";

const SearchButton = () => {
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);
  const handlePress = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Image source={require("./../../assets/search.png")} />
    </Pressable>
  );
};

export default SearchButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 60,
    height: 60,
    borderRadius: 30,
    position: "absolute",
    backgroundColor: "rgba(170, 179, 172, 0.3)",
    top: 50,
    right: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
