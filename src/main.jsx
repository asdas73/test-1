import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextNoteProvider from './context/ContextNote.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextNoteProvider>
      <App />
    </ContextNoteProvider>
  </React.StrictMode>,
)
