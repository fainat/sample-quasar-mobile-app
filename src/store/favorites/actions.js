import axios from "axios";
const URL = 'http://94.158.54.194:9092/api/product';

export default {
  addFavorites: async ({ dispatch, commit, state }, product) => {

    if (!state.favorites.includes(product.productId)) {
      const response = await axios.post(URL, {
        product_type_id: Number(product.index),
        name_uz: product.productId,
        address: "- KEEP EMPTY -",
        cost: 40,
        created_date: 1708136618585
      }, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      await commit('newFavorites', {
        productId: product.productId,
        /**
         * There should storeIndex included on server database, but they are not giving during adding a new items,
         * well we've decided to not to use it.
         * 
         * Issue: #SRV001
         */
        storeIndex: 0
      });
    }

    await dispatch('app/navigate', {
      panel: 'favorite',
      tool: 'favorite'
    }, { root: true });

    // SEEDER
    // const responsev2 = await axios.get(URL);
    // responsev2.data.forEach(async data => {
    //   await axios.delete(URL + '/' + data.id)
    // })
  },
  getFavorites: async ({ commit }) => {
    const response = await axios.get(URL);
    return response.data;
  },
  removeFavorites: async ({ commit }, removeId) => {
    const response = await axios.delete(`${URL}/${removeId}`);
    console.log('removeFavorite', response);
  },
  removeProduct: async ({ state, commit, dispatch }, { id, index }) => {
    /**
     * Disabled caused by the server response with issue: #SRV001
     */
    // const storeIndex = state.favorites[productDeleteIndex].storeIndex

    await commit('deleteFavorites', { id, index });

    // Deleting background of UI responses
    const productsFromServer = await dispatch('getFavorites');
    productsFromServer.forEach(async singleProductToDelete => {
      if (singleProductToDelete.name_uz === id) await dispatch('removeFavorites', singleProductToDelete.id);
    });
  }
};