import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from './src/Screen1';
import Screen2 from './src/Screen2';
const RootStack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{}}>
        <RootStack.Screen name="screen1" component={Screen1} />
        <RootStack.Screen
          name="screen2"
          component={Screen2}
          options={{presentation: 'modal'}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
