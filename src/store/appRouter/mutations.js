export default {
  updatePanelState: (state, panelStateName) => state.activePanelState = panelStateName,

  updateToolState: (state, toolStateName) => state.activeToolState = toolStateName,
  updateToolContext: (state, toolContext) => state.activeToolContext = toolContext,

  saveFavorites: (state, favorite) => state.favorites.push(favorite)
};