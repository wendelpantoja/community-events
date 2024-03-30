import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyled } from './styles/GlobalStyles.ts'
import { AuthProvider } from './context/AuthProvider/index.tsx'
import { EventProvider } from './context/EventProvider/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <GlobalStyled />
      <AuthProvider>
        <EventProvider>
          <App />
        </EventProvider>
      </AuthProvider>
  </React.StrictMode>,
)
