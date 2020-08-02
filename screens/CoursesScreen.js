import React from "react";
import styled from "styled-components";
import { Button } from "react-native";
import {
  TouchableOpacity,
  StatusBar,
  WebView,
  Linking,
  ScrollView,
} from "react-native";

class CoursesScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    return (
      <Container>
        <Text>Course Screen</Text>
        <Button title="Close" onPress={() => this.props.navigation.goBack()} />
      </Container>
    );
  }
}

export default CoursesScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
