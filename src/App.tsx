import React, { useState, useReducer } from 'react'
import './App.css'

// components
import InputField from './components/InputField.tsx'
import { Todo, TodoReducer } from './components/toDoReducer.ts'
import TodoList from './components/TodoList.tsx'

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('')
  const [todos, dispatch] = useReducer(TodoReducer, [])

  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    if (todo) {
      dispatch({ type: 'add', payload: todo })
      setTodo('')
    }
  }

  return (
   <div className="App">
      <span className="heading">
        Taskify
      </span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={(e)=>handleAdd(e)}/>
      <TodoList todos={todos} dispatch={dispatch}/>
   </div>
  )
}

export default App
