// import dishes from "./data.js";

// Get all unique categories from the array of dishes
// const categories = [...new Set(dishes.map((dish) => dish.category))];

function App() {
  return (
    <main>
      <section aria-label="filters">
        <div className="sticky">
          <h1>Burger Place</h1>
          <form>
            <h2>Filter dishes</h2>
          </form>
        </div>
      </section>
    </main>
  );
}

export default App;
