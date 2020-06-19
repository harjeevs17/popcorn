import React from "react";
import { Text, ScrollView } from "react-native";
import Header_View from "./header/header";
import AddedContent from "./header/addedContent";
import TopBanner from "./topBanner/topBanner";
import Slider from "./slider/slider";
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
      movieData: await ReturnData("movies"),
      tvData: await ReturnData("Tvshows"),
      bookData: await ReturnData("books"),
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
        <Slider data={this.state.movieData} title="Movies" />
        <Slider data={this.state.bookData} title="Books" />
        <Slider data={this.state.tvData} title="Tv shows" />
      </ScrollView>
    );
  }
}
export default Main;
