import {
  View,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
  Button,
  ScrollView,
  Text,
  TextInput,
  FlatList,
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import CourtInfoView from "./CourtInfoView";
import SearchBar from "./SearchInput";
import react, { useState } from "react";
import { useSelector } from "react-redux";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const SPRING_CONFIG = {
  damping: 80,
  overshootClamping: true,
};

const DraggableList = () => {
  const state = useSelector((state) => state);
  const dimensios = useWindowDimensions();
  const top = useSharedValue(dimensios.height);
  const [clicked, setClicked] = useState(false);

  const gestureHandler = useAnimatedGestureHandler({
    onStart(_, context) {
      context.startTop = top.value;
    },
    onActive(event, context) {
      top.value = context.startTop + event.translationY;
    },
    onEnd() {
      if (top.value > dimensios.height / 2 + 200) {
        top.value = dimensios.height;
      } else {
        top.value = dimensios.height / 2;
      }
    },
  });

  const style = useAnimatedStyle(() => {
    return {
      top: withSpring(top.value / 1.1, SPRING_CONFIG),
    };
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.container, style]}>
        <View style={styles.line} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Courts</Text>
        </View>
        <FlatList
          style={styles.scrollContainer}
          data={state.courts}
          horizontal={true}
          renderItem={({ item }) => (
            <CourtInfoView
              name={item.name.fi}
              municipality={item.municipality}
            />
          )}
        />
      </Animated.View>
    </PanGestureHandler>
  );
};
export default DraggableList;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#080c24ff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  scrollContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  line: {
    width: 75,
    height: 5,
    backgroundColor: "gray",
    alignSelf: "center",
    marginVertical: 5,
    borderRadius: 2,
  },
  title: {
    fontSize: 35,
    paddingLeft: 10,
    color: "white",
  },
  inputField: {
    backgroundColor: "#151e34ff",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "60%",
    height: 25,
  },
});
