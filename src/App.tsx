import React, { useState } from 'react'
import './App.css'

// components
import InputField from './components/InputField.tsx'
import { Todo } from './components/model.ts'
import TodoList from './components/TodoList.tsx'

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false} ])
      setTodo('')
    }
  }

  console.log(todos)

  return (
   <div className="App">
      <span className="heading">
        Taskify
      </span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={(e)=>handleAdd(e)}/>
      {/* <TodoList /> */}
      {todos.map((t) =>
        <li key={t.id}>{t.todo}</li>
      )}
   </div>
  )
}

export default App
