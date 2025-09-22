import './styles.css'
import TodoCard from './TodoCard'
import { Todo } from './toDoReducer'

export interface TodoListProps {
  todos: Todo[]
  dispatch: React.Dispatch<any>
}

const TodoList: React.FC<TodoListProps> = ({todos, dispatch})=> {

  return (
    <div className="todos">
        {todos.map((todo) => (
            <TodoCard
                key={todo.id}
                todo={todo}
                todos={todos}
                dispatch={dispatch}
            />
        ))}
        
    </div>
  )
}

export default TodoList
