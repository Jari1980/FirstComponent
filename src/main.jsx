import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Picture from './Picture.jsx'
import Profile from './exercise2.jsx'
import Gallery from './exercise3.jsx'
import Exercise4 from './exercise4.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Picture />
    <Profile />
    <Gallery />
    <Exercise4 />
  </StrictMode>,
)
