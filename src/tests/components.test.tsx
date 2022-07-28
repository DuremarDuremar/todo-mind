import { render, screen, fireEvent } from "@testing-library/react";
import * as actions from "../store/reducer";
import * as reduxHooks from "react-redux";
import List from "../components/list";
import Form from "../components/form";
import Options from "../components/options";

jest.mock("react-redux");

// const renderWithRedux = (component: any, {} = {}) => {
//   return {
//     ...render(<Provider store={setupStore()}>{component}</Provider>),
//     setupStore,
//   };
// };

const mokedSelector = jest.spyOn(reduxHooks, "useSelector");
const mokedDispatch = jest.spyOn(reduxHooks, "useDispatch");
const mockedToggleTodo = jest.spyOn(actions, "toggleTodo");
const mockedAddTodo = jest.spyOn(actions, "addTodo");
const mockedClearTodo = jest.spyOn(actions, "clearTodo");

describe("Components", () => {
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
    expect(mockedToggleTodo).toHaveBeenCalledWith("123");
  });

  it("form render", () => {
    const dispatch = jest.fn();
    mokedDispatch.mockReturnValue(dispatch);

    expect(render(<Form />)).toMatchSnapshot;
    fireEvent.change(screen.getByLabelText("input"), {
      target: { value: "123" },
    });

    fireEvent.click(screen.getByRole("button"));
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedAddTodo).toHaveBeenCalledWith("123");
  });

  it("options render", () => {
    mokedSelector.mockReturnValue([
      {
        id: "123",
        text: "action.payload",
        completed: false,
      },
    ]);

    const dispatch = jest.fn();
    mokedDispatch.mockReturnValue(dispatch);

    expect(render(<Options view={"All"} setView={() => {}} />)).toMatchSnapshot;
    fireEvent.click(screen.getByRole("button"));
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedClearTodo).toHaveBeenCalled;
  });
});
