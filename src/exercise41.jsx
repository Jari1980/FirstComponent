


  
  export default function Exercise41() {
    const person = {
        name: 'Snus Man',
        theme: {
          backgroundColor: 'black',
          color: 'green'
        }
      };

    return (
      <div style={person.theme}>
        <h1>{person.name}'s forest</h1>
        <img
          className="avatar"
          src="/Forest.jpg"
          alt="Forest"
        />
        <ul>
          <li>Moved const inside function</li>
          <li>Inside h1 in curlybracets person was changed to person.name</li>
        </ul>
      </div>
    );
  }