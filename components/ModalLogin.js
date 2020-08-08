import React from "react";
import styled from "styled-components";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Alert, Animated, Dimensions } from "react-native";
import { BoxShadow } from "react-native-shadow";
import { BlurView } from "expo-blur";
import Success from "../components/Success";
import Loading from "./Loading";
import firebase from "./Firebase"
import { connect } from "react-redux"
import { AsyncStorage } from 'react-native'

const screenHeight = Dimensions.get("window").height;

class ModalLogin extends React.Component {
  state = {
    email: "",
    password: "",
    iconEmail: require("../assets/icon-email.png"),
    iconPassword: require("../assets/icon-password.png"),
    isSuccessful: false,
    isLoading: false,
    top: new Animated.Value(screenHeight),
    scale: new Animated.Value(1.3),
    translateY: new Animated.Value(0)
  };

  componentDidMount() {
    this.retrieveName();
  }

  componentDidUpdate() {
    if(this.props.action === 'openLogin') {
      Animated.timing(this.state.top, {
        useNativeDriver: false,
        toValue: 0,
        duration: 0
      }).start();
      Animated.spring(this.state.scale, { toValue: 1, useNativeDriver: false }).start();
      Animated.spring(this.state.translateY, { toValue: 0, duration: 0, useNativeDriver: false }).start();
    }
    if(this.props.action === 'closeLogin') {
      setTimeout( () => {
        Animated.timing(this.state.top, {
          useNativeDriver: false,
          toValue: screenHeight,
          duration: 0
        }).start();
        Animated.spring(this.state.scale, { toValue: 1.3, useNativeDriver: false }).start();

      },200)
      Animated.spring(this.state.translateY, { toValue: 1000, duration: 800, useNativeDriver: false }).start();
    }
  }

  storeName = async (name) => {
    try {
      await AsyncStorage.setItem("name", name)
    } catch(error) {

    }
  }

  retrieveName = async () => {
    try {
      // basically name stores email
      const name = await AsyncStorage.getItem("name")
      if(name !== null) {
        this.props.updateName(name);
      }
    } catch(error) {

    }
  }

  handleLogin = () => {

    this.setState({isLoading: true})

    Keyboard.dismiss();

    const email = this.state.email;
    const password = this.state.password;

    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      Alert.alert("Error :", error.message)
    })
    .then(response => {
      // console.log(response)
      this.setState({ isLoading: false });

      if(response) {
        this.setState({isSuccessful: true})
    
        Alert.alert('Congrats', "You've logged in successfully")
        this.storeName(response.user.email)
        this.props.updateName(response.user.email)
        setTimeout( () => {
        this.props.closeLogin()
        this.setState({ isSuccessful: false });
    },1000)

      }
    })
  };


  focusEmail = () => {
    this.setState({
      iconEmail: require("../assets/icon-email-animated.gif"),
      iconPassword: require("../assets/icon-password.png"),
    });
  };

  focusPassword = () => {
    this.setState({
      iconEmail: require("../assets/icon-email.png"),
      iconPassword: require("../assets/icon-password-animated.gif"),
    });
  };

  tapBackground = () => {
    Keyboard.dismiss();
    this.props.closeLogin();
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <TouchableWithoutFeedback onPress={this.tapBackground}>
          <BlurView
            tint="dark"
            intensity={100}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          />
        </TouchableWithoutFeedback>
        <AnimatedModal style={{ transform: [
          {
            scale: this.state.scale
          },
          {
            translateY: this.state.translateY
          }
        ] }}>
          <Logo source={require("../assets/logo-dc.png")} />
          <Text>Start Learning. Access Pro Content</Text>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(email) => this.setState({ email })}
            onFocus={this.focusEmail}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
            onFocus={this.focusPassword}
          />
          <IconEmail source={this.state.iconEmail} />
          <IconPassword source={this.state.iconPassword} />
          <TouchableOpacity onPress={this.handleLogin}>
            <Button>
              <ButtonText>Log In</ButtonText>
            </Button>
          </TouchableOpacity>
        </AnimatedModal>
        <Success isActive={this.state.isSuccessful} />
        <Loading isActive={this.state.isLoading} />
      </AnimatedContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalLogin);

function mapStateToProps(state) {
  return {
    action: state.action
  }
}

function mapDispatchToProps(dispatch) {
  return {
    closeLogin:  () => dispatch({type: "CLOSE_LOGIN"}),
    updateName: (name) => dispatch({ type: "UPDATE_NAME", name })
  }
}

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  justify-content: center;
  align-items: center;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);
const Modal = styled.View`
  width: 335px;
  height: 370px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  align-items: center;
`;
const AnimatedModal = Animated.createAnimatedComponent(Modal);
const Logo = styled.Image`
  width: 44px;
  height: 44px;
  margin-top: 50px;
`;
const Text = styled.Text`
  margin-top: 20px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  width: 150px;
  text-align: center;
  color: #b8bece;
`;
const TextInput = styled.TextInput`
  border: 1px solid #dbdfea;
  width: 295px;
  height: 44px;
  border-radius: 10px;
  font-size: 17px;
  color: #3c4560;
  margin-top: 20px;
  padding-left: 44px;
`;
const Button = styled.View`
  background: #5263ff;
  width: 295px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 10px 20px #c2cbff;
  margin-top: 20px;
`;
const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
`;
const IconEmail = styled.Image`
  width: 24px;
  height: 16px;
  position: absolute;
  top: 179px;
  left: 31px;
`;
const IconPassword = styled.Image`
  width: 18px;
  height: 24px;
  position: absolute;
  top: 239px;
  left: 35px;
`;
