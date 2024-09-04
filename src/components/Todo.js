import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../redux/slices/todoSlice'

const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const removeTodoHandler = (e, id) => {
        e.preventDefault()
        dispatch(removeTodo(id))
    }
    return (
        <>
            <p className='text-violet-300 text-3xl'>Daily Tasks</p>
            <hr />
            {todos.map((todo) => (
                <div className='flex p-4 my-4 mx-12 gap-3 bg-gray-100 justify-between items-center'>
                    <div key={todo.id}>{todo.text}</div>
                    <button onClick={(e) => removeTodoHandler(e, todo.id)} className='bg-blue-300 p-3 rounded-md'>Delete</button>
                </div>
            ))}
        </>
    )
}

export default Todos
