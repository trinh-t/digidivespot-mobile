import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import Homepage from "./pages/Homepage";
import Divespots from "./pages/Divespots";


export default function App() {

  const image = { uri: "https://digidivespot.nl/divespot-images/snorkeling.jpg" };
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Homepage" component={Homepage} options={{ title: 'Home'}} />
        <Stack.Screen name="Divespots" component={Divespots} options={{ title: 'Divespots'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
