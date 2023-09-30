import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import ChatListScreen from "./screens/ChatListScreen";
import ChatSettingsScreen from "./screens/ChatSettingsScreen";
import { StringConstant } from "./utils/constants/constants";
import SettingsScreen from "./screens/SettingsScreen";

SplashScreen.preventAutoHideAsync();
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
        name={StringConstant.CHAT_LIST_SCREEN}
        component={ChatListScreen}
        options={{
          tabBarLabel:'Chats'
        }}
      />
      <Tab.Screen
        name={StringConstant.SETTINGS_SCREEN}
        component={SettingsScreen}
        options={{
          tabBarLabel:'Settings'
        }}
      />
    </Tab.Navigator>
  );
};
export default function App() {
  const [appIsLoaded, setAppIsLoaded] = useState(false);

  useEffect(() => {
    const prepareFonts = async () => {
      try {
        await Font.loadAsync({
          //load font files
          black: require("./assets/fonts/Roboto-Black.ttf"),
          blackItalic: require("./assets/fonts/Roboto-BlackItalic.ttf"),
          bold: require("./assets/fonts/Roboto-Bold.ttf"),
          boldItalic: require("./assets/fonts/Roboto-BoldItalic.ttf"),
          italic: require("./assets/fonts/Roboto-Italic.ttf"),
          light: require("./assets/fonts/Roboto-Light.ttf"),
          lightItalic: require("./assets/fonts/Roboto-LightItalic.ttf"),
          medium: require("./assets/fonts/Roboto-Medium.ttf"),
          mediumItalic: require("./assets/fonts/Roboto-MediumItalic.ttf"),
          regular: require("./assets/fonts/Roboto-Regular.ttf"),
          thin: require("./assets/fonts/Roboto-Thin.ttf"),
          thinItalic: require("./assets/fonts/Roboto-ThinItalic.ttf"),
        });
      } catch (error) {
        console.error(error);
      } finally {
        setAppIsLoaded(true);
      }
    };
    prepareFonts();
  }, []);

  //timer for splashscreen
  useEffect(() => {
    setTimeout(() => {
      setAppIsLoaded(true);
    }, 2000);
  });

  //handle layout with memoization
  const onLayout = useCallback(async () => {
    if (appIsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsLoaded]);

  if (!appIsLoaded) return null;

  return (
    <SafeAreaProvider onLayout={onLayout}>
      <NavigationContainer>
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
        </AppStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textStyle: {
    fontFamily: "black",
  },
});
