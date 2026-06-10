import * as Location from "expo-location";
import { useEffect } from "react";
import { View, Text, Alert } from "react-native";

export default function LocationTest() {
  useEffect(() => {
    const getPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        Alert.alert("Permission denied", "GPS permission is required");
        return;
      }

      console.log("Permission granted ✔️");
    };

    getPermission();
  }, []);

  return (
    <View>
      <Text>Location Test Screen</Text>
    </View>
  );
}