import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import Slider from "../slider/slider";
import { fetchRelatedMovies } from "../../api/index";
function RecommendedContent(props) {
  console.log("Bitch", props.id);
  const id = 299534;
  const type = "movies";
  const [data, setdata] = useState([]);
  useEffect(() => {
    setdata(fetchMovie());
  }, []);
  const fetchMovie = async () => {
    let data = await fetchRelatedMovies(299537);
    return data;
  };
  console.log("qwe", data);
  return <View></View>;
}
export default RecommendedContent;
/** <Slider data={data} title="Movies" /> */
