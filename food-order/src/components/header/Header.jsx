import { useContext } from "react";
import mealLogo from "../../assets/logo.jpg";
import Button from "../ui/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  const { items } = useContext(CartContext);
  const { openCart } = useContext(UserProgressContext);

  function handleOpenCart() {
    openCart();
  }

  const totalCartItems = items.reduce((totalNumberOfItems, item) => {
    return (totalNumberOfItems += item.quantity);
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={mealLogo} alt="meal logo" />
        <h1>Meal ordering</h1>
      </div>

      <nav>
        <Button textOnly onClick={handleOpenCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
