import { View, StyleSheet, Animated, Text } from "react-native";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import MenuButton from "./MenuButton";

const SideBar = () => {
  const [leftValue, setLeftValue] = useState(-200);
  const settings = useSelector((state) => state.settings);

  const slideAnim = useRef(new Animated.Value(-200)).current;
  const rotateOneAnim = useRef(new Animated.Value(0)).current;

  const slideRight = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const slideLeft = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(slideAnim, {
      toValue: -200,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (settings.sidebarOpen) {
      slideRight();
      return;
    }
    slideLeft();
  }, [settings.sidebarOpen]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          // Bind opacity to animated value
          left: slideAnim,
        },
      ]}
    ></Animated.View>
  );
};

export default SideBar;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 200,
    zIndex: 999,
    height: "100%",
    backgroundColor: "#080c24ff",
  },
  xBarOne: {
    width: "60%",
    height: 4,
    backgroundColor: "white",
    transform: [{ rotateZ: "50deg" }],
    position: "absolute",
  },
  xBarTwo: {
    width: "60%",
    height: 4,
    backgroundColor: "white",
    transform: [{ rotateZ: "130deg" }],
    position: "absolute",
  },
});
