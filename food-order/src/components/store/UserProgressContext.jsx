import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "",
  openCart: () => {},
  hideCart: () => {},
  openCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [progressContext, setProgressContext] = useState("");

  function handleOpenCart() {
    setProgressContext("cart");
  }

  function handleHideCart() {
    setProgressContext("");
  }

  function handleOpenCheckout() {
    setProgressContext("checkout");
  }

  function handleHideCheckout() {
    setProgressContext("");
  }

  const userProgressContext = {
    progress: progressContext,
    openCart: handleOpenCart,
    hideCart: handleHideCart,
    openCheckout: handleOpenCheckout,
    hideCheckout: handleHideCheckout,
  };
  return (
    <UserProgressContext value={userProgressContext}>
      {children}
    </UserProgressContext>
  );
}

export default UserProgressContext;
