import React from "react";
import TodoItem from "./TodoItem";

const ToDoList = ({ todos, toggleTodo }) => {
    //元々objectでtodosは生成されていたのでtodo.idって".id"ってつけないと表示されない
  return todos.map((todo) => (
    <TodoItem todo={todo} key={todo.id} toggleTodo={toggleTodo} />
  ));
};

export default ToDoList;
