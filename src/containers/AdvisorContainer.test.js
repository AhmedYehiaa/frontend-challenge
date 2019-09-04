import React from "react";
import { shallow } from "enzyme";

import AdvisorsContainer from "./AdvisorsContainer";

describe("AdvisorsContainer Component", () => {
  let component;

  it("should render advisorsContainer component", () => {
    component = shallow(<AdvisorsContainer />);
    expect(component).toMatchSnapshot();
  });
});
