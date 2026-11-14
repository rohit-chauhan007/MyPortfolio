import Hero from "./Hero";
import NavBar from "./NavBar";
import About from "./About";
import Project from "./Project";
import Skill from "./Skill";
import Contact from './Contact'
import Footer from './Footer'
import '../../Scripts/circleMove.js';
import '../../public/ComponentsStyle/Hero.css'
export default function Home() {
    return (
        <>
        <div className="circle" style={{height:"20px",width:"20px",background:"red",borderRadius:"50%",opacity:"0",zIndex:"9999",position:"absolute",top:"0",left:"0"}}></div>
           <NavBar />
        <section className="home-section" style={{ height: "100%", width: "100%", fontStyle: "Inter,serif" }}>
            <Hero />
            <About />
            <Project />
            <Skill />
            <Contact />
            <Footer />
        </section>
        </>
    )
}