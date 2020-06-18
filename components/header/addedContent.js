import React from "react";
import { Text, Button, View, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Badge, Icon, withBadge } from "react-native-elements";

const AddedContent = () => {
  const navigation = useNavigation();
  return (
    <View>
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
                "https://lh3.googleusercontent.com/proxy/Rhg8UZ0tADluY4GWSzSNUmryOiLkK7jfYw_JvMQLzq_RbVz_zf2Bwz8u6XF8YmAlHY53OyZWy6rICEOoymE_XJxgsL-J0QDUSsPDcA5ZcGMFwwl5thjeGUxwi2z3lvS1_5LslnzJO5Sz8wo",
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
