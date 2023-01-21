import React from "react";
import { View, Text } from "react-native";
import styles from "./__COMPONENT__KEBAB__.styles";

interface Props {
  value: string;
}

export function __COMPONENT__(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>__COMPONENT__ Componenet</Text>
      <Text>Value is {this.props.value}</Text>
    </View>
  );
}

export { __COMPONENT__ };
