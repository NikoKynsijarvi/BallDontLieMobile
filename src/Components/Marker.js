import { View, StyleSheet } from "react-native";

const CourtMarkerCustom = () => {
  return (
    <View style={styles.outLine}>
      <View style={styles.innerLine} />
    </View>
  );
};

const SelectedCourtMarker = () => {
  return (
    <View style={styles.outLine}>
      <View style={styles.innerLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  outLine: {
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: "#F27649",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  innerLine: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: "#080c24ff",
    opacity: 0.8,
  },
});

export default CourtMarkerCustom;
