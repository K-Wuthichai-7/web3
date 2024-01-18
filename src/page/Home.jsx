import { Footer } from "../components/Footer";
import { Herders } from "../components/Herders";
import { AboutCmponent } from "../components/aboutme";
import { Navbars } from "./../components/Navbars";

export const Home = () => {
  return (
    <>
      <Navbars />
      <Herders />
      <AboutCmponent />
      <Footer />
    </>
  );
};
