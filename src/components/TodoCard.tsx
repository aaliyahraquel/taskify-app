import React, { useEffect, useRef, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdDone } from "react-icons/md";
import { Todo } from './toDoReducer';

type Props = {
    todo: Todo,
    todos: Todo[],
    dispatch: React.Dispatch<any>
}

const TodoCard = ({ todo, dispatch }: Props) => {

    const [edit, setEdit] = useState<boolean>(false)    
    const [editTodo, setEditTodo] = useState<string>(todo.todo)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])


    const handleDone = (id: number) => {
        dispatch({ type: "done", payload: id })
    }

    const handleDelete = (id: number) => {
        dispatch({ type: "remove", payload: id })
    }

    const handleEdit = (e:React.FormEvent, id:number) => {
        e.preventDefault()
        dispatch({ type: "edit", payload: {id, todo: editTodo} })
        setEdit(false)

        const inputRef = useRef<HTMLInputElement>(null);
        useEffect(() => {
            inputRef.current && inputRef.current.focus()
        }, [edit]);
    }

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
            <span className="icons" onClick={() => !edit && !todo.isDone? setEdit(!edit): edit}
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