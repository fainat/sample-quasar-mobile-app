export const forwardProductWithIndex = async (store, { index, productId }) => {
  await store.dispatch('app/updateActivePanelState', 'details');
  await store.dispatch('app/updateActiveToolState', {
    context: {
      product: {
        index,
        name: productId
      }
    },
    tool: 'details'
  });
};