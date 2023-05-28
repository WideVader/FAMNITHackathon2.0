import { Layout } from "./layout/layout"
import { Home } from "./page/home"
import { Login } from "./page/login"
import { Routes, Route } from "react-router-dom"
import { NewLife } from "./page/newLife"
import { Apartman } from "./page/apartman"
import './css/index.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="newLife/:id" element={<Apartman />} />
        <Route path="newLife" element={<NewLife />} />
      </Route>
    </Routes>
  )
}

export default App