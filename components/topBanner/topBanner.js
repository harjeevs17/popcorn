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
              "https://c4.wallpaperflare.com/wallpaper/267/666/423/joker-2019-movie-joker-joaquin-phoenix-movies-dancing-hd-wallpaper-preview.jpg",
          }}
        />
      </View>
    );
  }
}
export default TopBanner;
