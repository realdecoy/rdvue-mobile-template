import { createStackNavigator } from "@react-navigation/stack";
import { __COMPONENT__StackParamList } from "@/navigation/types/__COMPONENT__KEBAB__-navigation.type";

const __COMPONENT__Stack = createStackNavigator<__COMPONENT__StackParamList>();

function SampleScreen(props: any) {
  return null;
}

function __COMPONENT__StackNavigator(props: any) {
  return (
    <__COMPONENT__Stack.Navigator>
      <__COMPONENT__Stack.Screen
        name="SampleScreen"
        component={SampleScreen}
      />
    </__COMPONENT__Stack.Navigator>
  );
}

export { __COMPONENT__StackNavigator };
