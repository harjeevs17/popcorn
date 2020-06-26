import React, { useState, useEffect } from "react";
import { Text } from "native-base";
import {
  Image,
  View,
  TouchableOpacity,
  Share,
  Vibration,
  ToastAndroid,
} from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { InsertData } from "../../api/index";
import { getRating } from "../../api/index";
import { Rating, AirbnbRating } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import RecommendedContent from "./recommededContent";
import styles from "../../styles";
function DetailPage({ route, navigation }) {
  const { params } = route.params;
  const [rating, setrating] = useState(0);
  const [review, setreview] = useState("");
  const [tempReview, settempReview] = useState("");

  const [showReview, setshowReview] = useState(1);
  useEffect(() => {
    console.log("inside", params);
    const foo = async () => {
      console.log("id we got", params.id);
      let F_Rating = await getRating(params.type, params.id);
      console.log("newB", F_Rating);
      setrating(F_Rating.rating);
      setreview(F_Rating.review);
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
  const showToast = (msg) => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  };
  const insertData = async (data, value) => {
    data.status = value;
    data.rating = rating;
    data.review = review;
    console.log("check77", data);
    const result = await InsertData(data);
    Vibration.vibrate();
    if (value == 1) {
      showToast("Added to library");
    } else if (value == 0) {
      showToast("Added to wishlist");
    }
  };
  const onShare = async () => {
    let mode = "";
    if (params.type === "movies") {
      mode = `https://www.themoviedb.org/movie/${params.id}`;
    }
    if (params.type === "Tvshows") {
      mode = `https://www.themoviedb.org/tv/${params.id}`;
    }
    if (params.type === "books") {
      mode = `https://books.google.co.in/books?id=${params.id}`;
    }
    try {
      let reviewMsg = review ? `\n\n My review is - ${review}` : null;
      const result = await Share.share({
        message: `Check out ${params.title}-- ${mode} ${reviewMsg}`,
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
  const reviewSetter = () => {
    setshowReview(0);
    setreview(tempReview);
  };
  const setReviewBack = () => {
    settempReview(review);
  };
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
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
          {params.description != ""
            ? params.description
            : "No description available"}
        </Text>
        {showReview == 1 ? (
          <View style={{ marginTop: 20 }}>
            <Input
              style={{ paddingTop: 20 }}
              placeholder="Write a review"
              style={styles}
              value={tempReview}
              onChangeText={(value) => settempReview(value)}
              rightIcon={
                <Icon
                  name="arrow-right"
                  type="font-awesome"
                  color="#2089dc"
                  size={24}
                  onPress={() => reviewSetter()}
                />
              }
            />
          </View>
        ) : null}

        <View>
          {review ? (
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Text style={styles.subHeading}>Review</Text>
                <Icon
                  name="edit"
                  type="font-awesome"
                  color="#2089dc"
                  size={20}
                  onPress={() => {
                    setReviewBack();
                  }}
                />
              </View>
              <Text style={styles.text}>{review}</Text>
            </View>
          ) : null}
        </View>
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
            name="plus"
            type="font-awesome"
            color="#2089dc"
            onPress={() => {
              insertData(params, 1);
            }}
          />
          <Icon
            raised
            name="heart"
            type="font-awesome"
            color="#2089dc"
            onPress={() => {
              insertData(params, 0);
            }}
          />
          <Icon
            raised
            name="share-alt"
            type="font-awesome"
            color="#2089dc"
            onPress={onShare}
          />
        </View>
      </View>
      {params.type == "movies" || params.type == "Tvshows" ? (
        <View>
          <RecommendedContent type={params.type} id={params.id} />
        </View>
      ) : null}
      <View style={{ height: 20 }}></View>
    </ScrollView>
  );
}

export default DetailPage;
