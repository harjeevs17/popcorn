import React from "react";
import { Text } from "native-base";
import { Image, View } from "react-native";
import { Button } from "react-native-elements";

import { Rating } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

function DetailPage({ route, navigation }) {
  const { params } = route.params;
  console.log("haha" + params.data);
  return (
    <ScrollView>
      <View>
        <Image
          style={{ height: 200, width: "100%" }}
          source={{
            uri:
              params.b_image !== undefined
                ? params.b_image
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-tYQcfRM__x3x5QzyzcodI_AC4QiW8Crd5Yeo9t-16tUJ6TWE&usqp=CAU",
          }}
        ></Image>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            paddingHorizontal: 20,
            marginTop: 10,
          }}
        >
          {params.title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            paddingHorizontal: 20,
            marginTop: 10,
          }}
        >
          {params.description}
        </Text>
        <Rating showRating style={{ paddingVertical: 10 }} />
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Button style={{ margin: 20 }} title="Watched" />
          <Button style={{ margin: 20 }} title="Whishlist" />
        </View>
        <View style={{ height: 20 }}></View>
      </View>
    </ScrollView>
  );
}

export default DetailPage;
