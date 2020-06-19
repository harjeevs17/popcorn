import React from "react";
import { Text, ScrollView, Image, View } from "react-native";
import Slider_view from "./sliderView";

class Slider extends React.Component {
  render() {
    const test = this.props.data.map((item) => {
      return <Slider_view title={item.title} image={item.f_image} />;
    });
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
          <View style={{ flex: 1, height: 200, marginTop: 20 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {test}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default Slider;
