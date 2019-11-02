import createProducts from "./createProducts";
import buyProducts from "./buyProducts";
import products from "./products";

export default {
  state: {
    ...createProducts.state,
    ...buyProducts.state,
    ...products
  },
  actions: {
    ...createProducts.actions,
    ...buyProducts.actions
  }
};
