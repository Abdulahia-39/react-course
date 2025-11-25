import { currencyFormatter } from "../../utils/currency-formatter";
import Button from "../ui/Button";
import CartContext from "../store/CartContext";
import { useContext } from "react";

export default function Meal({ meal }) {
  const { addItem } = useContext(CartContext);

  function handleAddingMeal() {
    addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <div className="meal-item-actions">
          <Button textOnly={false} onClick={handleAddingMeal}>
            Add to cart
          </Button>
        </div>
      </article>
    </li>
  );
}
