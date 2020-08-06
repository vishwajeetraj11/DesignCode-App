import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { AppNavigator } from "./navigator/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// const client = new ApolloClient({
//   uri: "https://graphql.contentful.com/content/v1/spaces/ldcl3ayg0mhx",
//   credentials: "same-origin",
//   headers: {
//     Authorization: `Bearer 93f3808c25c1f5bdb95476ca8576c6eaa12b5587efb956efb242ceead7cb3840`,
//   },
// });
const client = new ApolloClient({
  uri: "https://graphql.contentful.com/content/v1/spaces/re8pjj9x3ns9",
  credentials: "same-origin",
  headers: {
    Authorization: `Bearer rhlTw6_LbcyKJSkpIlQc6KgNX90Lce2zviWVkqVvj-8`
  }
})

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
    case "OPEN_CARD":
      return { action: "openCard" };
    case "CLOSE_CARD": 
      return { action: "closeCard" }
    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  </ApolloProvider>
);

export default App;
