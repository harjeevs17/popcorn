import React from "react";
import { Text, View, Button } from "react-native";

class Navbar_view extends React.Component {
  handleCLick = () => {
    console.log("you clicked");
  };
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 20,
          position: "relative",
        }}
      >
        <Button onPress={this.handleCLick} title="Movies"></Button>
        <Button title="Books"></Button>
        <Button title="Tv Shows"></Button>
      </View>
    );
  }
}
export default Navbar_view;
