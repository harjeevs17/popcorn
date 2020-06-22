import React from "react";
import { Text, Button, View, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Badge, Icon, withBadge } from "react-native-elements";

const AddedContent = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "white" }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("AddedContent", {
              params: {
                type: "movies",
              },
            })
          }
        >
          <Avatar
            rounded
            source={{
              uri:
                "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/my-neighbor-totoro-poster-totoro-minimalist-poster-helen-print.jpg",
            }}
            size="large"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("AddedContent", {
              params: {
                type: "Tvshows",
              },
            })
          }
        >
          <Avatar
            rounded
            source={{
              uri:
                "https://i.pinimg.com/originals/8f/48/2e/8f482e9486a8b9876c939733eb653591.jpg",
            }}
            size="large"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("AddedContent", {
              params: {
                type: "books",
              },
            })
          }
        >
          <Avatar
            rounded
            source={{
              uri:
                "https://imgv2-2-f.scribdassets.com/img/word_document/250027035/original/3f2d67dbfe/1591483668?v=1",
            }}
            size="large"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddedContent;
/*<TouchableOpacity
        onPress={() =>
          navigation.navigate("AddedContent", {
            params: {
              type: "movies",
            },
          })
        }
      >
        <Text>Movies</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("AddedContent", {
            params: {
              type: "Tvshows",
            },
          })
        }
      >
        <Text>Tv Shows</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("AddedContent", {
            params: {
              type: "books",
            },
          })
        }
      >
        <Text>Books</Text>
      </TouchableOpacity> */
