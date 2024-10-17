

function Item({ name, isPacked }) {
    return (
      <li className="item">
        {isPacked ? name + ' ✅' : name + ' ❌'}
        {/*{name} {isPacked && '✅'}*/}
      </li>

    );
  }
  
  export default function Exercise61() {
    return (
      <section>
        <h1>Snus Manns List</h1>
        <ul>
          <Item 
            isPacked={true} 
            name="Snus" 
          />
          <Item 
            isPacked={true} 
            name="Broccoli" 
          />
          <Item 
            isPacked={false} 
            name="Ostbågar" 
          />
        </ul>
      </section>
    );
  }
  