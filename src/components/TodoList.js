import { useEffect } from 'react'
import { connect } from 'react-redux'
import { markTodoAsCompleted, removeTodo } from '../redux/actions'
import { loadTodos } from '../redux/thunks'

import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos()
  }, [])

  const loadingMessage = <div>Loading todos...</div>
  const content = (
    <div className='list-wrapper'>
      <NewTodoForm />
      {todos.map((todo, index) => <TodoListItem key={index} todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed} />)}
    </div>
  )
  return isLoading ? loadingMessage : content
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: text => dispatch(removeTodo(text)),
  onCompletedPressed: text => dispatch(markTodoAsCompleted(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
