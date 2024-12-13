import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdDone } from "react-icons/md";
import { Todo } from './model';

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}



const TodoCard = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="todos__single">
        <span className="todos__single--text">{todo.todo}</span>
        <div>
            <span className="icons">
                <FaEdit />
            </span>
            <span className="icons">
                <MdDelete />
            </span>
            <span className="icons">
                <MdDone />
            </span>
        </div>
    </form>
  )
}

export default TodoCard