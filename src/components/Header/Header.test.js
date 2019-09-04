import React from "react";
import { shallow } from "enzyme";

import Header from "./Header";

describe("Header Component", () => {
  let component;

  it("should render header component", () => {
    component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
