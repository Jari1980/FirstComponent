import { people } from "./exercise71data.jsx";
import { getImageUrl } from "./exercise71utils.jsx";

export default function Exercise71() {
  const chemist = people
    .filter((person) => person.profession === "chemist")
    .map((person) => (
      <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
    ));
  const nonChemist = people
    .filter((person) => person.profession !== "chemist")
    .map((person) => (
      <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
    ));

  return (
    <article>
      <h1>Chemists</h1>
      <ul>{chemist}</ul>
      <h1>Broccolis</h1>
      <ul>{nonChemist}</ul>
    </article>
  );
}
