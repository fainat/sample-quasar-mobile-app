import { createStore } from "vuex";
import app from './appRouter/index';
import favorites from "./favorites";

export default function() {
  const Store = createStore({
    modules: {
      app,
      favorites
    }
  });

  return Store;
}