// styles
import { useRef } from 'react';
import './InputField.css'

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent<EventTarget>) => void;
}

const InputField = ( { todo, setTodo, handleAdd }: Props ) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form 
      className="input" 
      onSubmit={(e) => {handleAdd(e); 
      inputRef.current?.blur()
      }} >
        <input 
            ref={inputRef}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text" 
            placeholder="Enter a task" 
            className="input__box">
        </input>
        <button 
            className="input__submit" 
            type="submit">
                Go
        </button>
    </form>
  )
}

export default InputField