import { View, Text , StyleSheet } from "react-native";
import { NavBar } from "@/components/NavBar";
import * as Progress from 'react-native-progress';


export default function Dashboard() {
  return (
    <View> 
      <NavBar/>
      <View style={styles.circle}>
        <Progress.Circle size={100} progress={0.6}/>
      </View>
      <Text>Dashboard Page</Text>
    </View>
  );
}

 const styles =StyleSheet.create({
  circle:
  {
    flex: 1,
        justifyContent: "center",
        alignItems: "center",
  }

}); 

