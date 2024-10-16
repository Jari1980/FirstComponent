import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Second exercise
import Exercise21Gal from './exercise21Gal.jsx'
import Exercise21Pro from './exercise21Pro.jsx'
//First exercises
import Picture from './Picture.jsx'
import Profile from './exercise2.jsx'
import Gallery from './exercise3.jsx'
import Exercise4 from './exercise4.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
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
