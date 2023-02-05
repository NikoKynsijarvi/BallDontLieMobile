import {
  View,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
  Button,
  ScrollView,
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import CourtRow from "./CourtRow";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const SPRING_CONFIG = {
  damping: 80,
  overshootClamping: true,
};

const DraggableList = () => {
  const dimensios = useWindowDimensions();
  const top = useSharedValue(dimensios.height);

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

  const testArray = new Array(20);

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.container, style]}>
        <ScrollView style={styles.scrollContainer}>
          <CourtRow />
          <CourtRow />
          <CourtRow />
          <CourtRow />
          <CourtRow />
          <CourtRow />
          <CourtRow />
          <CourtRow />
          <CourtRow />
          <CourtRow />
          <CourtRow />
          <CourtRow />
          <CourtRow />
          <CourtRow />
          <CourtRow />
          <CourtRow />
        </ScrollView>
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
  },
  scrollContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  line: {
    width: 75,
    height: 5,
    backgroundColor: "gray",
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: 2,
  },
});
