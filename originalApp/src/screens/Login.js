//importing necessary libraries etc.
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
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { auth } from "../../firebase-config";

function Login({ navigation }) {
  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);

  const loginHandler = () => {
    auth
      .signInWithEmailAndPassword(email, password) //login process with firebase
      .then((uc) => {
        if (uc.user) {
          console.info(`Logined With: ${uc.user.email}`)
          navigation.navigate("Main")
        } else {
          console.info(`Login Failed for: ${uc.user.email}`)
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err.message)
      });
  };

  //visual settings for home page
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Enter Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Enter Password"
          secureTextEntry = {true}
        />
      </SafeAreaView>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={loginHandler} color="#5D9CEC" />
      </View>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      /> */}
    </View>
  );
}

//styles for elements on the screen
const styles = StyleSheet.create({
  container: {
    // paddingTop: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 140,
    backgroundColor: "#CCD1D9",
  },
  logo: {
    width: 250,
    height: 250,
  },
  txtInput: {
    borderWidth: 1.5,
    backgroundColor: "#E6E9ED",
    borderColor: "#535353",
    height: 40,
    width: 220,
    padding: 5,
    margin: 10,
  },
  buttonContainer: {
    // flex: 1,
    // flexDirection: "row",
    // justifyContent: "space-around",
    marginTop: 10,
  },
  input: {
    borderWidth: 1.5,
    backgroundColor: "#E6E9ED",
    borderColor: "#535353",
    height: 40,
    width: 220,
    padding: 5,
    margin: 10,
  },
  row: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  link: {
    fontWeight: "bold",
  },
});
export default Login;
