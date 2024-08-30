import About from "./Sections/About";
import Experiences from "./Sections/Experience/Experiences";
import Projects from "./Sections/Projects/Projects";
import Contact from "./Sections/Contact";
import Footer from "./Footer";
import Observer from "./Observer";
import HomeProvider from "@/providers/HomeProvider";

type HomeProps = {
  isMobile: boolean;
  isDark: boolean;
};

const Home = ({ isMobile, isDark }: HomeProps) => {
  return (
    <HomeProvider isDark={isDark} isMobile={isMobile}>
      <main id="content" className="pt-24 xl:w-1/2 xl:py-24">
        <Observer
          activeNumber={1}
          id="about"
          ariaLabel="About Section"
          observerProps={{
            threshold: 1,
            root: null,
            rootMargin: "0px",
          }}
        >
          <About />
        </Observer>
        <Observer
          activeNumber={2}
          id="experience"
          ariaLabel="Experience Section"
          observerProps={{
            threshold: 0.9,
            root: null,
            rootMargin: "0px",
          }}
        >
          <Experiences />
        </Observer>
        <Observer
          activeNumber={3}
          id="projects"
          ariaLabel="Projects Section"
          observerProps={{
            threshold: 0.7,
            root: null,
            rootMargin: "0px 0px 0px -60%",
          }}
        >
          <Projects />
        </Observer>
        <Contact />
        <Footer />
      </main>
    </HomeProvider>
  );
};
export default Home;
