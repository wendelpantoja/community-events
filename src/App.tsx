import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { useAuth } from "./context/AuthProvider/useAuth"

function App() {
  const auth =useAuth()
  return (
    <>
      {auth.contextHolder}
      <RouterProvider router={router} />
    </> 
  )
}

export default App
