import React from "react";
import { Text, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TopBanner from "../topBanner/topBanner";
import Header_View from "../header/header";
import { FetchBookData } from "../../api/index";
import ListView from "../ListView/index";
import { image, no_book_banner } from "../../assets/images";
class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      query: "",
    };
  }
  async getBooks(query) {
    this.setState({
      data: await FetchBookData(query),
    });
    console.log(this.state.data);
  }
  getQuery = (query) => {
    console.log("this is the query" + query);
    this.setState({
      query: query,
    });
    this.getBooks(query);
  };
  renderItem(item) {
    //console.log("harkkk", item.imageLinks.thumbnail);
    //`https://image.tmdb.org/t/p/w500${item.poster_path}`
    return (
      <ListView
        title={item.title}
        description={item.description}
        f_image={
          item.imageLinks !== undefined ? `${item.imageLinks.thumbnail}` : image
        }
        b_image={
          item.imageLinks !== undefined
            ? `${item.imageLinks.thumbnail}`
            : no_book_banner
        }
        id={item.id}
        date={item.first_air_date}
        type="books"
      />
    );
  }
  render() {
    return (
      <ScrollView>
        <Header_View title="Search Books" mode="books" query={this.getQuery} />

        <FlatList
          data={this.state.data}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </ScrollView>
    );
  }
}
export default Books;
