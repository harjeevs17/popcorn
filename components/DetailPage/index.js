import React, { useState, useEffect } from "react";
import { Text } from "native-base";
import { Image, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { InsertData } from "../../api/index";
import { Rating, AirbnbRating } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

function DetailPage({ route, navigation }) {
  const { params } = route.params;
  const [rating, setrating] = useState(0);

  useEffect(() => {
    if (params.rating) {
      setrating(params.rating);
    } else {
      setrating(0);
    }
  }, []);

  console.log("haha" + params.rating);
  const ratingCompleted = (r) => {
    setrating(r);
    console.log("Update rating ", r);
    console.log("New Update rating ", rating);
  };
  const insertData = async (data, value) => {
    data.status = value;
    data.rating = rating;
    console.log("check", data);
    const result = await InsertData(data);
  };
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
        />
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
        <AirbnbRating
          count={5}
          reviews={[
            "Bad",
            "OK",
            "Hark's Suggestion",
            "Amazing",
            "Dipti's Suggestion",
          ]}
          defaultRating={rating}
          onFinishRating={(rating) => ratingCompleted(rating)}
          size={20}
        />

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View>
            <TouchableOpacity
              onPress={() => {
                insertData(params, 1);
              }}
            >
              <Text>Watched</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                insertData(params, 0);
              }}
            >
              <Text>Wishlist</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: 20 }}></View>
      </View>
    </ScrollView>
  );
}

export default DetailPage;
