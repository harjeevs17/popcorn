import React from "react";
import { Text, Image, View } from "react-native";
import { Card, Left, Right, Thumbnail, CardItem, Body } from "native-base";
class TopBanner extends React.Component {
  render() {
    return (
      <View style={{ padding: 10, backgroundColor: "white" }}>
        <Image
          style={{ height: 200, width: null, flex: 1, borderRadius: 10 }}
          source={{
            uri:
              "https://i.pinimg.com/originals/fe/9a/fb/fe9afbe8b357c2f0068b50626fb1e840.jpg",
          }}
        />
      </View>
    );
  }
}
export default TopBanner;
