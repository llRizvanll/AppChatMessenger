import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import ChatListScreen from "../screens/ChatListScreen";
import ChatSettingsScreen from "../screens/ChatSettingsScreen";
import { StringConstant } from "../utils/constants/constants";
import SettingsScreen from "../screens/SettingsScreen";
import { Ionicons } from "@expo/vector-icons";
import ChatScreen from "../screens/ChatScreen";



const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Tab Navigation
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: "",
      }}
    >
      <Tab.Screen
        name={StringConstant.CHAT_SCREEN}
        component={ChatScreen}
        options={{
          tabBarLabel: "Chats",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={StringConstant.SETTINGS_SCREEN}
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const MainNavigator = (props) => {
    return(
        <AppStack.Navigator>
        <AppStack.Screen
          name={StringConstant.HOME}
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <AppStack.Screen
          name={StringConstant.CHAT_SETTINGS_SCREEN}
          component={ChatSettingsScreen}
          options={{
            gestureEnabled: true,
            headerTitle: "Settings",
            headerBackTitle: "Back",
            headerShadowVisible: true,
          }}
        />
        <AppStack.Screen
          name={StringConstant.CHAT_SCREEN}
          component={ChatScreen}
          options={{
            gestureEnabled: true,
            headerTitle: "Settings",
            headerBackTitle: "Back",
            headerShadowVisible: true,
          }}
        />
      </AppStack.Navigator>
    )
}

export default MainNavigator;