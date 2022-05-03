import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen';
import DetailScreen from './pages/DetailScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" 
          screenOptions={{
            headerTitleAlign: "center", 
            gestureEnabled: true, 
            gestureDirection: "horizontal",
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }} 
            headerMode="float">

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;