
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Benefits from "../components/Benefits";
import BrowseCityWrapper from "../wrapper/BrowseCityWrapper";
import OfficeWrapper from "../wrapper/OfficeWrapper";
import Footer from "../components/Footer";

export default function browse(){
  return(
    <>
    <Navbar />
    <Header />
    <BrowseCityWrapper />
    <Benefits />
    <OfficeWrapper />
    <Footer />
    </>
  );
}