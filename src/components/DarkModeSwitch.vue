<template>
    <div>
      <button @click="toggleDarkMode">
        Switch to {{ isDarkMode ? 'Light' : 'Dark' }} Mode
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDarkMode: false,
      };
    },
    methods: {
      toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        if (this.isDarkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      },
    },
  };
  </script>
  
  <style>
  button {
    padding: 10px;
    background-color: #4a5568;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #2d3748;
  }
  </style>
  