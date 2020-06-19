import React from "react";
import { View, Image, ScrollView, Text } from "react-native";
import Slider from "./slider";

class Slider_view extends React.Component {
  render() {
    return (
      <>
        <View
          style={{
            minWidth: 120,
            minHeight: "100%",
            maxHeight: 170,
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
                height: 200,
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
