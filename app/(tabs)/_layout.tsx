import { Tabs } from "expo-router";
import { LayoutDashboard , Activity , User} from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,// rmove tab li fo9
        tabBarActiveTintColor: "#4f46e5",
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <LayoutDashboard color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
          tabBarIcon: ({ color , size}) => 
            <Activity color = {color} size={size} />
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon:({ color , size }) =>
            <User color={color} size={size} />
        }}
      />
    </Tabs>
  );
}