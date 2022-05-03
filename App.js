import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;