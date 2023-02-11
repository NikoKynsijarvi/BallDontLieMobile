import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import courtsService from "./../services/Courts";
import MapScreenView from "./MapScreenView";
import { initCourts } from "../Reducers/CourtsReducer";

export default function MainView() {
  const dispatch = useDispatch();
  const { user, setUser } = useState(true);

  useEffect(() => {
    courtsService
      .getCourts()
      .then((res) => {
        dispatch(initCourts(res));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <MapScreenView />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080c24ff",
    alignItems: "center",
    justifyContent: "center",
  },
});
