import React from "react";
import { Text, Button, View, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AddedContent = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
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
      </TouchableOpacity>
    </View>
  );
};

export default AddedContent;
