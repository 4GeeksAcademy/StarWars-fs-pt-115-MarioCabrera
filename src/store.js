export const initialStore = () => {
  return {
    characters: [],
    styles: [],
    favorites:[]
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_favorite':
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      }
    case 'set_personajes':
      return {
        ...store,
        characters: action.payload
      };
    case 'set_styles':
      return {
        ...store,
        styles: action.payload
      };
    default:
      throw Error('Unknown action.');
  }
}
