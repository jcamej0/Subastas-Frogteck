import state from "./state";

const actions = {
  updateName: (store, event) => {
    const newName = event.target.value;
    store.setState({
      products: {
        ...store.state.products,
        newProduct: { ...store.state.products.newProduct, name: newName }
      }
    });
  },
  updateMinPrice: (store, event) => {
    const minPrice = event.target.value;
    if (minPrice && /[0-9]+/.test(minPrice) === false) {
      return;
    }

    const newMinPrice = !minPrice ? "" : parseInt(minPrice);
    store.setState({
      products: {
        ...store.state.products,
        newProduct: {
          ...store.state.products.newProduct,
          minPrice: newMinPrice
        }
      }
    });
  },
  addNewProduct: store => {
    const newProduct = {
      name: store.state.products.newProduct.name,
      minPrice: store.state.products.newProduct.minPrice,
      id: store.state.products.products.length + 1
    };

    let productListCopy = [...store.state.products.products];
    productListCopy.push(newProduct);
    store.setState({
      products: {
        ...store.state.products,
        products: productListCopy,
        newProduct: state.newProduct
      }
    });
  },
  cleanForm: store => {
    store.setState({
      products: { ...store.state.products, newProduct: state.newProduct }
    });
  }
};

export default actions;
