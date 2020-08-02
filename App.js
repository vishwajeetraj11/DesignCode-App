import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { AppNavigator } from "./navigator/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";

const initialState = {
  action: "",
  name: "Stranger",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLOSE_MENU":
      return { action: "closeMenu" };
    case "OPEN_MENU":
      return { action: "openMenu" };
    case "UPDATE_NAME":
      return { name: action.name };
    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
