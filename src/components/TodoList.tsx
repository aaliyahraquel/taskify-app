import './styles.css'
import TodoCard from './TodoCard'
import { Todo } from './toDoReducer'

export interface TodoListProps {
  todos: Todo[]
  dispatch: React.Dispatch<any>
}

const TodoList: React.FC<TodoListProps> = ({todos, dispatch})=> {

  return (
    <div className="todo-list-container">
      <div className="todos"> 
        <span className="todos__heading">Your tasks</span>
        {todos && todos.map((todo) => (
          <TodoCard 
          todo={todo} 
          key={todo.id} 
          todos={todos} 
          dispatch={dispatch}/>
        ))}
      </div>

      <div className="todos remove">
        <span className="todos__heading">Completed tasks</span>
        {todos && todos.map((todo) => (
          <TodoCard 
          todo={todo} 
          key={todo.id} 
          todos={todos} 
          dispatch={dispatch}/>
        ))}
      </div>
    </div>
  )
}

export default TodoList