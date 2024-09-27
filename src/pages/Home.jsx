import Video from "../components/Video";
import Header from "./../components/Header";
import Title from "./../components/Title";
import SubVideo from "./../ui/SubVideo";
import WhatWeDo from "./../components/WhatWeDo";
import Support from "../components/Support";
import Form from "./../ui/Form";
import Contact from "./../components/Contact";
import About from "../components/About";
import Footer from "../ui/Footer";
import { Element } from "react-scroll";
import Ourteam from "../components/Ourteam";

function Home() {
  return (
    <>
      <Header />
      <Title />
      <Video />
      <SubVideo />
      <Element name="about">
        <About />
      </Element>

      <Element name="what-we-do">
        <WhatWeDo />
      </Element>
      <Element name="ourteam">
        <Ourteam />
      </Element>
      <Support />

      <Element name="contact">
        <Form />
      </Element>
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
