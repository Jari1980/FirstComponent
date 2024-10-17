import { getImageUrl } from './exercise51b';


//Extracting Profile component from Exercise51
export function Profile({source, thing, profession, temperature, discovered}){
    return (
        <>
        <img 
            className = "avatar"
            width = {70}
            height = {70}
            src = {source}
            alt = {thing}
        />
        <ul>
        <li>
            <b>Profession: </b> 
            {profession}
          </li>
          <li>
            <b>Temperature: </b> 
            {temperature}
          </li>
          <li>
            <b>Discovered: </b>
            {discovered}
          </li>
        </ul>
        </>
    )
}

export default function Exercise51() {
  return (
    <div>
      <h1>Notable Forest</h1>
      <section className="profile">
        <h2>Forest</h2>
        <Profile 
            source = {getImageUrl('Forest')}
            thing = "Forest"
            profession = "Snus n Java"
            temperature= "In summertime can be warm else pretty cold"
            discovered= "Home for wildlife"
        />
        {/*<img
          className="avatar"
          src={getImageUrl('Forest')}
          alt="Forest"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            Snus n Java
          </li>
          <li>
            <b>Temperature: Cold </b> 
            In summertime can be warm else pretty cold
          </li>
          <li>
            <b>Discovered: </b>
            Home for wildlife
          </li>
        </ul>*/}
      </section>
      <section className="profile">
        <h2>Tree</h2>
        <Profile 
            source = {getImageUrl('Tree')}
            thing = "Tree"
            profession = "Stands still"
            temperature= "Not broccoli"
            discovered= "Standing still is enough"
        />
        {/*
        <img
          className="avatar"
          src={getImageUrl('Tree')}
          alt="Tree"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            Stands still
          </li>
          <li>
            <b>Made of: </b> 
            Not broccoli
          </li>
          <li>
            <b>Discovered: </b>
            Standing still is enough
          </li>
        </ul>
        */}
      </section>
    </div>
  );
}
