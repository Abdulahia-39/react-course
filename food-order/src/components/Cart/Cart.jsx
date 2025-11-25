import { useContext } from "react";
import Modal from "../ui/Modal";
import UserProgressContext from "../store/UserProgressContext";
import CartContext from "../store/CartContext";
import Button from "../ui/Button";
import { currencyFormatter } from "../../utils/currency-formatter";
import CartItem from "./CartItem";

export default function Cart() {
  const { progress, hideCart, openCheckout } = useContext(UserProgressContext);
  const { items, addItem, removeItem } = useContext(CartContext);

  const totalPrice = items.reduce(
    (totalPrice, item) => (totalPrice += item.price * item.quantity),
    0
  );

  function handleHideCart() {
    hideCart();
  }

  function handleGoToCheckout() {
    openCheckout();
  }

  return (
    <Modal
      open={progress === "cart"}
      className="cart"
      onClose={progress === "cart" ? handleHideCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onDecrease={() => removeItem(item.id)}
            onIncrease={() => addItem(item)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
      <div className="modal-actions">
        <Button textOnly onClick={handleHideCart}>
          Close
        </Button>
        {items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
        )}
      </div>
    </Modal>
  );
}
