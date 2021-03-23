import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  FlatList,
  TextInput,
  StatusBar,
} from "react-native";

const Name = () => {
  return <Text> Congrats on being 4! (Or above it!) </Text>;
};

const renderItem = ({ item }) => (
  <View>
    <Text>{item.key}</Text>
  </View>
);

export default function App() {
  const [count, setBirthday] = useState([{ key: "1", id: "0" }]);
  const [name, setName] = useState("Sir Pad's baby");

  return (
    // style must be object
    <View style={styles.container}>
      <TextInput placeholder="Set custom name" onChangeText={setName} />
      {/* when using curly, its JS */}
      <Text>
        {" "}
        {name} is now {count.length}!
      </Text>
      {count.length > 3 ? <Name /> : null}
      <Button
        onPress={() => {
          console.log(count);
          setBirthday(
            count.concat({
              key: (count.length + 1).toString(),
              id: count.length.toString(),
            })
          );
        }}
        title="Birthday!"
      />
      <FlatList
        contentContainerStyle={styles.flexlist}
        data={count}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  flatlist: {
    flexGrow: 1,
    width: "100%",
  },
});
