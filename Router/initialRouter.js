import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Components/HomePage";
const Stack = createNativeStackNavigator();
import DetailedInfo from "./../Components/Account/DetailedInfo";
import LoginPage from "./../Components/Account/Authentication";
const initialRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginInfo"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailedInfo"
          component={DetailedInfo}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default initialRouter;
