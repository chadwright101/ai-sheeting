"use client";

import {
  createContext,
  useContext,
  Dispatch,
  ReactNode,
  useReducer,
} from "react";

interface Props {
  children: ReactNode;
}

interface ContextProps {
  showName: boolean;
  showMessage: boolean;
  menuToggle: boolean;
  readMore: boolean;
  setShowName: Dispatch<boolean>;
  setShowMessage: Dispatch<boolean>;
  setMenuToggle: Dispatch<boolean>;
  setReadMore: Dispatch<boolean>;
  dispatch: Dispatch<Action>;
}

interface Action {
  type: string;
  payload: boolean;
}

const initialState = {
  showName: false,
  showMessage: false,
  menuToggle: false,
  readMore: false,
};

const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case "SET_SHOW_NAME":
      return { ...state, showName: action.payload };
    case "SET_SHOW_MESSAGE":
      return { ...state, showMessage: action.payload };
    case "SET_MENU_TOGGLE":
      return { ...state, menuToggle: action.payload };
    case "SET_READ_MORE":
      return { ...state, readMore: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const GlobalContext = createContext<ContextProps>({
  showName: false,
  showMessage: false,
  menuToggle: false,
  readMore: false,
  setShowName: () => {},
  setShowMessage: () => {},
  setMenuToggle: () => {},
  setReadMore: () => {},
  dispatch: () => {},
});

export const GlobalContextProvider = ({ children }: Props) => {
  const setShowName = (value: boolean) => {
    dispatch({
      type: "SET_SHOW_NAME",
      payload: value,
    });
  };
  const setMenuToggle = (value: boolean) => {
    dispatch({
      type: "SET_MENU_TOGGLE",
      payload: value,
    });
  };
  const setShowMessage = (value: boolean) => {
    dispatch({
      type: "SET_SHOW_MESSAGE",
      payload: value,
    });
  };
  const setReadMore = (value: boolean) => {
    dispatch({
      type: "SET_READ_MORE",
      payload: value,
    });
  };

  const [{ showName, showMessage, menuToggle, readMore }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        showName,
        showMessage,
        menuToggle,
        readMore,
        setShowName,
        setShowMessage,
        setMenuToggle,
        setReadMore,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
