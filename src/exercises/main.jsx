import React from "react";
import { createContext } from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom";

import UseContextPractice from "./UseContext";

// practice for UseCotext

const jkInfo = {
  name: "jungkook",
  age: 25,
};

//グローバルで使うcontextを生成する(jkInfo)
const JkCodeContext = createContext(jkInfo);

ReactDOM.createRoot(document.getElementedById("root")).render(
  //Providerで囲うことで（valueで共有したいものを書いておく）グローバルで使える
  <JkCodeContext.Provider value={jkInfo}>
    <React.StrictMode>
      <UseContextPractice />
    </React.StrictMode>
  </JkCodeContext.Provider>
);

//exportを忘れずに！
export default JkCodeContext;
