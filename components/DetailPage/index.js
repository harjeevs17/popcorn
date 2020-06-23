import React, { useState, useEffect } from "react";
import { Text } from "native-base";
import { Image, View, TouchableOpacity, Share } from "react-native";
import { Button, Icon } from "react-native-elements";
import { InsertData } from "../../api/index";
import { getRating } from "../../api/index";
import { Rating, AirbnbRating } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import RecommendedContent from "./recommededContent";

function DetailPage({ route, navigation }) {
  const { params } = route.params;
  const [rating, setrating] = useState(0);

  useEffect(() => {
    console.log("inside", params);
    const foo = async () => {
      console.log("id we got", params.id);
      let F_Rating = await getRating(params.type, params.id);
      setrating(F_Rating);
    };
    foo();
    if (params.rating) {
      setrating(params.rating);
    } else {
      setrating(0);
    }
  }, [params.id]);

  console.log("haha" + params.rating);
  const ratingCompleted = (r) => {
    setrating(r);
    console.log("Update rating ", r);
    console.log("New Update rating ", rating);
  };
  const insertData = async (data, value) => {
    data.status = value;
    data.rating = rating;
    console.log("check77", data);
    const result = await InsertData(data);
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Check it out-- https://www.themoviedb.org/movie/429617",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert("Could not send");
    }
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

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Icon
            raised
            name="heartbeat"
            type="normal"
            color="#f50"
            onPress={() => console.log("hello")}
          />
        </View>
        <Button onPress={onShare} title="Share" />
      </View>
      {params.type == "movies" || params.type == "Tvshows" ? (
        <View>
          <Text>Recommendations</Text>
          <RecommendedContent type={params.type} id={params.id} />
        </View>
      ) : null}
      <View style={{ height: 20 }}></View>
    </ScrollView>
  );
}

export default DetailPage;
