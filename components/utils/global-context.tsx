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
  showPhone1: boolean;
  showPhone2: boolean;
  showEmail: boolean;
  menuToggle: boolean;
  setShowName: Dispatch<boolean>;
  setShowMessage: Dispatch<boolean>;
  setShowPhone1: Dispatch<boolean>;
  setShowPhone2: Dispatch<boolean>;
  setShowEmail: Dispatch<boolean>;
  setMenuToggle: Dispatch<boolean>;
  dispatch: Dispatch<Action>;
}

interface Action {
  type: string;
  payload: boolean;
}

const initialState = {
  showName: false,
  showMessage: false,
  showPhone1: false,
  showPhone2: false,
  showEmail: false,
  menuToggle: false,
};

const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case "SET_SHOW_NAME":
      return { ...state, showName: action.payload };
    case "SET_SHOW_MESSAGE":
      return { ...state, showMessage: action.payload };
    case "SET_SHOW_PHONE_1":
      return { ...state, showPhone1: action.payload };
    case "SET_SHOW_PHONE_2":
      return { ...state, showPhone2: action.payload };
    case "SET_SHOW_EMAIL":
      return { ...state, showEmail: action.payload };
    case "SET_MENU_TOGGLE":
      return { ...state, menuToggle: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const GlobalContext = createContext<ContextProps>({
  showName: false,
  showMessage: false,
  showPhone1: false,
  showPhone2: false,
  showEmail: false,
  menuToggle: false,
  setShowName: () => {},
  setShowMessage: () => {},
  setShowPhone1: () => {},
  setShowPhone2: () => {},
  setShowEmail: () => {},
  setMenuToggle: () => {},
  dispatch: () => {},
});

export const GlobalContextProvider = ({ children }: Props) => {
  const setShowName = (value: boolean) => {
    dispatch({
      type: "SET_SHOW_NAME",
      payload: value,
    });
  };
  const setShowPhone1 = (value: boolean) => {
    dispatch({
      type: "SET_SHOW_PHONE_1",
      payload: value,
    });
  };
  const setShowPhone2 = (value: boolean) => {
    dispatch({
      type: "SET_SHOW_PHONE_2",
      payload: value,
    });
  };
  const setShowEmail = (value: boolean) => {
    dispatch({
      type: "SET_SHOW_EMAIL",
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

  const [
    { showName, showMessage, showPhone1, showPhone2, showEmail, menuToggle },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        showName,
        showMessage,
        showPhone1,
        showPhone2,
        showEmail,
        menuToggle,
        setShowName,
        setShowMessage,
        setShowPhone1,
        setShowPhone2,
        setShowEmail,
        setMenuToggle,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
