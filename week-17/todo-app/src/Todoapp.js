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

  // sort lists by priority
  let sortedTodos = todos.sort((a, b) => (a.prio > b.prio ? 1 : -1));
  let sortedDoneTodos = doneTodos.sort((a, b) => (a.prio > b.prio ? 1 : -1));

  const deleteTodo = (e) => {
    if (doneTodos.length === 1) {
      setDoneTodos([]);
    } else {
      let newList = [];
      doneTodos.forEach((element) => {
        if (!e.target.parentElement.textContent.includes(element.text)) {
          newList.push(element);
          setDoneTodos(newList); 
        }
      });
    }
  };

  const doneTodo = (e) => {
    // let newList = doneTodos;
    // todos.forEach((element) => {
    //   if (e.target.parentElement.textContent.includes(element.text)) {
    //     newList.push(element);
    //     setDoneTodos(newList);
    //   }
    // });
  };

  return (
    <div className="main">
      <h3>Elvégzendő teendők</h3>
      <ul>
        {sortedTodos.map((todo) => (
          <li key={uuidv4()}>
            {todo.prio} {todo.text}{" "}
            <button onClick={doneTodo} value="done">
              KÉSZ
            </button>
          </li>
        ))}
      </ul>
      <h3>Kész</h3>
      <ul>
        {sortedDoneTodos.map((todo) => (
          <li key={uuidv4()}>
            {todo.prio} {todo.text}{" "}
            <button onClick={deleteTodo} value="delete">
              TÖRLÉS
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
