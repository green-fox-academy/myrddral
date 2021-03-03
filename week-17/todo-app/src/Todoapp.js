import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const TodoApp = () => {
  let todoList = [
    {
      text: "Etesd meg a majmot",
      prio: 2,
    },
    {
      text: "Vegyél tejet",
      prio: 1,
    },
  ];

  let doneTodoList = [
    {
      text: "Aludj 8 órát",
      prio: 2,
    },
    {
      text: "Mentorálj másokat",
      prio: 1,
    },
  ];

  const [todos, setTodos] = useState(todoList);
  const [doneTodos, setDoneTodos] = useState(doneTodoList);

  const clickHandler = () => {
      setTodos()
  }

  const deleteTodo = (todos) => {
      for( var i = 0; i < todos.length; i++){ 
                                       
        if ( todos[i] === {todos.text}) { 
            todos.splice(i, 1); 
            i--; 
        }
  }
}

  return (
    <div className="main">
      <h3>Elvégzendő teendők</h3>
      <ul>
        {todos.map((todo) => (
          <div className="todos" key={uuidv4()}>
            <li>
              {todo.prio} {todo.text}{" "}
              <button onClick={clickHandler}>KÉSZ</button>
            </li>
          </div>
        ))}
      </ul>
      <h3>Kész</h3>
      <ul>
        {doneTodos.map((todo) => (
          <div className="doneTodos" key={uuidv4()}>
            <li>
              {todo.prio} {todo.text}{" "}
              <button onClick={clickHandler}>TÖRLÉS</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
