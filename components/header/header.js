import React, { useState } from "react";
import { Text } from "react-native";
import { SearchBar } from "react-native-elements";

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

const Header_View = (props) => {
  const onChange = (value, props) => {
    props.query(value);
    setquery(value);
  };
  const [query, setquery] = useState("");
  return (
    <SearchBar
      containerStyle={{
        backgroundColor: "#FBFBFB",
        borderBottomColor: "transparent",
        borderTopColor: "transparent",
      }}
      inputStyle={{ backgroundColor: "white" }}
      inputContainerStyle={{ backgroundColor: "white" }}
      placeholder="Type Here..."
      onChangeText={(text) => onChange(text, props)}
      value={query}
    />
  );
};

export default Header_View;
/*<Item>
        <Icon name="ios-search" />
        <Input
          onChangeText={(text) => onChange(text, props)}
          placeholder={props.title}
        />
        <Icon name="ios-people" />
      </Item>
      <Button transparent></Button>*/
