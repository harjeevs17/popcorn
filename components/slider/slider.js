import React from "react";
import { Text, ScrollView, Image, View, TouchableOpacity } from "react-native";
import Slider_view from "./sliderView";

import { useNavigation } from "@react-navigation/native";

const Slider = (props) => {
  const navigation = useNavigation();

  const test = props.data.map((item) => {
    var type1 = "";
    if (props.title == "Movies") {
      type1 = "movies";
    } else if (props.title == "Books") {
      type1 = "books";
    } else if (props.title == "Tv shows") {
      type1 = "Tvshows";
    }
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("DetailPage", {
            params: {
              title: item.title,
              description: item.description,
              f_image: item.f_image,
              b_image: item.b_image,
              date: item.date,
              id: item.id,
              type: type1,
              rating: item.rating,
            },
          })
        }
      >
        <Slider_view title={item.title} image={item.f_image} />
      </TouchableOpacity>
    );
  });
  return (
    <ScrollView scrollEventThrottle={16}>
      <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            paddingHorizontal: 20,
          }}
        >
          Recent {props.title}
        </Text>
        <View style={{ flex: 1, height: 200, marginTop: 20 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {test}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default Slider;

/*
 */
