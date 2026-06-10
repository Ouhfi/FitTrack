import { StyleSheet, Text, View , Image } from "react-native";

type CardProps = {
  title?: string;
  subtitle?: string;
};

export function Card({ title = "Workout", subtitle = "Stay consistent" }: CardProps) {
  return (
    <View style={styles.card}>
      <Text>{title}</Text>
      <Text >{subtitle}</Text>
     <Image
      source={require("../assets/images/imgi_66_anBn.webp")}
       resizeMode="cover"
      style={{
        width: 200,
        height: 200,
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderColor: "#e4eadf",
    borderRadius: 8,
    borderWidth: 4,
    padding: 100,
  },
 
});
