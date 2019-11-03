import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Buyer from "../Buyer";

Enzyme.configure({ adapter: new Adapter() });

describe("Test for buyer sections", () => {
  it("Load products container div", () => {
    const wrapper = mount(<Buyer />);

    expect(wrapper.find("#products-container")).toHaveLength(1);
  });

  it("Load predefined products", () => {
    const wrapper = mount(<Buyer />);
    expect(wrapper.find(".product").hostNodes()).toHaveLength(2);
  });

  it("Click over a product and display auction modal", () => {
    const wrapper = mount(<Buyer />);

    wrapper
      .find("Card")
      .at(0)
      .simulate("click");

    expect(wrapper.find("#auction-modal").hostNodes()).toHaveLength(1);
  });
});
