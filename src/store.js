export const initialStore = () => {
  return {
    message: null,
    todos: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case "AGREGAR_FAVORITO":
      return {
        ...store,
        favorites: [...store.favorites, action.payload],
      };

    case "QUITAR_FAVORITO":
      return {
        ...store,
        favorites: store.favorites.filter(
          (fav) => `${fav.type}-${fav.id}` !== action.payload
        ),
      };
    default:
      throw Error('Unknown action.');
  }
}
