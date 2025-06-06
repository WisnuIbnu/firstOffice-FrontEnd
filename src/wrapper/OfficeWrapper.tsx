import { useEffect, useState } from 'react';
import OfficeCard from '../components/OfficeCard'
import axios from 'axios';
import type { Office } from '../types/type';

const OfficeWrapper = () => {

    const [offices, settCities] = useState<Office[]>([]);
  
    const [loading, setLoading] = useState(true);
  
    const [error, setError] = useState<string | null>(null);
  

  useEffect(() => {
    const baseApi = import.meta.env.VITE_API_OFFICE_RENT;
    axios
    .get(`${baseApi}/offices`,{
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
    <section
      id="Fresh-Space"
      className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[100px] mb-[120px]"
    >
      <h2 className="font-bold text-2xl  text-center md:text-[32px] leading-[42px] md:leading-[48px] whitespace-nowrap">
        Browse Our Fresh Space. <br />
        For Your Better Productivity.
      </h2>
      <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:px-10 lg:px-0 gap-[30px]">    
        {offices.map((office) => (
            <OfficeCard key={office.id} office={office} />
        ))}
        </div>
    </section>
  )
}

export default OfficeWrapper

