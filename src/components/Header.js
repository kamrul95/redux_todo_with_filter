import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import imageDoubleTick from '../images/double-tick.png';
import notesPlus from '../images/notes.png';
import imagePlus from '../images/plus.png';
import { addTodo } from "../redux/todos/actions";

export default function Header() {
  const [input, setInput] = useState('')
  // const todo = useSelector(state=>state.todo)
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input))
    setInput('')
  }
  return (
    <>
      <div>
        <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md" onSubmit={handleSubmit}>
          <img src={notesPlus} className="w-6 h-6" alt="Add todo" />
          <input
            type="text"
            placeholder="Type your todo"
            className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
            value={input}
            onChange={handleInput}
          />
          <button
            type="submit"
            className={`appearance-none w-8 h-8 bg-[url('${imagePlus}')] bg-no-repeat bg-contain`}
            onClick={handleSubmit}
          ></button>
        </form>

        <ul className="flex justify-between my-4 text-xs text-gray-500">
          <li className="flex space-x-1 cursor-pointer">
            <img
              className="w-4 h-4"
              src={imageDoubleTick}
              alt="Complete"
            />
            <span>Complete All Tasks</span>
          </li>
          <li className="cursor-pointer">Clear completed</li>
        </ul>
      </div>
      <hr className="mt-4" />
    </>
  );
}
