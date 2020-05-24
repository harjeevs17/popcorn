import React from "react";
import { Text } from "react-native";
import { Header, Left, Right, Button, Icon, Body, Title } from "native-base";

const Header_View = () => {
  return (
    <Header
      style={{
        backgroundColor: "white",
        color: "black",
        borderBottomColor: "white",
        border: 10,
      }}
    >
      <Left>
        <Button
          transparent
          onPress={() => this.props.navigation.navigate("DrawerOpen")}
        >
          <Icon style={{ color: "black" }} name="menu" />
        </Button>
      </Left>
      <Body>
        <Title style={{ color: "black" }}>Content</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon style={{ color: "black" }} name="search" />
        </Button>
      </Right>
    </Header>
  );
};
export default Header_View;
