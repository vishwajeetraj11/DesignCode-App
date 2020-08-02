import React from "react";
import styled from "styled-components/native";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MenuItem from "./MenuItems";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    action: state.action
   }
}

function mapDispatchToProps(dispatch) {
  return{
    closeMenu: () => dispatch({
      type: "CLOSE_MENU"
    })
  }
}

const screenHeight = Dimensions.get("window").height + 30;

class Menu extends React.Component {
  state = {
    top: new Animated.Value(screenHeight),
  };

  componentDidMount() {
   this.toggleMenu()
  }

  componentDidUpdate() {
    this.toggleMenu()
  }

  toggleMenu = () => {

    if(this.props.action === 'openMenu') {
      Animated.spring(this.state.top, {
        toValue: 54,
        useNativeDriver: false
      }).start();
    }

    if(this.props.action == "closeMenu") {
      Animated.spring(this.state.top, {
        toValue: screenHeight,
        useNativeDriver: false
      }).start();
    }
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <Cover>
          <Image source={require("../assets/background2.jpg")} />
          <Title>Meng To</Title>
          <Subtitle>Designer at Design+Code</Subtitle>
        </Cover>
        <TouchableOpacity
          onPress={this.props.closeMenu}
          style={{
            position: "absolute",
            top: 120,
            left: "50%",
            marginLeft: -22,
            zIndex: 1,
            backgroundColor: "white",
            borderRadius: 20,
          }}
        >
          <CloseView>
            <Ionicons name="ios-close" size={44} color="#546bfb" />
          </CloseView>
        </TouchableOpacity>
        <Content>
          {items.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
          <MenuItem />
        </Content>
      </AnimatedContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

const Container = styled.View`
  position: absolute;
  background: #fff;
  width: 100%;
  height: 100%;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: #000;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  height: ${screenHeight};
  padding: 50px;
  background: #f0f3f5;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Image = styled.Image`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
`;
const Subtitle = styled.Text`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;

const items = [
  {
    icon: "ios-settings",
    title: "Account",
    text: "Settings",
  },
  {
    icon: "ios-card",
    title: "Billing",
    text: "Payments",
  },
  {
    icon: "ios-compass",
    title: "Learn React",
    text: "Start course",
  },
  {
    icon: "ios-exit",
    title: "Log out",
    text: "See you soon!",
  },
];
