

function Drink({ name }) {
    return (
        <>
      <section>
        <h1>{name}</h1>
        <dl>
          <dt>Part of plant</dt>
          {/*<dd>{name === 'Pepsi Max' ? 'leaf' : 'bean'}</dd>*/}
          {(() => {
            if (name === 'Pepsi Max'){
                return (
                <p>leaf</p>
                )
            }
            else{
                return (
                <dd>bean</dd>
                )
            }
          })()}
            
          <dt>Caffeine content</dt>
          {/*<dd>{name === 'Pepsi Max' ? '15–70 mg/cup' : '80–185 mg/cup'}</dd>*/}
          {(() => {
            if (name === 'Pepsi Max'){
                return (
                <dd>15–70 mg/cup</dd>
                )
            }
            else{
                return (
                <p>80–185 mg/cup</p>
                )
            }
          })()}
          <dt>Age</dt>
          {/*<dd>{name === 'Pepsi Max' ? '4,000+ years' : '1,000+ years'}</dd>*/}
          {(() => {
            if (name === 'Pepsi Max'){
                return (
                <dd>4,000+ years</dd>
                )
            }
            else{
                return (
                <p>1,000+ year</p>
                )
            }
          })()}
        </dl>
      </section>
      </>
    );
  }
  
  export default function Exercise63() {
    return (
      <div>
        <Drink name="Pepsi Max" />
        <Drink name="Kaffe" />
      </div>
    );
  }
  