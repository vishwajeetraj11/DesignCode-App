import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import CoursesScreen from "../screens/CoursesScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import { Ionicons } from "@expo/vector-icons";

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator headerMode={null}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Section" component={SectionScreen} />
    </HomeStack.Navigator>
  );
}

const CoursesStack = createStackNavigator();

function CoursesStackScreen() {
  return (
    <CoursesStack.Navigator headerMode={null}>
      <CoursesStack.Screen name="Courses" component={CoursesScreen} />
    </CoursesStack.Navigator>
  );
}

const ProjectStack = createStackNavigator();

function ProjectStackScreen() {
  return (
    <ProjectStack.Navigator headerMode={null}>
      <ProjectStack.Screen name="Projects" component={ProjectsScreen} />
    </ProjectStack.Navigator>
  );
}

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const Tab = createBottomTabNavigator();

class AppNavigator extends React.Component {
  // const focusedOptions = descriptors[state.routes[state.index].key].options;
  // var tabBarVisible = true;
  // const routeName = navigation.state.routes[navigation.state.index].routeName;

  // if (routeName == "Section" || routeName == "Video") {
  //   tabBarVisible = false;
  // }
  state = {
    tabBarvisible: true,
  };

  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "HomeScreen") {
              iconName = "ios-home";
            } else if (route.name === "CoursesScreen") {
              iconName = "ios-albums";
            } else if (route.name === "ProjectScreen") {
              iconName = "ios-folder";
            }
            return (
              <Ionicons
                name={iconName}
                size={26}
                color={focused ? activeColor : inactiveColor}
              />
            );
          },
        })}
      >
        <Tab.Screen
          name="HomeScreen"
          options={({ navigation, route }) => {
            // console.log(navigation);
            var Tab = true;
            // if (route.state) {
            //   // console.log(route.state);
            //    Tab = true;
            //   if (route.state.routeNames.length === 1) {
            //     Tab = true;
            //   } else if (route.state.routeNames.length === 2) {
            //     Tab = false;
            //   }
            // }
            return {
              tabBarVisible: Tab,
              tabBarLabel: "Home",
            };
            // if (route.state) {
            //   if (route.state.routeNames === "Section") {
            //   return {
            //     tabBarVisible: false,
            //     tabBarLabel: "Home",
            //   };
            // }
            // } else if (route.state.routeNames[1] === "Section") {
            //   return {
            //     tabBarVisible: true,
            //     tabBarLabel: "Home",
            //   };
            // }
          }}
          component={HomeStackScreen}
        />

        <Tab.Screen
          name="CoursesScreen"
          component={CoursesStackScreen}
          options={{
            tabBarLabel: "Course",
            tabBarVisible: true,
          }}
        />
        <Tab.Screen
          name="ProjectScreen"
          component={ProjectStackScreen}
          options={{
            tabBarLabel: "Project",
            tabBarVisible: true,
          }}
        />
      </Tab.Navigator>
    );
  }
}

export { AppNavigator };
