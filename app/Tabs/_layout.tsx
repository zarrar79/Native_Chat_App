import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';
import Settings from './Settings';
import Profile from './Profile';

const Tab = createMaterialTopTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"       
      screenOptions={{
        tabBarShowIcon: true,
        tabBarIndicatorStyle: { backgroundColor: '#000' },
        swipeEnabled: true
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title : "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title : "Settings",
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => <Ionicons name="settings-outline" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title : "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={20} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
