//importing necessary libraries etc.
import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Todos from "./Todos";
import Comments from "./Comments";
import Users from "./Users";
import Home from "./Home";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Home></Home>
    </View>
  );
}

//Calling users, todos and comment screen inside this 3 function.
function UsersScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Users></Users>
    </View>
  );
}

function TodosScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Todos></Todos>
    </View>
  );
}

function CommentsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Comments></Comments>
    </View>
  );
}

const Tab = createBottomTabNavigator();

//settings for bottom tab menu
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Todos") {
            iconName = focused
              ? "checkmark-done-outline"
              : "checkmark-done-outline";
          } else if (route.name === "Comments") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "Users") {
            iconName = focused ? "person" : "person-circle-outline";
          } else if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // headerShown: false
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Users"
        component={UsersScreen}
        options={{
          // headerShown: false
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Todos"
        component={TodosScreen}
        options={{
          // headerShown: false
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          // headerShown: false
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
