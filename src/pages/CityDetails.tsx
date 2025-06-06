import axios from "axios";
import { useEffect, useState } from "react";
import type { City } from "../types/type";
import { useParams } from "react-router-dom";
import OfficeCard from "../components/OfficeCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CityDetails(){

    const { slug } =useParams<{ slug: string}>(); 

    const [city, setCity] = useState<City | null>(null);

    const [loading, setLoading] = useState(true);
  
    const [error, setError] = useState<string | null>(null);
  

  useEffect(() => {
    const baseApi = import.meta.env.VITE_API_OFFICE_RENT;
    axios
    .get(`${baseApi}/city/${slug}`,{
      headers: {
        'X-API-KEY' : "asd1ionon123124235239852asfd",
      },
    })
    .then((response) => {
      setCity(response.data.data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error);
      setLoading(false);
    });
  }, [slug]);

  if(loading){
    return <p>Loading ...</p>
  }

  if(error){
    return <p>Error loading data: {error}</p>
  }

  return(
  <>
  <Navbar/>
  <header className="flex flex-col w-full md:mt-24 px-4 sm:px-6 lg:px-8 mt-24">
    <section id="Hero-Banner" className="relative flex flex-col md:flex-row h-auto md:h-[434px]">
      {/* Hero Text Section - Selalu di atas pada mobile, kiri pada desktop */}
      <div
        id="Hero-Text"
        className="relative flex flex-col w-full md:max-w-[650px] h-fit rounded-[20px] md:rounded-[30px] border border-[#E0DEF7] p-6 md:p-10 gap-5 md:gap-[30px] bg-white md:mt-[70px] md:ml-[calc((100%-1130px)/2)] z-10 order-1"
      >
        <h1 className="font-extrabold text-3xl md:text-[50px] leading-[1.2] md:leading-[60px]">
          Great Office in <br />{" "}
          <span className="text-[#0D903A]">{city?.name} City</span>
        </h1>
        <p className="text-base md:text-lg leading-6 md:leading-8 text-[#000929]">
          Kantor yang tepat dapat memberikan impact pekerjaan menjadi lebih baik
          dan sehat dalam tumbuhkan karir.
        </p>
      </div>
      
      {/* Hero Image Section - Selalu di bawah pada mobile, kanan pada desktop */}
      <div
        id="Hero-Image"
        className="relative md:absolute w-full md:w-[calc(100%-((100%-1130px)/2)-305px)] h-[390px] md:h-[434px] rounded-[20px] md:rounded-bl-[40px] overflow-hidden order-2 md:order-2 mt-6 md:mt-0 right-0"
      >
        <img
          src="/assets/images/thumbnails/thumbnail-details-4.png"
          className="w-full h-full object-cover"
          alt="hero background"
        />
      </div>
    </section>
  </header>
    <section
      id="Fresh-Space"
      className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[100px] mb-[120px]"
    >
      <h2 className="font-bold text-2xl  text-center md:text-[32px] leading-[42px] md:leading-[48px] whitespace-nowrap">
        Browse Our Fresh Space. <br />
      </h2>
      <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:px-10 lg:px-0 gap-[30px]">    
      { city?.officeSpace.map((office) => (
        <div key={office.id} >
          <OfficeCard office={office}/>
        </div>
      ))}
      </div>
    </section>
    <Footer />
  </>
  );
}