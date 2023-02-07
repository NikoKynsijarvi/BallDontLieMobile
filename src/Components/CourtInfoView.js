import { View, StyleSheet } from "react-native";

const CourtInfoView = () => {
  return <View style={styles.container}></View>;
};

export default CourtInfoView;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: "90%",
    display: "flex",
    backgroundColor: "#151e34ff",
    borderRadius: 20,
    marginRight: 20,
    padding: 20,
    marginTop: 10,
  },
});
