import Hero from "./Hero";
import NavBar from "./NavBar";
import About from "./About";
import Project from "./Project";
import Skill from "./Skill";
import Contact from './Contact'
import Footer from './Footer'
// import '../../Scripts/circleMove.js';
export default function Home() {
    return (
        <>
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