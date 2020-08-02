import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import { AppNavigator } from "./TabNavigator";

// Stack Navigator => How many screens you want in this stack ( necessary for push animation)
// this is important for one screen push to another also having the context to previous screen

// const AppNavigator = createStackNavigator(
//   {
//     HomeE: HomeScreen,
//     SectionB: SectionScreen,
//   },
//   {
//     mode: "modal",
//   }
// );

export { AppNavigator };
