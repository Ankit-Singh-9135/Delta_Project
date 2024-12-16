import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "Simple Task", id: uuidv4() }]);
  let [newtodo, setNewTodo] = useState("");

  let addNewTask = () => {
    // setTodos([...todos,{task: newtodo, id: uuidv4()}]);
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newtodo, id: uuidv4() }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let upperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add a task"
        value={newtodo}
        onChange={updateTodoValue}
      />
      <br />
      <br />
      <br />

      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <hr />
      <h4>Task Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            &nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button> 
            <button onClick={() => upperCaseOne(todo.id)}>UpperCase</button>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <button onClick={upperCaseAll}>UpperCasr All</button>
    </div>
  );
}