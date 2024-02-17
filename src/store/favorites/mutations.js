export default {
  newFavorites: (state, favorite) => state.favorites.push(favorite),
  deleteFavorites: (state, { id, index }) => {
    state.favorites = state.favorites.filter(({ productId }) => productId !== id);
  },
};