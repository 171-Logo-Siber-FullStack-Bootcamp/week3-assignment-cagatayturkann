// Importing components from react-native library.
import React from "react";
import { useNavigation } from '@react-navigation/native'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { auth } from "../../firebase-config";

const Home = () => {
  const navigation = useNavigation()
  const signOutHandler = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Home");
      })
      .catch((error) => alert(error.message));
  };

  return (
    // Using react-natives built in components.
    <View style={styles.container}>
      <Text>Welcome {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={signOutHandler} style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    // backgroundColor: theme.colors.primary,
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    // color: theme.colors.lightText,
    fontWeight: "700",
    fontSize: 16,
  },
});

export default Home;
