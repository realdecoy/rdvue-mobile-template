import React from "react";
import { View, Text } from "react-native";
import styles from "./__SCREEN__.styles";

interface Props {
  value: string;
}

interface State {
  stateValue: string;
}

class __SCREEN__ extends React.Component<Props, State> {
  // --------------------------------------------------------------------------
  // Constructer
  // --------------------------------------------------------------------------
  constructor(props: Props) {
    super(props);

    this.state = {
      stateValue: "",
    };
  }

  // --------------------------------------------------------------------------
  // Methods
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Lifecycle] Methods
  // --------------------------------------------------------------------------
  componentDidMount() {}

  // --------------------------------------------------------------------------
  // Render Method
  // --------------------------------------------------------------------------
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>__SCREEN__ Screen</Text>
        <Text>Value is {this.props.value}</Text>
      </View>
    );
  }
}

export default __SCREEN__;
