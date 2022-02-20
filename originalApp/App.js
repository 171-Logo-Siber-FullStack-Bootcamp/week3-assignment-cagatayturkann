//importing necessary libraries etc.
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Tabs from "./src/screens/Main";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Login}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center'
        }}
      />
        <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Sign Up',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen
        name="Main"
        component={Tabs}
        options={{
          headerShown: false
          // title: 'Details',
          // headerStyle: {
          //   backgroundColor: '#f4511e',
          // },
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
          // headerTitleAlign: 'center'
        }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

