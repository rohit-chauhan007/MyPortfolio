import HeroVideo from '../../src/assets/heroVideo1.mp4'
import '../../public/ComponentsStyle/Hero.css'
import '../../Scripts/circleMove.js';
import '../../public/ComponentsStyle/Hero.css'

export default function Hero () {
    return (
        <>
           <div className="hero-section">
                   <div className="circle" style={{height:"20px",width:"20px",background:"red",borderRadius:"50%",opacity:"0",position:"absolute",top:"0",left:"0"}}></div>
           
            <video autoPlay muted loop>
                 <source src={HeroVideo} />
            </video>
             
            </div>
        </>
    )
}