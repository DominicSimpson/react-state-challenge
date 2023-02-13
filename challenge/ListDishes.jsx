import dishes from "./data.js";

   export default function ListDishes( { max, setMax }) {
    function update(event) {
      setMax(+event.target.value);
  } 
    return (
    <section aria-label="dishes">
        <ul className="grid">
          {dishes.map((dish) => (
            <li key={dish.id} className="card">
              <h3>{dish.name}</h3>
              {dish.description && <p>{dish.description}</p>}
              <div>£{dish.price.toFixed(2)}</div>
              dish.price={update}
            </li>
          ))}
        </ul>
    </section>
    )
   }

