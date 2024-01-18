import { AboutCompony } from "../components/AboutCompany";
import { Navbars } from "./../components/Navbars";
import { Footer } from "../components/Footer";
export const About = () => {
  return (
    <>
      <main className='flex-shrink-0 bg-light'>
        <Navbars />
        <AboutCompony />
        <Footer />
      </main>
    </>
  );
};
