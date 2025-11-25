import { useContext } from "react";
import Modal from "../ui/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../../utils/currency-formatter";
import Input from "../ui/Input";
import Button from "../ui/Button";
import UserProgressContext from "../store/UserProgressContext";

export default function Checkout() {
  const { items } = useContext(CartContext);
  const { progress, hideCheckout } = useContext(UserProgressContext);

  const totalPrice = items.reduce(
    (totalPrice, item) => (totalPrice += item.price * item.quantity),
    0
  );

  function handleClose() {
    hideCheckout();
  }

  return (
    <Modal open={progress === "checkout"}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalPrice)}</p>
        <Input label="Full Name" type="text" id="full-name" required />
        <Input label="E-Mail" type="email" id="email" required />
        <Input label="Street" type="text" id="street" required />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" required />
          <Input label="City" type="text" id="city" required />
        </div>
        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>
            Close
          </Button>
          <Button>Submit</Button>
        </p>
      </form>
    </Modal>
  );
}
