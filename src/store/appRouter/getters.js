export default {
  getActivePanel: (state) => state.activePanelState,
  getActiveToolState: (state) => state.activeToolState,

  getProductKinds: (state) => state.productKinds,
  getMainCreditCard: (state) => state.mainCreditCard,

  getFavorites: (state) => state.favorites,
  getProducts: (state) => state.products
};