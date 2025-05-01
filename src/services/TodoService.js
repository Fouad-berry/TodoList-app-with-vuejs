import Todo from '../domain/Todo';
import localStorageRepository from '../infrastructure/localStorageRepository';

export default {
  getAll() {
    return localStorageRepository.fetch();
  },
  add(title) {
    const todos = this.getAll();
    const newTodo = new Todo(Date.now(), title);
    todos.push(newTodo);
    localStorageRepository.save(todos);
    return newTodo;
  },
  toggle(id) {
    const todos = this.getAll();
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      todos[index].done = !todos[index].done;
      localStorageRepository.save(todos);
    }
  },
  remove(id) {
    let todos = this.getAll();
    todos = todos.filter(todo => todo.id !== id);
    localStorageRepository.save(todos);
  }
}
