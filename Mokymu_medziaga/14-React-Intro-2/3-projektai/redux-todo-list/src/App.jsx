import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Filter from './components/Filter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='todo-app'>
      <h1>TODO LIST</h1>
      <AddTodo />
      <TodoList/>
      <Filter />
    </div>
  )
}

export default App
