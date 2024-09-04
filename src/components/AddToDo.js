import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

const AddToDo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();

        dispatch(addTodo(input));
        setInput("");
    };

    return (
        <form className="my-24 flex justify-center gap-3">
            <input
                className="bg-slate-200 h-14 text-center rounded-md"
                type="text"
                value={input}
                placeholder="Enter the task"
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                className="bg-blue-300 p-4 rounded-md"
                type="submit"
                onClick={addTodoHandler}
            >
                Add Task
            </button>
        </form>
    );
};

export default AddToDo;
