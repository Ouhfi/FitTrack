import { View,  Text , Image } from "react-native";


export default function Header(){
  return(
    <View>
        <Text>
            <Image 
            source={require("../assets/images/imgi_66_anBn.webp")}
      style={{
        width: 200,
        height: 200,
      }}
      />
        </Text>
    </View>
  );

}