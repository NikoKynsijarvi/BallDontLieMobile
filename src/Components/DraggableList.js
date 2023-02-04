import { View , StyleSheet, Dimensions, useWindowDimensions, Button} from "react-native"
import { PanGestureHandler} from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated"
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const SPRING_CONFIG =   {
                    damping:80,
                    overshootClamping: true
                     }


const DraggableList = () => {

    const dimensios = useWindowDimensions()
    const top = useSharedValue(dimensios.height)

    const gestureHandler = useAnimatedGestureHandler({
        onStart(_, context){
            context.startTop = top.value

        },
        onActive(event, context){
            console.log(event.translationY);
            top.value = context.startTop +  event.translationY
        },
        onEnd(){
            if(top.value > dimensios.height / 2 +200){
                top.value = dimensios.height
            }else{
                top.value = dimensios.height / 2
            }
        }
    })


    const style = useAnimatedStyle(() => {
        return {
            top: withSpring(top.value/1.1, SPRING_CONFIG)
        }
    })

    return (
        <>
        <View style={{flex:1, justifyContent:"center", alignItems:"center", position:"absolute", alignSelf:"center", top: 40}}>
            <Button title="Open" onPress={() => {
                top.value = withSpring(dimensios.height/2, SPRING_CONFIG)
            }}></Button>
        </View>
        <PanGestureHandler onGestureEvent={gestureHandler} >
            <Animated.View style={[{position:"absolute", 
                            left:0,
                            right:0,
                            bottom:0,
                            backgroundColor:"#080c24ff",
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            shadowColor:"#000",
                            shadowOffset: {
                                width: 0,
                                height: 2
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                            padding: 20,
                            justifyContent:"center",
                            alignItems:"center"


     }, style]}>
               
            </Animated.View>
        </PanGestureHandler>
        
       </>
    )
}
export default DraggableList


const styles = StyleSheet.create({
    bottomSheetContainer:{
        height:SCREEN_HEIGHT,
        width:"100%",
        backgroundColor:"white",
        position:"absolute",
        top: SCREEN_HEIGHT/1.5,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30
    },
    line:{
        width: 75,
        height: 5,
        backgroundColor: "gray",
        alignSelf:"center",
        marginVertical:15,
        borderRadius: 2
    }
})