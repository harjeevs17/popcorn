import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import Slider from "../slider/slider";
import { fetchRelatedData } from "../../api/index";
import styles from "../../styles";
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
      {data.length != 0 ? (
        <View>
          <Text style={styles.Heading}>Recommendations</Text>
          <Slider data={data} type={props.type} />
        </View>
      ) : null}
    </View>
  );
}
export default RecommendedContent;
