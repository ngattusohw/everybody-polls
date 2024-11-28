// import * as React from "react";
// // import { simpleTabViewNavigatorTest } from "./SimpleTabViewNavigator";
// import { simpleStackNavigatorTest } from "./SimpleStackViewNavigator";

// const AppContainer = simpleStackNavigatorTest;

// export default AppContainer;

import * as React from 'react';
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from '../screens/HomeScreen';
import { PollDetailScreen } from '../screens/PollDetailScreen';

const StackNavigator = stackNavigatorFactory();

const AppContainer = () => {
  return (
    <BaseNavigationContainer>
      <StackNavigator.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#65adf1"
          },
          headerTintColor: "#ffffff"
        }}
      >
        <StackNavigator.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Global Polls"
          }}
        />
        <StackNavigator.Screen
          name="PollDetail"
          component={PollDetailScreen}
          options={{
            title: "Poll Details"
          }}
        />
      </StackNavigator.Navigator>
    </BaseNavigationContainer>
  );
}
export default AppContainer;
