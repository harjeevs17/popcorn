import React, { useState } from "react";
import { Text, FlatList } from "react-native";
import { ReturnData } from "../../api/index";
import ListView from "../ListView/index";
class AddedContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      content: [],
    };
  }
  componentDidMount() {
    const type = this.props.route.params.params.type;
    if (type === "movies") {
      this.stateSetter(type);
    }
    if (type === "Tvshows") {
      this.stateSetter(type);
    }
    if (type === "books") {
      this.stateSetter(type);
    }
    console.log("state", type);
    this.getContent(type);
  }

  async getContent(type) {
    console.log("conntent", type);
    this.setState({
      content: await ReturnData(type),
    });
    console.log(this.state.content);
  }

  stateSetter = (type) => {
    this.setState({
      type: type,
    });
  };
  renderItem(item) {
    return (
      <ListView
        title={item.title}
        description={item.description}
        f_image={item.image}
        id="100"
        date={item.first_air_date}
      />
    );
  }

  render() {
    return (
      <FlatList
        data={this.state.content}
        renderItem={({ item }) => this.renderItem(item)}
      />
    );
  }
}

export default AddedContent;
