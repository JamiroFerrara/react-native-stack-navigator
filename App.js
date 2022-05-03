import * as React from 'react';
import { View, Text, Easing} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';

import style from './style.module.scss';
import { TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View className={style.container}>
      <TouchableOpacity className={style.innerContainer} activeOpacity={0.6} underlayColor="#DDDDDD">
        <Text className={style.text} onPress={() => navigation.navigate('Details')}>Details</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View className={style.container}>
      <TouchableOpacity className={style.innerContainer} activeOpacity={0.6} underlayColor="#DDDDDD">
        <Text className={style.text} onPress={() => navigation.navigate('Home')}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

const openConfig = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
}

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 100,
    easing:Easing.linear
  }
}

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
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;