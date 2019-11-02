import createProductsState from "../products/createProducts";
const actions = {
  toggleModal: (store, modalName) => {
    const newModalState = !store.state.modals[modalName].showModal;
    store.setState({
      modals: {
        ...store.state.modals,
        [modalName]: { showModal: newModalState }
      }
    });
    createProductsState.actions.cleanForm(store);
  }
};

export default actions;
