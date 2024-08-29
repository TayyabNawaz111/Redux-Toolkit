import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <ul className="space-y-3 max-w-md mt-6 mx-auto">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg p-3 transform hover:scale-105 transition duration-200 ease-in-out"
          >
            <span className="text-base text-white">{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-full shadow-md transform hover:-translate-y-1 transition duration-200 ease-in-out"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
