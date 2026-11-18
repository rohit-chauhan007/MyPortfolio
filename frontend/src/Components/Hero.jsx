import HeroVideo from "../../src/assets/heroVideo1.mp4";
import "../../public/ComponentsStyle/Hero.css";
export default function Hero() {
  return (
    <>
      <div className="hero-section">
        <h1 style={{position:'absolute',top:"40%",left:"20%",color:"black"}}>FREELIENCE</h1>
        <h1 style={{position:'absolute',top:"70%",left:"50%",color:"black",display:"inline-flex",justifyContent:"end"}}><span>Devloper</span><span>&</span><span>Designer</span></h1>
        <video autoPlay muted loop>
          <source src={HeroVideo} />
        </video>
      </div>
    </>
  );
}
