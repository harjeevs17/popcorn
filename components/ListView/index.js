import React from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import { Rating } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

function ListView(props) {
  console.log("crack", props);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("DetailPage", {
          params: {
            title: props.title,
            description: props.description,
            f_image: props.f_image,
            b_image: props.b_image,
            date: props.date,
            id: props.id,
          },
        })
      }
      style={{
        flex: 1,
        flexDirection: "row",
        marginLeft: 10,
        marginBottom: 5,
      }}
    >
      <Image
        style={{ height: 170, width: 120, margin: 5, borderRadius: 10 }}
        source={{ uri: props.f_image }}
      />
      <View style={{ flex: 1, justifyContent: "center", marginLeft: 5 }}>
        <Text style={{ marginBottom: 7, fontWeight: "700" }}>
          {props.title}
        </Text>
        <Rating
          style={{ alignSelf: "baseline", marginBottom: 7 }}
          imageSize={20}
          readonly
          startingValue={2}
        />
        <Text>{props.date}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ListView;
