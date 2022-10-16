import React, { useState, useRef } from "react";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from "uuid";

const ToDoMain = () => {
  const [todos, setTodos] = useState([]);
  //useState([{初期値のオブジェクト}])って書いてたけどhandleAddTodoで新しくsetTodosで定義し直しているから消してOK。

  const toggleTodo = (id) => {
    //コピーしてあげてる、直接todosの状態変数に変更を与えるのはよろしくないので一旦スプレッド構文でコピーしてあげる
    //immutable
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    //setTodosを更新
    setTodos(newTodos);
  };

  //refで指定した関数：文字列を取得
  const todoNameRef = useRef();

  const handleAddTodo = () => {
    //空だったらreturn(そのまま返されるので実行されない)
    if (name === "") return;
    //ちなcurrentの値はuseRefから取得？されたアタウィにアクセスしてるってこと、コンソール見ればわかる
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => {
      //スプレッド構文の第二引数に新しい値を入れてる
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  //completedがfalseのところは全部クリアされる
  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <div>
      <ToDoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>Add task</button>
      <button onClick={handleClear}>Delete completed tasks</button>
      <div>Tasks: {todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );
};

//filterとfind関数の違いを抑えておこう

export default ToDoMain;
