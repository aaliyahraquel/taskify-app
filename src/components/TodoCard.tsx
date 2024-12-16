import React, { useEffect, useRef, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdDone } from "react-icons/md";
import { Todo } from './model';

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}



const TodoCard = ({ todo, todos, setTodos }: Props) => {

    const [edit, setEdit] = useState<boolean>(false)    
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDone = (id: number) => {
        setTodos(todos.map( (todo) => todo.id === id? { ...todo, isDone: !todo.isDone } : todo))
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleEdit = (e:React.FormEvent, id:number) => {
        e.preventDefault()
        setTodos(todos.map((todo) => todo.id === id? {...todo, todo: editTodo}: todo))
        setEdit(false)
    }

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>

        {edit ? (
            <input 
            ref={inputRef}            
            value={editTodo} 
            onChange={(e) => setEditTodo(e.target.value)} 
            className="todos__single--text"/>
        ): todo.isDone ? (
            <s className="todos__single--text">{todo.todo}</s>
        ): (
            <span className="todos__single--text">{todo.todo}</span>
        )}

        <div>
            <span className="icons" onClick={()=> !edit && !todo.isDone? setEdit(!edit): edit}
            >
                <FaEdit />
            </span>
            <span className="icons">
                <MdDelete onClick={()=> handleDelete(todo.id)}/>
            </span>
            <span className="icons">
                <MdDone onClick={()=> handleDone(todo.id)}/>
            </span>
        </div>
    </form>
  )
}

export default TodoCard