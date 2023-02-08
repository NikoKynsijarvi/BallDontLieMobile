import { View, StyleSheet, Text, Pressable } from "react-native";

const CourtInfoView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View
          style={{
            height: "100%",
            width: "70%",
            backgroundColor: "rgba(127, 3, 252, 0.5)",
            borderRadius: 20,
            position: "absolute",
            left: 0,
          }}
        >
          <Text style={styles.nameText}>Pihlajamäen ala-aste</Text>
          <Text style={styles.city}>Helsinki</Text>
        </View>
        <Pressable style={styles.pressable}>
          <Text style={{ fontSize: 25, color: "#fff" }}>Search</Text>
        </Pressable>
      </View>
    </View>
  );
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

    marginTop: 10,
    borderWidth: 2,
    borderColor: "#7f03fc",
  },
  innerContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "rgba(127, 3, 252, 0.3)",
    justifyContent: "center",
  },
  nameText: {
    fontSize: 25,
    color: "#fff",
    padding: 10,
  },
  city: {
    fontSize: 20,
    color: "#F27649",
    padding: 10,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  pressable: {
    width: "80%",
    zIndex: 999,
    position: "absolute",
    height: "20%",
    backgroundColor: "#F27649",
    alignSelf: "flex-end",
    borderRadius: 20,
    bottom: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
