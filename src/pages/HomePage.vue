<template>
    <div class="container">
      <h1>📝 Todo List</h1>
      <form @submit.prevent="addTodo">
        <input v-model="newTitle" placeholder="Nouvelle tâche..." />
        <button type="submit">Ajouter</button>
      </form>
  
      <ul>
        <TodoItem
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @toggle="toggleTodo"
          @remove="removeTodo"
        />
      </ul>
    </div>
  </template>
  
  <script>
  import TodoService from '../services/TodoService';
  import TodoItem from '../components/TodoItem.vue';
  
  export default {
    components: { TodoItem },
    data() {
      return {
        newTitle: '',
        todos: []
      };
    },
    mounted() {
      this.todos = TodoService.getAll();
    },
    methods: {
      addTodo() {
        if (this.newTitle.trim() !== '') {
          TodoService.add(this.newTitle);
          this.todos = TodoService.getAll();
          this.newTitle = '';
        }
      },
      toggleTodo(id) {
        TodoService.toggle(id);
        this.todos = TodoService.getAll();
      },
      removeTodo(id) {
        TodoService.remove(id);
        this.todos = TodoService.getAll();
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 500px;
    margin: auto;
    padding: 20px;
  }
  form {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  input[type="text"] {
    flex: 1;
    padding: 8px;
  }
  button {
    padding: 8px 16px;
  }
  </style>
  