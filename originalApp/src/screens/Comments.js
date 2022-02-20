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

const Comments = () => {
  const [data, setData] = useState([]);

  const getComments = async () => {
    const config = { headers: { Accept: "application/json" } };
    const res = await api.get("/comments", config);
    setData(res.data);
  };

  useEffect(() => {      
    getComments();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => ( 
          <Text style={styles.item}>{item.body}</Text>
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
    color: "#fff",
    backgroundColor: "#5D9CEC",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Comments;
