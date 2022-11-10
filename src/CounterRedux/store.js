//どのコンポーネントでも使えるsotre, 状態を管理するもの

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

//storeの中にはreducerが必要なのでSliceで作ったreducerを読み込む
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
