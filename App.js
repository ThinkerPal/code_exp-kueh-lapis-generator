import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./components/BlockRGB";

function HomeScreen() {
  const [colours, setColours] = useState([
    { red: 255, green: 0, blue: 0, alpha: 1, id: "0" },
    { red: 0, green: 255, blue: 0, alpha: 1, id: "1" },
    { red: 0, green: 0, blue: 255, alpha: 1, id: "2" },
  ]);
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
  return (
    <View style={styles.container}>
      <FlatList width="100%" data={COLOURS} renderItem={renderItem} />
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
