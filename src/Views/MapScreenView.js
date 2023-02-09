import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import DraggableList from "../Components/DraggableList";
import MenuButton from "../Components/MenuButton";
import courtsService from "./../services/Courts";
import { useSelector } from "react-redux";

const MapScreenView = () => {
  const state = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <MapView
        userInterfaceStyle="dark"
        style={styles.map}
        initialRegion={{
          latitude: 60.165987,
          longitude: 24.942709,
          latitudeDelta: 0.15,
          longitudeDelta: 0.15,
        }}
      >
        {state.courts.map((court) => (
          <Marker
            key={court.id}
            coordinate={{
              latitude: court.location.coordinates[1],
              longitude: court.location.coordinates[0],
            }}
          />
        ))}
      </MapView>
      <DraggableList />
    </View>
  );
};

export default MapScreenView;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  mapViewButtons: {
    width: "100%",
    position: "absolute",
    top: 0,
    display: "flex",
    flexDirection: "row",
    height: "10%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
