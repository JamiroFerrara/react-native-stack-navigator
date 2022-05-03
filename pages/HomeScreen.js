import { View, Text, TouchableOpacity } from "react-native"
import style from "../style.module.scss"

function HomeScreen({navigation}) {
  return (
    <View className={style.container}>
      <TouchableOpacity className={style.innerContainer} activeOpacity={0.6} underlayColor="#DDDDDD">
        <Text className={style.text} onPress={() => navigation.navigate('Details')}>Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen