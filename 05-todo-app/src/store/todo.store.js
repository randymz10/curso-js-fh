import { Todo } from "../todos/models/todo.model";

const Filters = {
  All: "all",
  Completed: "Completed",
  Pending: "Pending",
};

const state = {
  todos: [
    new Todo("Piedra del alma"),
    new Todo("Piedra del infinito"),
    new Todo("Piedra del tiempo"),
  ],
  filter: Filters.All,
};

const initStore = () => {
  console.log(state);
  console.log("InitStore");
};

const loadStore = () => {
  throw Error("Not implemented");
};

/**
 *
 * @param {String} description
 */
const addTodo = (description) => {
  throw Error("Not implemented");
};

const todoToggle = (todoId) => {
  throw Error("Not implemented");
};

const deleteTodo = (todoId) => {
  throw Error("Not implemented");
};

const deleteCompleted = () => {
  throw Error("Not implemented");
};

const setFilter = () => {
  throw Error("Not implemented");
};

const getCurrentFuilter = () => {
  throw Error("Not implemented");
};

export default {
  initStore,
  addTodo,
  todoToggle,
  deleteTodo,
  deleteCompleted,
  setFilter,
  getCurrentFuilter,
};
