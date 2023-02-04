import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LoginView from './Views/LoginView';
import MapScreenView from './Views/MapScreenView';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <MapScreenView />
         <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080c24ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
