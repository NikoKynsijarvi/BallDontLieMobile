import { View, StyleSheet, Text, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { focusToLocation } from "../Reducers/MapControlReducer";
import { selectCourt } from "../Reducers/CourtsReducer";

const CourtInfoView = ({ name, municipality, coords, id }) => {
  const dispatch = useDispatch();
  var placeName = name.split("/");

  const onSearchPress = (e) => {
    e.preventDefault();
    const courtCoords = {
      latitude: coords[1],
      longitude: coords[0],
    };
    dispatch(focusToLocation(courtCoords));
    dispatch(selectCourt(id));
  };

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
          <Text style={styles.nameText}>{placeName[0]}</Text>
          <Text style={styles.city}>{municipality.toUpperCase()}</Text>
        </View>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#7f03fc" : "#F27649",
            },
            styles.pressable,
          ]}
          onPress={(e) => onSearchPress(e)}
        >
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
    alignSelf: "flex-end",
    borderRadius: 20,
    bottom: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
