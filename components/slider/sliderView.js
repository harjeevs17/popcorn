import React from "react";
import { View, Image, ScrollView, Text } from "react-native";
import Slider from "./slider";

class Slider_view extends React.Component {
  render() {
    return (
      <>
        <View
          style={{
            height: 200,
            width: 120,
            marginLeft: 20,
            borderWidth: 0.5,
            borderColor: "white",
          }}
        >
          <View style={{ flex: 2 }}>
            <Image
              source={{
                uri: this.props.image,
              }}
              style={{
                resizeMode: "cover",
                height: null,
                width: null,
                flex: 1,
                borderRadius: 10,
              }}
            />
          </View>
          <View style={{ paddingLeft: 10, paddingTop: 10, paddingBottom: 10 }}>
            <Text>{this.props.title}</Text>
          </View>
        </View>
      </>
    );
  }
}
export default Slider_view;
