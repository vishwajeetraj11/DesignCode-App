import React from "react";
import styled from "styled-components";
import LottieView from "lottie-react-native";
import { Animated, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;

class Success extends React.Component {
    state = {
      top: new Animated.Value(0),
      opacity: new Animated.Value(0)
    };

  
    render() {
      return (
        <Container />
      );
    }
  }
  
  export default Success;
  

const Container = styled.View`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);
