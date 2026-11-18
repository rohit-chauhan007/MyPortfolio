import HeroVideo from "../../src/assets/heroVideo1.mp4";
import "../../public/ComponentsStyle/Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <video className="hero-video" autoPlay muted loop playsInline aria-hidden="true">
        <source src={HeroVideo} type="video/mp4" />
      </video>

      <div className="hero-content">
        <p className="hero-label">FREELANCE</p>
        <p className="hero-intro">
          Hi, I’m Rohit. I build polished websites and digital experiences.
        </p>
        <h1 className="hero-title">Developer &amp; Designer</h1>
      </div>
    </section>
  );
}