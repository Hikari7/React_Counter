import React, { useState, useEffect } from "react";
import axios from "axios";

const GetJsonHolder = () => {
  // const [term, setTerm] = useState("");
  const [results, setResult] = useState([]);

  // console.log(results);

  useEffect(() => {
    const fetchDatas = async () => {
      const datas = await axios.get("https:jsonplaceholder.typicode.com/users");

      setResult(datas.data);
      // setResult(datas.data[0].name);
    };
    fetchDatas();
  }, []);

  useEffect(() => console.log(results), [results]);

  const renderedResults = results.map((result) => {
    return (
      <div className="content">
        <div className="item">{result.name}</div>
        <div className="item">{result.username}</div>
        <div className="item">{result.email}</div>
      </div>
    );
  });

  return (
    <div>
      <form>
        <label>This is a imformation list </label>
      </form>
      <div>{renderedResults}</div>
    </div>
  );
};

export default GetJsonHolder;
