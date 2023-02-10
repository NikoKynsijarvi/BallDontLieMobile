import { View, StyleSheet } from "react-native";

const SideBar = () => {
  return <View style={styles.container}></View>;
};

export default SideBar;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 200,
    zIndex: 999,
    left: -200,
    height: "100%",
    backgroundColor: "#080c24ff",
  },
});
