export default {
  // Using navigate as the navigator consumer
  navigate: ({ commit }, navigate) => {
    commit('updatePanelState', navigate.panel);
    commit('updateToolState', navigate.tool);

    // Resetting the Tool Context as an empty Object after using Controller as a navigation
    if (navigate.hasOwnProperty('context')) {
      commit('updateToolContext', navigate.context);
    } else commit('updateToolContext', { });
  },
  // Single State Commands
  updateActivePanelState: ({ commit }, newPanelState) => commit('updatePanelState', newPanelState),
  updateActiveToolState: ({ commit }, newToolState) => {
    commit('updateToolState', newToolState.tool);
    if (newToolState.hasOwnProperty('context')) commit('updateToolContext', newToolState.context);
  },
  // UI Updates
  addFavorites: ({ commit }, newProduct) => commit('saveFavorites', newProduct)
};