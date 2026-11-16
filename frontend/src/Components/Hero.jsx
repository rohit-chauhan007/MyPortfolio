import HeroVideo from '../../src/assets/heroVideo1.mp4'
import '../../public/ComponentsStyle/Hero.css'
export default function Hero () {
    return (
        <>
           <div className="hero-section">
           
            <video autoPlay muted loop>
                 <source src={HeroVideo} />
            </video>
             
            </div>
        </>
    )
}