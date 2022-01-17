import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'

const TodoList = ({ todos = [] }) => (
  <div className='list-wrapper'>
    <NewTodoForm />
    {todos.map((todo, index) => <TodoListItem key={index} todo={todo} />)}
  </div>
)

export default TodoList
