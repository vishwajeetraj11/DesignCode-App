import React from "react";
import styled from "styled-components/native";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    name: state.name,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: (name) =>
      dispatch({
        type: "UPDATE_NAME",
        name,
      }),
  };
}

class Avatar extends React.Component {
  state = {
    photo: "https://share.getcloudapp.com/items/E0unW8WZ/download",
  };

  componentDidMount() {
    // API does'nt work
    fetch("https://uifaces.co/api?limit=1&random", {
      headers: new Headers({
        "X-API-KEY": "8261D60C-C5314F0F-A4E0E7A4-2CF5595D",
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          photo: response[0].photo,
        });

        this.props.updateName(response[0].name);
      });
  }

  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

// export default Avatar;

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  margin-left: 20px;
  top: 3px;
  left: 0;
`;
