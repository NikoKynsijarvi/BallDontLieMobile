import { StyleSheet, View, Text, Image } from "react-native";

const CourtRow = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image
          style={{ height: 25, width: 25 }}
          source={require("./../../assets/sports_basketball.png")}
        />
        <Text style={styles.titleText}>Pihlajamäen ala-aste</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    display: "flex",
    marginBottom: 5,
    borderRadius: 20,
    backgroundColor: "#151e34ff",
    justifyContent: "center",
  },
  titleContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
  },
  titleText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    marginLeft: 5,
  },
});

export default CourtRow;
