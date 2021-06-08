import React from "react";
import { View, Stylesheet } from "react-native";

export default function BlockRGB({ red, green, blue, alpha }) {
  return (
    <View
      style={{
        backgroundColor: `rgba(${red}, ${green}, ${blue}, ${alpha})`,
        width: "100%",
        height: 80,
      }}
    ></View>
  );
}
