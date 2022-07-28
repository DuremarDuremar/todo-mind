import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import * as reduxHooks from "react-redux";

import { setupStore } from "../store/store";
import List from "../components/list";

jest.mock("react-redux");

// const renderWithRedux = (component: any, {} = {}) => {
//   return {
//     ...render(<Provider store={setupStore()}>{component}</Provider>),
//     setupStore,
//   };
// };

const mokedSelector = jest.spyOn(reduxHooks, "useSelector");
const mokedDispatch = jest.spyOn(reduxHooks, "useDispatch");

describe("Components", () => {
  it("list render", () => {
    mokedSelector.mockReturnValue([
      {
        id: "123",
        text: "action.payload",
        completed: false,
      },
    ]);
    mokedDispatch.mockReturnValue(jest.fn());
    expect(render(<List view={"All"} />)).toMatchSnapshot;
  });
  it("list render", () => {
    mokedSelector.mockReturnValue([
      {
        id: "123",
        text: "action.payload",
        completed: false,
      },
    ]);
    const dispatch = jest.fn();
    mokedDispatch.mockReturnValue(dispatch);
    expect(render(<List view={"All"} />)).toMatchSnapshot;
    fireEvent.click(screen.getByRole("button"));
    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
