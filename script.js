Vue.createApp({
  data() {
    return {
      todos: [
        {
          id: 1,
          description: "Test-open",
          done: false,
        },
        {
          id: 2,
          description: "test2-done",
          done: true,
        },
      ],

      filterSelector: "all",

      newTodo: "",
    };
  },
  computed: {
    filteredTodos() {
      if (this.filterSelector === "open") {
        return this.todos.filter((item) => !item.done);
      } else if (this.filterSelector === "done") {
        return this.todos.filter((item) => item.done);
      } else if (this.filterSelector === "all") {
        return this.todos;
      }
    },
  },

  methods: {
    addTodo() {
      if (this.newTodo.length >= 5) {
        this.todos.push({
          id: +new Date(),
          description: this.newTodo,
          done: false,
        });
        this.newTodo = "";
      }
    },

    checkboxHandler(todo, event) {
      const todoIndex = this.todos.findIndex((x) => x.id === todo.id);
      if (todoIndex !== -1) {
        if (event.target.checked) {
          this.todos[todoIndex].done = true;
        } else {
          this.todos[todoIndex].done = false;
        }
      }
    },

    removeDoneTodos() {
      this.todos = this.todos.filter((todo) => !todo.done);
    },
  },
}).mount("#app");
