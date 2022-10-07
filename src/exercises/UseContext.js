import { useContext } from "react";
import JkCodeContext from "./main";

function UseContextPractice() {
  //こんな形でuseContextとその中に呼び出したい引数を入れることで、元ファイルに入れてたvalueを使うことができる
  const jkInfo = useContext(JkCodeContext);

  return (
    <div>
      <h1>useContext</h1>
      <p>{jkInfo.name}</p>
      <p>{jkInfo.age}</p>
    </div>
  );
}
export default UseContextPractice;
