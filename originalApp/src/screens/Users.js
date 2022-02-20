//importing necessary libraries etc.
import React, { useEffect,useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import api from "../services/apis";

const Users = () => {
  const [data, setData] = useState([]);

  const getUsers = async () => {
    const config = { headers: { Accept: "application/json" } };
    const res = await api.get("/users", config);
    setData(res.data);
  };

  useEffect(() => {      
    getUsers();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => ( 
          <Text style={styles.item}>{item.email}</Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    width: 310,
    marginVertical: 8,
    marginHorizontal: 16,
    color: "#fff",
    backgroundColor: "#5D9CEC"
  },
  title: {
    fontSize: 32,
  },
});

export default Users;
