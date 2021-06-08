import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./components/BlockRGB";

function HomeScreen() {
  const [colours, setColours] = useState([]);
  function renderItem({ item }) {
    return (
      <BlockRGB
        red={item.red}
        green={item.green}
        blue={item.blue}
        alpha={item.alpha}
      />
    );
  }
  function addColour() {
    setColours([
      {
        red: Math.floor(Math.random() * 255),
        green: Math.floor(Math.random() * 255),
        blue: Math.floor(Math.random() * 255),
        alpha: Math.random(),
        id: `${colours.length}`,
      },...colours, //moving this below also achieves it
    ]);
  }
  return (
    <View style={styles.container}>
      <Button title="Add Colour" onPress={addColour} />
      <FlatList
        // inverted // - Starts list from bottom
        style={{ width: "100%" }}
        data={colours}
        renderItem={renderItem}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
