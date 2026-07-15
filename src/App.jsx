import Welcome from "./components/Welcome"
import Home from "./components/Home"
import About from "./components/About"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/gh-live-react/">Welcome</Link> |
          <Link to="/gh-live-react/home">Home</Link> |
          <Link to="/gh-live-react/about">About Us</Link> |
        </nav>
        <Routes>
          <Route path="/gh-live-react/" element={<Welcome />} />
          <Route path="/gh-live-react/home" element={<Home />} />
          <Route path="/gh-live-react/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App