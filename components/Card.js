import React from "react";
import styled from "styled-components/native";

const Card = (props) => {
  return (
    <Container style={{ elevation: 10 }}>
      <Cover>
        <Image
          source={{
            uri: props.image.url,
          }}
        ></Image>
        <Title>{props.title}</Title>
      </Cover>
      <Content>
        <Logo
          source={{
            uri: props.logo.url,
          }}
        />
        <Wrapper>
          <Caption>{props.caption}</Caption>
          <Subtitle>{props.subtitle}</Subtitle>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Card;

const Container = styled.View`
  background: white;
  width: 315px;
  height: 280px;
  margin: 20px 10px;
  border-radius: 14px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 20px;
  width: 170px;
`;

const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 80px;
`;

const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;

const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 900;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Wrapper = styled.View`
  margin-left: 10px;
`;
