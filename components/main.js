import React from "react";
import { Text, ScrollView } from "react-native";
import Header_View from "./header/header";
import TopBanner from "./topBanner/topBanner";
import Slider from "./slider/slider";
class Main extends React.Component {
  render() {
    return (
      <ScrollView>
        <Header_View />
        <TopBanner />
        <Slider title="Movies" />
        <Slider title="Books" />
        <Slider title="Tv shows" />
      </ScrollView>
    );
  }
}
export default Main;
