import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import DraggableList from "../Components/DraggableList";
import MenuButton from "../Components/MenuButton";
import courtsService from "./../services/Courts";
import SideBar from "../Components/SideBar";
import { useSelector } from "react-redux";
import CourtMarkerCustom from "../Components/Marker";
import SearchBar from "../Components/SearchInput";
import { useState } from "react";

const CourtMarker = ({ court, selectedCourt }) => {
  if (selectedCourt && court.id !== selectedCourt) {
    return null;
  }
  if (!selectedCourt) {
    return (
      <Marker
        key={court.id}
        coordinate={{
          latitude: court.location.coordinates[1],
          longitude: court.location.coordinates[0],
        }}
      >
        <CourtMarkerCustom />
      </Marker>
    );
  }
  if (selectedCourt && selectedCourt === court.id) {
    return (
      <Marker
        key={court.id}
        coordinate={{
          latitude: court.location.coordinates[1],
          longitude: court.location.coordinates[0],
        }}
      >
        <CourtMarkerCustom />
      </Marker>
    );
  }
};

const MapScreenView = () => {
  const courts = useSelector((state) => state.courts);
  const mapControls = useSelector((state) => state.mapControls);
  const [clicked, setClicked] = useState(false);

  const isActive = (id) => {
    return id === courts.selectedCourt ? true : false;
  };

  return (
    <View style={styles.container}>
      <MapView
        userInterfaceStyle="dark"
        style={styles.map}
        region={mapControls}
      >
        {courts.courts.map((court) => (
          <CourtMarker
            key={court.id}
            court={court}
            selectedCourt={courts.selectedCourt}
          />
        ))}
      </MapView>
      <DraggableList />
      <SideBar />
      <View
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          top: 50,
          position: "absolute",
        }}
      >
        <SearchBar clicked={clicked} setClicked={setClicked} />
      </View>
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
