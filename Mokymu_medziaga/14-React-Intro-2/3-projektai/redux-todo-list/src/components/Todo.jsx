import { useDispatch } from "react-redux";
import { toggleTodo } from "../actions/actions";
const Todo = ({todo})=> {
    const dispatch = useDispatch()

    const onTodoClick = (id) => {
        dispatch(toggleTodo(id))
    }

    return (
        <>
        {todo && (
            <span onClick={()=> onTodoClick(todo.name)}>{todo.name}
    <input
     type="checkbox" 
     checked={todo.completed}
      disabled/>
{todo.name}
</span>
        
        )}
        </>
    )
}

export default Todo;