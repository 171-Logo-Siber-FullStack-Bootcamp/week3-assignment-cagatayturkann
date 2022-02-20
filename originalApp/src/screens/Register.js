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

function Register({ navigation }) {
  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);

  const registerHandler = () => {
    auth
      .createUserWithEmailAndPassword(email,password) //register process with firebase
      .then((uc) => {
        if (uc.user) {
          console.info(`Registered With: ${uc.user.email}`)
          navigation.navigate('Home')
        } else {
          console.info(`Registiration Failed For: ${uc.user.email}`)
          alert("Registiration Failed! Please try again.")
        }
      })
      .catch((err) => {
        console.log(err );
      });

      // auth.signOut().then(()=>{}).catch((err)=>{console.log(err);})
  };

  //visual settings for register page
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
        <Button title="Register" onPress={registerHandler} />
      </View>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
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
    flexDirection: "row",
    justifyContent: "space-around",
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
export default Register;
