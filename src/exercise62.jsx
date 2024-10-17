

function Item({ name, importance }) {
    return (
      <li className="item">
        {name}
        {importance > 0 ? " (" + importance + ")" : ""}
      </li>
    );
  }
  
  export default function Exercise62() {
    return (
      <section>
        <h1>Snus Manns List</h1>
        <ul>
          <Item 
            importance={9} 
            name="Snus" 
          />
          <Item 
            importance={0} 
            name="Broccoli" 
          />
          <Item 
            importance={6} 
            name="Ostbågar" 
          />
        </ul>
      </section>
    );
  }
  