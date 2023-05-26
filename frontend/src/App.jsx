import { Layout } from "./layout/layout"
import { Home } from "./page/home"
import {User} from "./page/user"
import { Login } from "./page/login"
import { Routes, Route } from "react-router-dom"
import './css/index.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="user" element={<User />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App