import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilterColor, addFilterStatus } from "../redux/filters/actions";

const numberOfTodoLeft = (length) => {
  switch (length) {
    case 0:
      return "No task";
    case 1:
      return "1 task";
    default:
      return `${length} tasks`;
  }
};

export default function Footer() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const todosRemaining = todos.filter((todo) => !todo.completed).length;
  const handleStatus = (status) => {
    dispatch(addFilterStatus(status));
  };

  const { status, colors } = filters;

  const handleColorSelection= (color) => {
    if(colors.includes(color)) {
      dispatch(addFilterColor(color, 'removed'));
    } else {
      dispatch(addFilterColor(color, 'added'))
    }
  }


  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodoLeft(todosRemaining)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === "All" && "font-bold"}`}
          onClick={() => handleStatus("All")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
          onClick={() => handleStatus("Incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Complete" && "font-bold"} `}
          onClick={() => handleStatus("Complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          }`}
          onClick={()=> handleColorSelection('green')}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer  ${
            colors.includes("red") && "bg-red-500"
          }`}
          onClick={()=> handleColorSelection('red')}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer  ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={()=> handleColorSelection('yellow')}
        ></li>
      </ul>
    </div>
  );
}
