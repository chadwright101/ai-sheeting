"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from "react";

interface Props {
  children: ReactNode;
}

interface ContextProps {
  showName: boolean;
  setShowName: Dispatch<SetStateAction<boolean>>;
  showMessage: boolean;
  setShowMessage: Dispatch<SetStateAction<boolean>>;
  showPhone1: boolean;
  setShowPhone1: Dispatch<SetStateAction<boolean>>;
  showPhone2: boolean;
  setShowPhone2: Dispatch<SetStateAction<boolean>>;
  showEmail: boolean;
  setShowEmail: Dispatch<SetStateAction<boolean>>;
}

const ContactContext = createContext<ContextProps>({
  showName: false,
  setShowName: () => {},
  showMessage: false,
  setShowMessage: () => {},
  showPhone1: false,
  setShowPhone1: () => {},
  showPhone2: false,
  setShowPhone2: () => {},
  showEmail: false,
  setShowEmail: () => {},
});

export const ContactContextProvider = ({ children }: Props) => {
  const [showName, setShowName] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone1, setShowPhone1] = useState(false);
  const [showPhone2, setShowPhone2] = useState(false);

  return (
    <ContactContext.Provider
      value={{
        showName,
        setShowName,
        showMessage,
        setShowMessage,
        showPhone1,
        setShowPhone1,
        showPhone2,
        setShowPhone2,
        showEmail,
        setShowEmail,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContactContext = () => useContext(ContactContext);
