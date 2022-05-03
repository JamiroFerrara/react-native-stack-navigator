import { View, Text, TouchableOpacity } from "react-native"
import style from "../style.module.scss"

function DetailsScreen({navigation}) {
  return (
    <View className={style.container}>
      <TouchableOpacity className={style.innerContainer} activeOpacity={0.6} underlayColor="#DDDDDD">
        <Text className={style.text} onPress={() => navigation.navigate('Home')}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

export default DetailsScreen