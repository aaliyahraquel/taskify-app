import { TodoReducer, Todo, Actions } from './toDoReducer'


describe('TodoReducer', () => {
  it('adds a new todo', () => {
    const state: Todo[] = []
    const action: Actions = { type: 'add', payload: 'Test task' }
    const result = TodoReducer(state, action)
    expect(result).toHaveLength(1)
    expect(result[0].todo).toBe('Test task')
    expect(result[0].isDone).toBe(false)
  })

  it('removes a todo', () => {
    const state: Todo[] = [
      { id: 1, todo: 'Task 1', isDone: false },
      { id: 2, todo: 'Task 2', isDone: false }
    ]
    const action: Actions = { type: 'remove', payload: 1 }
    const result = TodoReducer(state, action)
    expect(result).toHaveLength(1)
    expect(result[0].id).toBe(2)
  })

  it('toggles isDone', () => {
    const state: Todo[] = [{ id: 1, todo: 'Task 1', isDone: false }]
    const action: Actions = { type: 'done', payload: 1 }
    const result = TodoReducer(state, action)
    expect(result[0].isDone).toBe(true)
  })

  it('edits a todo', () => {
    const state: Todo[] = [{ id: 1, todo: 'Task 1', isDone: false }]
    const action: Actions = { type: 'edit', payload: { id: 1, todo: 'Updated Task' } }
    const result = TodoReducer(state, action)
    expect(result[0].todo).toBe('Updated Task')
  })
})