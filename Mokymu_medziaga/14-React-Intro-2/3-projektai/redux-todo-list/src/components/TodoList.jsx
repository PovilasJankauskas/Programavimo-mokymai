import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = ()=> {
    const stateValue = useSelector((state) =>state)
    const todos = [
        { id: 1, name: 'nupirk', completed: true},
        { id: 2, name: 'nuplauk', completed: true},
        { id: 3, name: 'išsiurbk', completed: false},
        { id: 4, name: 'sportuok', completed: true},
        { id: 5, name: 'tingėk', completed: true},
    ]

    const printState =()=> {
        console.log(stateValue)

    }
    return (
        
        <ul className="todo-list"> 
            {todos.map(todo => (
                <li key={todo.id}>
                <Todo todo={todo} />
                </li>
                
            ))}
          <li>
            <button onClick={printState} > print state</button>
          </li>
             </ul>
    )
}

export default TodoList;