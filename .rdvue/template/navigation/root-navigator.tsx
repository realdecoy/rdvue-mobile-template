import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  EdgeInsets,
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { View } from "@/components/themed";
import { StyleSheet } from "react-native";

function RootNavigator() {
  // TODO: Remove
  // frontier mobile add navigation "home" --stack
  // ----------
  // 1. Create new file called "home-navigation.tsx"
  // 2. Replace names with "home" (user entered name) in file.
  // 3. Create the type file in navigation/types/ folder called __NAME__.type.ts (eg. home.type.ts)
  // 3. Copy files into navigation and navigation/types folder of project respectively.
  const insets = useSafeAreaInsets();
  const styles = applyStyles(insets);
  return (
  <View style={styles}>
    {/* Add created navigations here */}
  </View>
  )
}

// ----
export const applyStyles = (insets: EdgeInsets): any => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      width: "100%",
      alignSelf: "stretch",
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
  });
};

// ----
export default function Navigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
