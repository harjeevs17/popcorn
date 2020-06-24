import React from "react";
import {
  Text,
  FlatList,
  Image,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { Card, CardItem, Content, Right, Icon, Left } from "native-base";
import TopBanner from "../topBanner/topBanner";
import Header_View from "../header/header";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import { FetchMovieData } from "../../api/index";
import { Rating } from "react-native-elements";
import ListView from "../ListView/index";

import { image, no_movie_banner } from "../../assets/images";
class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      query: "",
    };
  }
  async getMovies(query) {
    this.setState({
      data: await FetchMovieData(query),
    });
    console.log(this.state.data);
  }
  getQuery = (query) => {
    console.log("this is the query fucker" + query);
    this.setState({
      query: query,
    });

    this.getMovies(query);
  };
  renderItem(item) {
    //`https://image.tmdb.org/t/p/w500${item.poster_path}`
    return (
      <ListView
        title={item.original_title}
        description={item.overview}
        f_image={
          item.poster_path !== null
            ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
            : image
        }
        b_image={
          item.backdrop_path !== null
            ? `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
            : no_movie_banner
        }
        id={item.id}
        date={item.release_date}
        type="movies"
      />
    );
  }
  render() {
    return (
      <ScrollView>
        <Header_View
          title="Search Movies"
          mode="movies"
          query={this.getQuery}
        />

        <FlatList
          data={this.state.data}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </ScrollView>
    );
  }
}
export default Movies;
