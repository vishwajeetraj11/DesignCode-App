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

class ProjectsScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    return (
      <Container>
        <Text>Projects Screen</Text>
        <Button title="Close" onPress={() => this.props.navigation.goBack()} />
      </Container>
    );
  }
}

export default ProjectsScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
