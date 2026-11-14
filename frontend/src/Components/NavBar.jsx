import "../../public/ComponentsStyle/Navbar.css";
import '../../Scripts/Navbar.js'
import '../../Scripts/magnetic.js'
export default function NavBar() {
  return (
    <>
      <nav >
        <div className="navbars">
          <div className="navbar-logo wrap">
            <a style={{overflow:"hidden",cursor:"pointer",minWidth:"1em",height:"4.5em",fontSize:"1em",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",textDecoration:"none",padding:"0 2rem"}} className="btn-click magnetic" href="#">
              <span className="btn-text" style={{overflow:"hidden",padding:"4px 10px"}}>
                     <div className="credit">
                      <span className="copyright"><i class="fa-regular fa-copyright"></i></span>
                      </div>
                      <div className="cbr" style={{overFlow:"hidden",padding:"2px 5px"}}>
                        <span className="coded-by" >Code by </span>
                        <span className="rohit"style={{overFlow:"hidden",display:"inline-block"}}>
                           <span style={{display:"inline-block"}} className="rohit-span" >
                             Rohit
                           </span>
                           <span style={{display:"inline-block"}} className="byteforge" > Byteforge</span>
                        </span>
                      </div>
              </span>
              
            </a>
          </div>
          <div className="navigation">
            <a href="project-section">Work</a>
            <a href="about-section">About</a>
            <a href="contact-section">Contact</a>
          </div>
        </div>
      
      </nav>
      
    </>
  );
}
