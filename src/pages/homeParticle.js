import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from '../layout/Navbar';
import Hero from '../section/hero';
import About from '../section/about';
import Blockquote from '../section/blockquote';
import Whatido from '../section/whatido';
import Gallery from '../section/gallery';
import Resume from '../section/resume';
import Counter from '../section/counter';
import Blog from '../section/blog';
import Contact from '../section/contact';
import Footer from '../section/footer';
import Preloader from "../layout/Preloader";
import ScrollToTopBtn from '../layout/ScrollToTop';
import Particle from '../layout/Particle';
import { createGlobalStyle } from 'styled-components';

// import { GlobalStyles } from './style/darknew';

// const image1 ="./img/background/3.jpg";
// const image1 = 'https://images.unsplash.com/photo-1515611856470-fae3e6c4e4e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
const image1 = 'https://images.unsplash.com/photo-1536657761726-d962a8c3376d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'

const GlobalStyles = createGlobalStyle`
  .navbar-brand .imginit{
      display: block ;
    }
    .navbar-brand .imgsaly{
      display: none !important;
    }
`;

function home() {
  return (
    <>
      <GlobalStyles />
      <Preloader />
      <div className="home">

        <header id="header-wrap">
          <Navbar />
        </header>

        {/* HERO */}
        <section id="hero-area" className="bg-bottom py-0">

          <Parallax bgImage={image1} strength={300}>
            <Particle />
            <Hero />
            <Link smooth spy to="about">
              <span className="mouse transition" id="fly">
                <span className="scroll"></span>
              </span>
            </Link>
          </Parallax>
        </section>

        <section id="about" className="pb-0">
          <About />
          <Blockquote />
        </section>

        <section id="whatido">
          <Whatido />
        </section>

        {/* <section id="blog" className="pb-0"> */}
        {/* <Gallery /> */}
        {/* </section> */}


        <section id="contact" className="pb-0">
          <Contact />
          <Footer />
        </section>




        <div className="float-text">
          <div className="de_social-icons">
            <a href="https://www.facebook.com/rob.limeninja" rel="noreferrer" target="_blank"><i style={{ color: 'white' }} className="fa fa-facebook"></i></a>
            <a href="https://www.linkedin.com/in/rbstokes/  " rel="noreferrer" target="_blank"><i style={{ color: 'white' }} className="fa fa-linkedin"></i></a>
          </div>
          <span>Follow Me</span>
        </div>
      </div>
      <ScrollToTopBtn />
    </>
  );
}

export default home;
