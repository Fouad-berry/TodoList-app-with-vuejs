<template>
    <li class="todo-item">
      <input type="checkbox" :checked="todo.done" @change="$emit('toggle', todo.id)" />
      <span :class="{ done: todo.done }">{{ todo.title }}</span>
      <button @click="$emit('remove', todo.id)">🗑️</button>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      todo: Object
    }
  }
  </script>
  
  <style scoped>
  .done {
    text-decoration: line-through;
  }
  .todo-item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 5px;
  }
  </style>
  