import React from "react";
import { SafeAreaView } from "react-native";
import CounterApp from "./CounterApp";
import ColorChange from "./ColorChange";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CounterApp />
      <ColorChange/>
    </SafeAreaView>
  );
}
