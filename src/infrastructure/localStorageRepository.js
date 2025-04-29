const STORAGE_KEY = 'todos';

export default {
  fetch() {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    return data;
  },
  save(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
}
