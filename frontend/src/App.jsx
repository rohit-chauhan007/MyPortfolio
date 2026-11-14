import Home from "./Components/Home"
import Loader from "./Components/Loader"
import '../public/LoaderStyle/loader.css'
import '../Scripts/circleMove.js'
import { BrowserRouter, Routes, Route } from 'react-router'


function App() {
  return (
    <>
            <div className="circle" style={{ height: "20px", width: "20px", background: "red", borderRadius: "50%", opacity: "0", position: "absolute", top: "0", left: "0" }}></div>

      <div className="app">

        <Loader />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
