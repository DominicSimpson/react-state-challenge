import dishes from "./data.js";

   export default function ListDishes( { max, setMax }) {
    return (
    <section aria-label="dishes">
        <ul className="grid">
          {dishes.map((dish) => (
            /* enter in filter functions here */
            <li key={dish.id} className="card">
              <h3>{dish.name}</h3>
              {dish.description && <p>{dish.description}</p>}
              <div>£{dish.price.toFixed(2)}</div>
            </li>
          ))}
        </ul>
    </section>
    )
   }

