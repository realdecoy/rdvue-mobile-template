import React from "react";
import { View } from "react-native";
import styles from "./__LAYOUT__.styles";

interface Props {
  value: string;
}

interface State {
  stateValue: string;
}

class __LAYOUT__ extends React.Component<Props, State> {
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
        <Text style={styles.heading}>__LAYOUT__ Layout</Text>
        <Text>Value is {this.props.value}</Text>
      </View>
    );
  }
}

export default __LAYOUT__;
