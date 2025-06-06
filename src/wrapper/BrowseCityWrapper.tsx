import { Swiper, SwiperSlide } from "swiper/react"
import CityCard from "../components/CityCard";
import { useState } from "react";
import type { City } from "../types/type";
import { useEffect } from "react";
import axios from "axios";

const BrowseCityWrapper = () => {

  const [cities, settCities] = useState<City[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);



  useEffect(() => {
  const baseApi = import.meta.env.VITE_API_OFFICE_RENT;
    axios
    .get(`${baseApi}/cities`,{
      headers: {
        'X-API-KEY' : "asd1ionon123124235239852asfd",
      },
    })
    .then((response) => {
      settCities(response.data.data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error);
      setLoading(false);
    });
  }, []);

  if(loading){
    return <p>Loading ...</p>
  }

  if(error){
    return <p>Error loading data: {error}</p>
  }
  return (
    <section id="Cities" className="flex flex-col gap-[30px] mt-[100px]">
      <div className="w-full max-w-[1130px] mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-center md:text-left">
        <h2 className="font-bold text-[28px] md:text-[32px] leading-[42px] md:leading-[48px] whitespace-nowrap">
          You Can Choose <br />
          Our Favorite Cities
        </h2>
        <a
          href="#"
          className="rounded-full py-3 px-5 bg-white font-bold border border-gray-300 shadow-sm"
        >
          Explore All City
        </a>
      </div>
      <div className="swiper w-full">
        <div className="swiper-wrapper">
          <Swiper
          direction="horizontal"
          spaceBetween={30}
          slidesPerView="auto"
          slidesOffsetAfter={30}
          slidesOffsetBefore={30}>

          {cities.map((city) => (

            <SwiperSlide key={city.id} className="!w-fit first-of-type:pl-[calc((100%-1130px-60px)/2)] last-of-type:pr-[calc((100%-1130px-60px)/2)]">
              <CityCard city={city} />
            </SwiperSlide>

          ))}

          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default BrowseCityWrapper
