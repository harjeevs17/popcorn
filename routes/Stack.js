import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer } from "@react-navigation/stack";
import Main from "../components/main";

const screens = {
  Main: {
    screen: Main,
  },
};

const AppNavigator = createStackNavigator(screens);
export default AppNavigator;
//export default createAppContainer(AppNavigator);
