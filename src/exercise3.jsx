
//The solution was to set capitalletter to component name and change name under html part

function Exercise3() {
    return (
      <img
        src="https://..."
        alt="Exercise3"
      />
    );
  }
  
  export default function Gallery() {
    return (
      <section>
        <h1>Exercise3</h1>
        <Exercise3 />
        <Exercise3 />
        <Exercise3 />
      </section>
    );
  }