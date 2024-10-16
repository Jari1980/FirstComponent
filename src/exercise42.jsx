

const person = {
    name: 'Snus Man',
    url: '/Forest.jpg',
    theme: {
      backgroundColor: 'black',
      color: 'blue'
    }
  };
  
  export default function Exercise42() {
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src={person.url}
          alt="Forest"
        />
        <ul>
          <li>Url extracted</li>
        </ul>
      </div>
    );
  }