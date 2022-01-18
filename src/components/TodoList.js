import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getTodosLoading, getCompletedTodos, getIncompleteTodos } from '../redux/selectors'
import { loadTodos, markTodoAsCompletedRequest, removeTodoRequest } from '../redux/thunks'

import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'
import styled from 'styled-components'

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`

const TodoList = ({ completedTodos, incompleteTodos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos()
  }, [startLoadingTodos])

  const loadingMessage = <div>Loading todos...</div>
  const content = (
    <ListWrapper>
      <NewTodoForm />
      <h3>Incomplete:</h3>
      {incompleteTodos.map((todo, index) => <TodoListItem
        key={index}
        todo={todo}
        onRemovePressed={onRemovePressed}
        onCompletedPressed={onCompletedPressed}
                                            />
      )}
      <h3>Completed:</h3>
      {completedTodos.map((todo, index) => <TodoListItem
        key={index}
        todo={todo}
        onRemovePressed={onRemovePressed}
        onCompletedPressed={onCompletedPressed}
                                           />
      )}
    </ListWrapper>
  )
  return isLoading ? loadingMessage : content
}

const mapStateToProps = state => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompletedTodos(state),
  incompleteTodos: getIncompleteTodos(state)
})

const mapDispatchToProps = dispatch => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
