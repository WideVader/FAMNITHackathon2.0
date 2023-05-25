import { Layout } from "./layout/layout"
import Home from "./page/home"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
  )
}

export default App