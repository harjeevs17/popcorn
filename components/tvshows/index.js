import React from "react";
import { Text, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TopBanner from "../topBanner/topBanner";
import Header_View from "../header/header";
import { FetchTvData } from "../../api/index";
import ListView from "../ListView/index";
class Tvshows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      query: "",
    };
  }
  async getTvshows(query) {
    this.setState({
      data: await FetchTvData(query),
    });
    console.log(this.state.data);
  }
  getQuery = (query) => {
    console.log("this is the query" + query);
    this.setState({
      query: query,
    });
    this.getTvshows(query);
  };
  renderItem(item) {
    //`https://image.tmdb.org/t/p/w500${item.poster_path}`
    return (
      <ListView
        title={item.name}
        description={item.overview}
        f_image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        b_image={
          item.backdrop_path !== null
            ? `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
            : null
        }
        id={item.id}
        date={item.first_air_date}
        type="Tvshows"
      />
    );
  }
  render() {
    return (
      <ScrollView>
        <Header_View
          title="Search Tv Shows"
          mode="tvshows"
          query={this.getQuery}
        />
        <TopBanner />
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </ScrollView>
    );
  }
}
export default Tvshows;
