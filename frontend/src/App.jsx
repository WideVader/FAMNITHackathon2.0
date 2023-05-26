import { Layout } from "./layout/layout"
import { Home } from "./page/home"
import { Routes, Route } from "react-router-dom"
import './css/index.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Ronaldo" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App