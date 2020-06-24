import React, { useState } from "react";
import { Text, FlatList } from "react-native";
import { ReturnData } from "../../api/index";
import ListView from "../ListView/index";
import {
  Container,
  Header,
  Content,
  Icon,
  Picker,
  Form,
  View,
} from "native-base";

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
      content: await ReturnData(type, 1),
    });
    console.log("we got stuff", this.state.content);
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
        f_image={item.f_image}
        b_image={item.b_image}
        id={item.id}
        date={item.first_air_date}
        rating={item.rating}
        type={this.state.type}
      />
    );
  }

  onValueChange = async (value) => {
    console.log("value changed", value);
    this.setState({
      content: await ReturnData(this.state.type, value),
    });
  };
  render() {
    return (
      <View>
        <Form>
          <Picker
            mode="dropdown"
            placeholder="Select One"
            placeholderStyle={{ color: "#2874F0" }}
            note={false}
            onValueChange={this.onValueChange}
          >
            <Picker.Item label="Select an option" enabled={false} />
            <Picker.Item label="Watched" value="1" />
            <Picker.Item label="Wishlist" value="0" />
          </Picker>
        </Form>
        <FlatList
          data={this.state.content}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </View>
    );
  }
}

export default AddedContent;
