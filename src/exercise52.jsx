


function Card({children}){
    return(
        <div className="card">
            <div className="card-content">
                {children}
            </div>
        </div>
    )
}

export default function Exercise52() {
    return (
      <div>
        <Card>
        <h1>Photo</h1>
        <img
              className="avatar"
              src="/Forest.jpg"
              alt="Forest"
              width={70}
              height={70}
            />
        </Card>
        {/*
        <div className="card">
          <div className="card-content">
            <h1>Photo</h1>
            <img
              className="avatar"
              src="/Forest.jpg"
              alt="Forest"
              width={70}
              height={70}
            />
          </div>
        </div>
        */}
        <card>
        <h1>About</h1>
        <p>A random forest.</p>
        </card>
        {/*
        <div className="card">
          <div className="card-content">
            <h1>About</h1>
            <p>A random forest.</p>
          </div>
        </div>*/}
      </div>
    );
  }
  