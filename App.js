import React from "react";
import "react-native-gesture-handler";

import * as Font from "expo-font";
import { ActivityIndicator } from "react-native";
import { Root } from "native-base";
import Main from "./components/main";
import { createStackNavigator } from "@react-navigation/stack";
import Movies from "./components/movies/index";
import Books from "./components/books/index";
import DetailPage from "./components/DetailPage/index";
import AddedContent from "./components/AddedContent/index";
import Tvshows from "./components/tvshows/index";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function tabs_view() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Main}
        options={{
          tabBarLabel: "Main",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Movie"
        component={Movies}
        options={{
          tabBarLabel: "Movie",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="movie" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Book"
        component={Books}
        options={{
          tabBarLabel: "Books",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tv"
        component={Tvshows}
        options={{
          tabBarLabel: "tv",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="television-classic"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <ActivityIndicator />;
    }
    return (
      <NavigationContainer style={{ backgroundColor: "white" }}>
        <Stack.Navigator>
          <Stack.Screen name="Addition" component={tabs_view} />
          <Stack.Screen name="DetailPage" component={DetailPage} />
          <Stack.Screen name="AddedContent" component={AddedContent} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
