import '../../public/LoaderStyle/loader.css'
import '../../public/LoaderStyle/loader.js'
function Loader(){
    return (
        <div className="loader"> 
              <div className="loader-count">
                <h2 style={{textAlign:"center"}}>0%</h2>
                <h1 style={{}}>LOADING</h1>
                <p style={{marginLeft:"15rem",fontSize:"16px"}}>DEVLOPER</p>
              </div>
        </div>
    )
};
export default Loader;