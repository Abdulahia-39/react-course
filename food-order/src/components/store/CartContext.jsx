import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

function cartReducer(state, action) {
  if (action.type === "Add_Item") {
    const existingItemsIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updateItems = [...state.items];

    if (existingItemsIndex > -1) {
      const item = state.items[existingItemsIndex];
      const updatedItem = {
        ...item,
        quantity: item.quantity + 1,
      };
      updateItems[existingItemsIndex] = updatedItem;
    } else {
      updateItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updateItems };
  }

  if (action.type === "Remove_Item") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    //to change items immutably we need a copy of the state array
    const updatedItems = [...state.items];

    const existingItem = { ...updatedItems[existingItemIndex] };

    if (existingItem.quantity === 1) {
      updatedItems.splice(existingItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };

      updatedItems[existingItemIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }
}

export function CartContextProvider({ children }) {
  const [cart, cartReducerAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    cartReducerAction({ type: "Add_Item", item });
  }

  function removeItem(id) {
    cartReducerAction({ type: "Remove_Item", id });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };

  console.log(cartContext);

  return <CartContext value={cartContext}>{children}</CartContext>;
}

export default CartContext;
