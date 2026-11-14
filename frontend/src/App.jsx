import Home from "./Components/Home"
import Loader from "./Components/Loader"
import '../public/LoaderStyle/loader.css'
import {BrowserRouter,Routes,Route} from 'react-router'


function App() {
  return (
    <>
      <div className="app">
         <Loader/>
         <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
         </BrowserRouter>
      </div>
    </>
  )
}

export default App
