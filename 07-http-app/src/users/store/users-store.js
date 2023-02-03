import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async() => {
  // throw new Error("No implemented");
  await loadUsersByPage(state.currentPage + 1);
};

const loadPreviousPage = async () => {
  throw new Error("No implemented");
};

// TODO: implementar
const onUserChanged = () => {
  throw new Error("No implemented");
};

const reloadPage = async () => {
  throw new Error("No implemented");
};

export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,

  getUser: () => [...state.users],
  getCurrentPage: () => state.currentPage,
};
