import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import Slider from "../slider/slider";
import { fetchRelatedData } from "../../api/index";
function RecommendedContent(props) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchMovie = async (type, id) => {
      console.log("Tio", type);
      let data = await fetchRelatedData(type, id);
      setdata(data);
    };
    fetchMovie(props.type, props.id);
  }, [props.type, props.id]);

  return (
    <View>
      {data != undefined ? <Slider data={data} type={props.type} /> : null}
    </View>
  );
}
export default RecommendedContent;
