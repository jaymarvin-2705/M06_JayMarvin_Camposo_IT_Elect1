import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";

export default function ColorChangerApp() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.buttonWrapper}>
        <Button title="⚪ White" onPress={() => setBgColor("white")} />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="🔵 Light Blue" onPress={() => setBgColor("lightblue")} />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="🟢 Light Green" onPress={() => setBgColor("lightgreen")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  buttonWrapper: {
    width: "60%",       // makes button look like block element
    marginTop: 20,      // spacing between buttons
  }
});
