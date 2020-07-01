import React, { useState } from "react";
import { Text, FlatList, Modal, TouchableOpacity, Alert } from "react-native";
import { ReturnData, DeleteItem } from "../../api/index";
import ListView from "../ListView/index";
import { Icon, Overlay } from "react-native-elements";
import { Container, Header, Content, Picker, Form, View } from "native-base";
import styles from "../../styles";

class AddedContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      content: [],
      modalVisible: false,
      deletedList: [],
      deletion: false,
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
  showModal(id, mode, itemTitle) {
    const title = "Delete : " + itemTitle;
    const message = "It will be removed from your list";
    const buttons = [
      { text: "Cancel", type: "cancel" },
      {
        text: "Delete",
        onPress: () => this.deleteItem(id, mode),
      },
    ];

    Alert.alert(title, "It will be deleted", buttons);
  }
  async deleteItem(id, type) {
    this.setState({
      deletion: await DeleteItem(id, type),
    });
    this.setState((prevState) => ({
      deletedList: [...prevState.deletedList, id],
    }));
  }

  renderItem(item) {
    return this.state.deletedList.includes(item.id) != true ? (
      <View style={{ flex: 1, flexDirection: "row" }}>
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
        <View style={{ marginTop: 20 }}>
          <Icon
            name="trash"
            type="font-awesome"
            color="#2089dc"
            size={26}
            onPress={() => this.showModal(item.id, this.state.type, item.title)}
          />
        </View>
      </View>
    ) : null;
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
