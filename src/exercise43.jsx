

const baseUrl = 'Forest';  //fooling a bit inorder to make this work with my url
const person = {
  name: 'Snus Man',
  imageEnding: 'jpg',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function Exercise43() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar" 
        src={`${baseUrl}.${person.imageEnding}`}
        alt={person.name}
      />
      <ul>
        <li>Wrapped src with curlybracets</li>
        <li>Wrapped content inside bracets with ` and used $ before inner bracets</li>
      </ul>
    </div>
  );
}