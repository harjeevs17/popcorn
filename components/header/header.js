import React from "react";
import { Text } from "react-native";
import {
  Header,
  Left,
  Right,
  Button,
  Icon,
  Body,
  Title,
  Item,
  Input,
} from "native-base";
const onChange = (event, props) => {
  props.query(event.target.value);
};
const Header_View = (props) => {
  return (
    <Header searchBar rounded>
      <Item>
        <Icon name="ios-search" />
        <Input
          onChange={(event) => onChange(event, props)}
          placeholder={props.title}
        />
        <Icon name="ios-people" />
      </Item>
      <Button transparent></Button>
    </Header>
  );
};
export default Header_View;
