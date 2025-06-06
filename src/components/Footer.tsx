import { HashLink } from 'react-router-hash-link';
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
  FaWhatsapp,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Beranda",
    to: "/#hero",
  },
  {
    title: "Produk",
    to: "/#product",
  },
  {
    title: "Testimoni",
    to: "/#testimoni",
  },
  {
    title: "Kontak",
    to: "/#contact",
  },
];

const Footer = () => {
  return (
    <>
     <div className="container px-10 sm:px-36">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 px-2 sm:px-0 pt-5">
          {/* company details */}
          <div className="py-8 px-2">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src='/assets/images/logos/logo.svg' alt="" className="max-w-5xl" />
            </h1>
            <p>
            SewaCar.id menyediakan mobil sewaan berkualitas untuk pengalaman berkendara yang nyaman, aman, dan profesional. 🚗🛣️🛡️
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300"
                      key={link.title}
                    >
                      <HashLink
                        to={link.to} 
                        className=""
                      >
                        {link.title}
                      </HashLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-2">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300"
                      key={link.title}
                    >
                      <HashLink
                        to={link.to} 
                        className=""
                      >
                        {link.title}
                      </HashLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href=""
                >
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href=""><FaWhatsapp className="text-3xl" /></a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow  className='text-4xl sm:text-2xl' />
                  <a href="">Fakultas Ilmu Komputer, Universitas Brawijaya, Malang</a>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt  />
                  <a href="">0912312412</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-2 py-2'>
      </div> 
    </>
  )
}

export default Footer


