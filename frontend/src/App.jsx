import { Layout } from "./layout/layout"
import { Home } from "./page/home"
import { Login } from "./page/login"
import { Routes, Route } from "react-router-dom"
import { NewLife } from "./page/newLife"
import './css/index.css'
import UserProvider from "./context/userContext"

const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="newLife" element={<NewLife />} />
        </Route>
      </Routes>
    </UserProvider>
  )
}

export default App