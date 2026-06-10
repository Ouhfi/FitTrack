import { StyleSheet, Text, View , Image } from "react-native";
import {Settings} from "lucide-react-native";


export function NavBar() {
  
  return (

    
    <View style={styles.NavBar}>
     <Image
      source={require("../assets/images/imgi_66_anBn.webp")}
       resizeMode="cover"
      style={styles.imag}
      /> 
      <Text style = {styles.text}>FitPulse</Text>

      <Settings color={ "blue"} size={30} style={styles.Settings}/>
      
    </View>
  );
}

 const styles = StyleSheet.create({
   imag: {
      width: 50,
        height: 50,
        borderRadius : 50 / 2,
        borderWidth : 2,
        borderColor: "#4f46e5",
         margin: 10,
   },
   text :
   {
    color : "blue",
    fontSize : 30,
     fontWeight: "bold" ,
   },
   NavBar :
  {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        backgroundColor : "#FFFFFF",
       
      },
     Settings :
     {
      marginLeft: "auto" ,
       marginRight : 10,
     }
 });
