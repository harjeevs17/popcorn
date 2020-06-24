import React from "react";
import { Text, ScrollView, StyleSheet, RefreshControl } from "react-native";
import Header_View from "./header/header";
import AddedContent from "./header/addedContent";
import TopBanner from "./topBanner/topBanner";
import Slider from "./slider/slider";
import RecommendedContent from "./DetailPage/recommededContent";
import { ReturnData, GetTopMovie } from "../api/index";
import { View } from "native-base";
import styles from "../styles";
import moviebanner from "../assets/movie-banner.jpg";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: [],
      tvData: [],
      bookData: [],
      topMovie: [],
      refreshing: false,
    };
  }
  async getMovies() {
    this.setState({
      movieData: await ReturnData("movies", 1),
      tvData: await ReturnData("Tvshows", 1),
      bookData: await ReturnData("books", 1),
    });
    console.log("this", this.state.topMovie);
  }
  componentDidMount() {
    this.getMovies();
  }
  onRefresh = async () => {
    this.setState({
      movieData: await ReturnData("movies", 1),
      tvData: await ReturnData("Tvshows", 1),
      bookData: await ReturnData("books", 1),
      refreshing: true,
    });
    this.setState({
      refreshing: false,
    });
  };

  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />
        }
      >
        <AddedContent />
        {this.state.movieData.length != 0 ? (
          <View>
            <Text style={styles.Heading}>Recent Movies</Text>
            <Slider data={this.state.movieData} title="Movies" />
          </View>
        ) : null}
        {this.state.bookData.length != 0 ? (
          <View>
            <Text style={styles.Heading}>Recent Books</Text>
            <Slider data={this.state.bookData} title="Books" />
          </View>
        ) : null}
        {this.state.tvData.length != 0 ? (
          <View>
            <Text style={styles.Heading}>Recent Tv Shows</Text>
            <Slider data={this.state.tvData} title="Tv shows" />
          </View>
        ) : null}
      </ScrollView>
    );
  }
}
export default Main;
