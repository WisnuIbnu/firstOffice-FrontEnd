import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <nav
      className={`w-full fixed px-4 top-0 sm:px-6 lg:px-8 xl:px-[8%] py-7 sm:py-4  flex items-center justify-between z-50 transition-all ${
        isScroll ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      {/* Logo */}
      <a href="/">
        <img
          src="/assets/images/logos/logo.svg"
          className="cursor-pointer mr-6 w-38"
          alt="logo"
        />
      </a>

      {/* Desktop Menu */}
      <ul
        className={`hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 p-6 ${
          isScroll ? '' : 'bg-white shadow-md rounded-full'
        }`}
      >
        <li><a className="text-sm lg:text-base" href="/">Browse</a></li>
        <li><a className="text-sm lg:text-base" href="#about">Popular</a></li>
        <li><a className="text-sm lg:text-base" href="#experiences">Categories</a></li>
        <li><a className="text-sm lg:text-base" href="#skill">Event</a></li>
        <li><a className="text-sm lg:text-base" href="#servise">My Booking</a></li>
      </ul>

      {/* Contact Button */}
      <a
        href="#contact"
        className="hidden lg:flex items-center gap-2 p-4 border border-gray-400 rounded-full ml-4 text-sm"
      >
        <img src="/assets/images/icons/call.svg" className="w-5 h-5" alt="call" />
        Contact Us
      </a>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden" onClick={() => setIsMenuOpen(true)}>
        <img
          src="/assets/images/icons/menu-black.png"
          alt="open menu"
          className="w-8 cursor-pointer"
        />
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-500 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col gap-6 py-20 px-8 pb-10 md:hidden shadow-lg`}
      >
        {/* Close Button */}
        <div className="absolute right-4 top-5" onClick={() => setIsMenuOpen(false)}>
          <img
            src="/assets/images/icons/close-black.png"
            alt="close menu"
            className="w-5 h-5 cursor-pointer"
          />
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col gap-4 text-base font-medium">
          <li><a className="font-Ovo" onClick={() => setIsMenuOpen(false)} href="#home">Browse</a></li>
          <li><a className="font-Ovo" onClick={() => setIsMenuOpen(false)} href="#about">Popular</a></li>
          <li><a className="font-Ovo" onClick={() => setIsMenuOpen(false)} href="#experiences">Categories</a></li>
          <li><a className="font-Ovo" onClick={() => setIsMenuOpen(false)} href="#skill">Events</a></li>
          <li><a className="font-Ovo" onClick={() => setIsMenuOpen(false)} href="#servise">My Booking</a></li>
          <li><a className="font-Ovo" onClick={() => setIsMenuOpen(false)} href="#portofolio">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
