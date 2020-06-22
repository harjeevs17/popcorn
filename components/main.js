import React from "react";
import { Text, ScrollView } from "react-native";
import Header_View from "./header/header";
import AddedContent from "./header/addedContent";
import TopBanner from "./topBanner/topBanner";
import Slider from "./slider/slider";
import RecommendedContent from "./DetailPage/recommededContent";
import { ReturnData } from "../api/index";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: [],
      tvData: [],
      bookData: [],
    };
  }
  async getMovies() {
    this.setState({
      movieData: await ReturnData("movies", 1),
      tvData: await ReturnData("Tvshows", 1),
      bookData: await ReturnData("books", 1),
    });
  }
  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <ScrollView>
        <TopBanner />

        <AddedContent />
        <RecommendedContent />
        {this.state.movieData.length != 0 ? (
          <Slider data={this.state.movieData} title="Movies" />
        ) : null}
        {this.state.bookData.length != 0 ? (
          <Slider data={this.state.bookData} title="Books" />
        ) : null}
        {this.state.tvData.length != 0 ? (
          <Slider data={this.state.tvData} title="Tv shows" />
        ) : null}
      </ScrollView>
    );
  }
}
export default Main;
