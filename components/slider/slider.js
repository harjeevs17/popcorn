import React from "react";
import { Text, ScrollView, Image, View } from "react-native";
import Slider_view from "./sliderView";

class Slider extends React.Component {
  render() {
    return (
      <ScrollView scrollEventThrottle={16}>
        <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "700",
              paddingHorizontal: 20,
            }}
          >
            Recent {this.props.title}
          </Text>
          <View style={{ height: 200, marginTop: 20 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Slider_view
                title="One"
                image="https://image.tmdb.org/t/p/w220_and_h330_face/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
              />
              <Slider_view
                title="One"
                image="https://image.tmdb.org/t/p/w220_and_h330_face/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
              />
              <Slider_view
                title="One"
                image="https://image.tmdb.org/t/p/w220_and_h330_face/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
              />
              <Slider_view
                title="One"
                image="https://image.tmdb.org/t/p/w220_and_h330_face/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
              />
              <Slider_view
                title="One"
                image="https://image.tmdb.org/t/p/w220_and_h330_face/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default Slider;
