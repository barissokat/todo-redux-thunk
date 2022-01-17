import { connect } from 'react-redux'
import { markTodoAsCompleted, removeTodo } from '../redux/actions'

import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => (
  <div className='list-wrapper'>
    <NewTodoForm />
    {todos.map((todo, index) => <TodoListItem key={index} todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed} />)}
  </div>
)

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  onRemovePressed: text => dispatch(removeTodo(text)),
  onCompletedPressed: text => dispatch(markTodoAsCompleted(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
