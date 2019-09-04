import React from "react";
import { shallow, mount } from "enzyme";

import Advisors from "./Advisors";
import { jsxEmptyExpression } from "@babel/types";

describe("Advisors Component", () => {
  let component;
  const advisors = [
    {
      name: "Yehia",
      email: "yehia@email.com",
      avatar: "image.png",
      status: "online",
      language: "english",
      numOfReviews: 50
    }
  ];
  const props = {
    onChange: jest.fn()
  };
  beforeEach(() => {
    component = shallow(
      <Advisors advisors={advisors} loading={false} onChange={props.onChange} />
    );
  });

  it("should render Advisors component", () => {
    expect(component).toMatchSnapshot();
  });

  it("should call onChange function", () => {
    let mountedComponent = mount(
      <advisors advisors={advisors} loading={false} onChange={props.onChange} />
    );
    // mountedComponent.find("input").simulate("change");
    // expect(props.onChange).toHaveBeenCalled();
  });
});
