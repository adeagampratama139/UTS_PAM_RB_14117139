import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PageMonitor from "./screens/PageMonitor";
import PageHome from "./screens/PageHome";

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={PageHome}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Monitor"
            component={PageMonitor}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}