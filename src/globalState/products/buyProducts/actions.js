const actions = {
  selectProduct: (store, id) => {
    const currentProducts = store.state.products.products;
    const filterProduct = currentProducts.filter(product => product.id === id);

    store.setState({
      products: {
        ...store.state.products,
        selectedProduct: { ...filterProduct[0] }
      },
      modals: { ...store.state.modals, buyProduct: { showModal: true } }
    });
  }
};

export default actions;
