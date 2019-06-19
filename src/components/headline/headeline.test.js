import React, { Component } from "react";
import { shallow } from "enzyme";
import Headline from "./Headline";
import { findByTestAttr } from "./../../../utils/index";

const setUp = (props = {}) => {
  return shallow(<Headline {...props} />);
};

describe("Headline Component", () => {
  describe("Have props", () => {
    let component;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc"
      };
      component = setUp(props);
    });

    it("Should render without errors", () => {
      const wrapper = findByTestAttr(component, "HeadlineComponent");
      expect(wrapper.length).toBe(1);
    });

    it("Should render a H1", () => {
      const h1 = findByTestAttr(component, "header");
      expect(h1.length).toBe(1);
    });

    it("Should render a Desc", () => {
      const desc = findByTestAttr(component, "descWrapper");
      expect(desc.length).toBe(1);
    });
  });

  describe("Have NO props", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });

    it("Should not render", () => {
      const wrapper = findByTestAttr(component, "HeadlineComponent");
      expect(wrapper.length).toBe(0);
    });
  });
});
