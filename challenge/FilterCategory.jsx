// import dishes from "./data.js";

    export default function FilterCategory() { 
        return (
        <fieldset>
            <legend>Category</legend>
                <label htmlFor="all">
                    <input type="radio" name="categories" id="all" value="all" />
                all
                </label>
                {categories.map((c) => (
                    <label htmlFor={c} key={c}>
                    <input type="radio" name="categories" id={c} value={c} />
                    {c}
                    </label>
                ))}
        </fieldset>
    )
}