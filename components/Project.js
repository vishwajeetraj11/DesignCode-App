import React from "react";
import styled from "styled-components";
import {
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import { StatusBar, setStatusBarHidden } from "expo-status-bar";

const { width, height } = Dimensions.get("window");
// const tabBarHeight = 83;

class Project extends React.Component {
  state = {
    cardWidth: new Animated.Value(315),
    cardHeight: new Animated.Value(460),
    titleTop: new Animated.Value(20),
    opacity: new Animated.Value(0),
  };

  openCard = () => {
    Animated.spring(this.state.cardWidth, {
      toValue: width,
      useNativeDriver: false,
    }).start();
    Animated.spring(this.state.cardHeight, {
      toValue: height,
      useNativeDriver: false,
    }).start();

    Animated.spring(this.state.titleTop, {
      toValue: 40,
      useNativeDriver: false,
    }).start();

    Animated.timing(this.state.opacity, {
      toValue: 1,
      useNativeDriver: false,
    }).start();

    // StatusBar.setHidden(true);
    // setStatusBarHidden(true);
    // StatusBar.setBackgroundColor("transluscent");
  };

  closeCard = () => {
    Animated.spring(this.state.cardWidth, {
      toValue: 315,
      useNativeDriver: false,
    }).start();
    Animated.spring(this.state.cardHeight, {
      toValue: 460,
      useNativeDriver: false,
    }).start();
    Animated.spring(this.state.titleTop, {
      toValue: 20,
      useNativeDriver: false,
    }).start();
    Animated.timing(this.state.opacity, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
    // Animated.spring(this.state.textHeight, {
    //    toValue: 100 ,
    //    useNativeDriver:false
    //   }).start();

    // StatusBar.setHidden(false);
    // StatusBar.setBarStyle('dark-content')
    // setStatusBarHidden(false, "fade");
    // this.props.closeCard();
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.openCard}>
        <AnimatedContainer
          style={{
            elevation: 30,
            width: this.state.cardWidth,
            height: this.state.cardHeight,
          }}
        >
          <Cover>
            <Image source={this.props.image} />
            <AnimatedTitle style={{ top: this.state.titleTop }}>
              {this.props.title}
            </AnimatedTitle>
            <Author>by {this.props.author}</Author>
          </Cover>
          <Text>{this.props.text}</Text>
          <TouchableOpacity
            style={{ position: "absolute", top: 50, right: 20 }}
            onPress={this.closeCard}
          >
            <AnimatedCloseView style={{ opacity: this.state.opacity }}>
              <Ionicons name="ios-close" size={34} color="#546bfb" />
            </AnimatedCloseView>
          </TouchableOpacity>
        </AnimatedContainer>
      </TouchableWithoutFeedback>
    );
  }
}

export default Project;

const Container = styled.View`
  width: 315px;
  height: 460px;
  border-radius: 14px;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);

// const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

const AnimatedCloseView = Animated.createAnimatedComponent(CloseView);

const Cover = styled.View`
  height: 290px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 290px;
`;

const Title = styled.Text`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  width: 300px;
`;
const AnimatedTitle = Animated.createAnimatedComponent(Title);

const Author = styled.Text`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Text = styled.Text`
  font-size: 17px;
  margin: 20px;
  line-height: 24px;
  color: #3c4560;
`;

const AnimatedText = Animated.createAnimatedComponent(Text);
