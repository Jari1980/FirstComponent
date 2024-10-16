import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Picture from './Picture.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Picture />
  </StrictMode>,
)
