<template>
  <div id="app">
    <Header />
    <main>
      <h2>To do Tasks</h2>
      <div v-if="tasks.length === 0" class="empty-message">
        No items available. Please add some!
      </div>

      <div class="item-list">
        <ItemDisplay
          v-for="(task, index) in tasks"
          :key="index"
          :title="task.title"
          :description="task.description"
          @remove="removeTask(index)"
        />
      </div>

      <div class="form-container">
        <input 
          v-model="newTask.title" 
          placeholder="Task Title" 
          class="form-input" 
        />
        <input 
          v-model="newTask.description" 
          placeholder="Task Description" 
          class="form-input" 
        />
        <button 
          @click="addTask" 
          class="add-button">
          Add Task
        </button>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import { ref } from 'vue';

const Header = {
  template: `<header><h1>My Vue App</h1></header>`,
};

const Footer = {
  template: `<footer><p>&copy; 2024 My Vue App</p></footer>`,
};

const ItemDisplay = {
  props: ['title', 'description'],
  template: `
    <div class="item">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <button class="remove-button" @click="$emit('remove')">Remove</button>
    </div>
  `,
};

export default {
  name: 'App',
  components: { Header, Footer, ItemDisplay },
  setup() {
    const tasks = ref([]); 
    const newTask = ref({ title: '', description: '' }); 

    const addTask = () => {
      if (newTask.value.title && newTask.value.description) {
        tasks.value.push({ ...newTask.value });
        newTask.value.title = ''; 
        newTask.value.description = ''; 
      }
    };

    const removeTask = (index) => {
      tasks.value.splice(index, 1);
    };

    return { tasks, newTask, addTask, removeTask };
  },
};
</script>

<style>
#app {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

header {
  background-color: #42b983;
  padding: 10px;
  color: white;
  border-radius: 8px 8px 0 0;
}

footer {
  background-color: #35495e;
  color: white;
  padding: 10px;
  border-radius: 0 0 8px 8px;
}

.item-list {
  margin: 20px 0;
}

.empty-message {
  color: #777;
  font-style: italic;
}

.item {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px 0;
  padding: 15px;
  transition: box-shadow 0.3s;
}

.item:hover {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.remove-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.remove-button:hover {
  background-color: #c0392b;
}

.form-container {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-input {
  padding: 10px;
  margin: 5px;
  width: 80%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.add-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-button:hover {
  background-color: #36a375;
}
</style>
