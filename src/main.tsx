import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyled } from './styles/GlobalStyles.ts'
import { AuthProvider } from './context/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <GlobalStyled />
      <AuthProvider>
          <App />
      </AuthProvider>
  </React.StrictMode>,
)
