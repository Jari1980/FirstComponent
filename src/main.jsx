import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Exercise73 from './exercise73.jsx'
import Exercise72 from './exercise72.jsx'
import Exercise71 from './exercise71.jsx'
import Exercise63 from './exercise63.jsx'
import Exercise62 from './exercise62.jsx'
import Exercise61 from './exercise61.jsx'
import Exercise52 from './exercise52.jsx'
import Exercise51 from './exercise51a.jsx'
import Exercise43 from './exercise43.jsx'
import Exercise42 from './exercise42.jsx'
import Exercise41 from './exercise41.jsx'
import Exercise31 from './exercise31.jsx'
import Exercise21Gal from './exercise21Gal.jsx'
import Exercise21Pro from './exercise21Pro.jsx'
//First exercises
import Picture from './Picture.jsx'
import Profile from './exercise2.jsx'
import Gallery from './exercise3.jsx'
import Exercise4 from './exercise4.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h2>Seventh module exercises</h2>
    <Exercise73 />
    <Exercise72 />
    <Exercise71 />
    <h2>Sixth module exercises</h2>
    <Exercise63 />
    <Exercise62 />
    <Exercise61 />
    <h2>Fifth module exercises</h2>
    <Exercise52 />
    <Exercise51 />
    <h2>Fourth module exercises</h2>
    <Exercise43 />
    <Exercise42 />
    <Exercise41 />
    <h2>Third module exercise</h2>
    <Exercise31 />
    <h2>Second module exercise</h2>
    <Exercise21Pro />
    <Exercise21Gal />
    <h2>First module exercises</h2>
    <Picture />
    <Profile />
    <Gallery />
    <Exercise4 />
  </StrictMode>,
)
