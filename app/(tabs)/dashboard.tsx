import { NavBar } from "@/components/NavBar";
import { Footprints, Locate } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";
import * as Progress from "react-native-progress";

export default function Dashboard() {
  return (
    <View>
      <NavBar />
      <View style={styles.circle}>
        <Progress.Circle
          size={200}
          progress={0.3}
          showsText={true}
          borderWidth={3}
          thickness={12}
          color="#3B82F6"
        />
      </View>
      <View style={styles.Card}>
        <View>
          <Footprints color={"blue"} size={30} />
          <Text> 7,867 </Text>
        </View>

        <Text> Steps </Text>
      </View>

      <View style={styles.Card}>
        <View>
          <Locate color={"blue"} size={30} />
          <Text style={styles.text}> 7,867 </Text>
        </View>
        <Text>Distance</Text>
      </View>
      <Text>Dashboard Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Card: {
    backgroundColor: "#FFFFFF",
    margin: 5,
    width: "auto",
    height: "auto",
    borderRadius: 1,
  },
  text: {
    fontSize: 30,
    color: "blue",
  },
});
