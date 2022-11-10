import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./CounterRedux/counterSlice";
// import SignUp from "./exercises/SignUp";
// import Counter from "./exercises/Counter";
// import Form from "./exercises/Form";
// import Api from "./exercises/Api";
// import UseRef from "./exercises/UseRef";
// import SignUpTutorial from "./exercises/SignUpTutorial";
// import Api2 from "./exercises/Api2";
// import Accordion from "./exercises/Accordion";
// import UseContextPractice from "./exercises/UseContext";
// import ToDoMain from "./exercises/todoList/ToDoMain";

// //Accordionの親コンポーネント
// const items = [
//   { title: "What is React?", content: "React is the cool JS library" },
//   { title: "Why use React?", content: "Because it's cool" },
//   { title: "How do you use React?", content: "Still learning" },
// ];

// export default () => {
//   return <div>{/* <UseReducer /> */}</div>;
// };

function App() {
  //useSelectorでvalueにアクセスするよ
  const count = useSelector((state) => state.counter.value);
  //通知を出す
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div className="App">
      <h1>count: {count}</h1>
      <input onChange={(e) => setIncrementAmount(e.target.value)} value={incrementAmount}/>
      <button onClick={() => dispatch(increment())}>＋</button>
      <button onClick={() => dispatch(decrement())}>−</button>
      <button
        onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
      >
        追加！
      </button>
    </div>
  );
}

export default App;
