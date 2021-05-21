import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosPractise = () => {
  const { data, setData } = useState([]);
  
    useEffect(()=>{
        const url =
        "https://newsapi.org/v2/everything?q=tesla&from=2021-04-21&sortBy=publishedAt&apiKey=ccf5ab0c03404bd6bf16d40f5126e13a";
        axios(url)
        .then(data =>console.log(data))
    },[])
  return <div></div>;
};

export default AxiosPractise;
