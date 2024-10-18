import { recipes } from './exercise72data.jsx';



export default function Exercise72() {
    const list = recipes.map(recipes =>
        <li key={recipes.id}>
            <h3>{recipes.name}</h3>
            <ul>
                {recipes.ingredients.map(ingredient =>
                    <li key={ingredient}>
                        {ingredient}
                    </li>
                )}
            </ul>
        </li>
    );

  return (
    <div>
      <h1>Recipes</h1>
      {list}
    </div>
  );
}