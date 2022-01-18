import { createSelector } from 'reselect'

export const getTodos = state => state.todos.data
export const getTodosLoading = state => state.todos.isLoading

export const getIncompleteTodos = createSelector(
  getTodos,
  todos => todos.filter(todo => !todo.isCompleted)
)

export const getCompletedTodos = createSelector(
  getTodos,
  todos => todos.filter(todo => todo.isCompleted)
)

// Bu şekilde bir tanımlama yaparsak, uygulama her derlenişinde fonksiyon tekrar tekrar çalışacaktır.
// export const getCompletedTodos2 = state => {
//   const { data: todos } = state.todos
//   return todos.filter(todo => todo.isCompleted)
// }
