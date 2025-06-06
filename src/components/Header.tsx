
const Header = () => {
  return (
  <header className="flex flex-col w-full">
    {/* HERO BANNER */}
    <section id="Hero-Banner" className="relative flex flex-col lg:flex-row h-auto lg:h-[720px] -mb-[60px] mt-15 sm:mt-13 px-6 sm:px-10 lg:px-0">
      
      {/* Hero Text */}
      <div
        id="Hero-Text"  
        className="relative flex flex-col w-full lg:max-w-[650px] rounded-2xl border border-[#E0DEF7] p-6 sm:p-10 gap-6 sm:gap-[30px] bg-white z-10 mt-10 lg:mt-[70px] lg:ml-[calc((100%-1130px)/2)]"
      >
        <div className="flex items-center w-fit rounded-full py-2 px-4 gap-2 bg-[#000929] text-xs sm:text-sm">
          <img src="assets/images/icons/crown-white.svg" className="w-4 h-4 sm:w-5 sm:h-5" alt="icon" />
          <span className="font-semibold text-white">
            We’ve won top productivity 500 fortunes
          </span>
        </div>
        <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-[50px] leading-tight lg:leading-[60px]">
          All Great Offices.
          <br />
          Grow Your Business.
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-[#000929]">
          Kantor yang tepat dapat memberikan impact pekerjaan menjadi lebih baik
          dan sehat dalam tumbuhkan karir.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
          <a
            href="#"
            className="flex items-center rounded-full px-6 py-4 gap-3 bg-[#0D903A]"
          >
            <img src="assets/images/icons/slider-horizontal-white.svg" className="w-6 h-6" alt="icon" />
            <span className="font-bold text-base sm:text-xl text-white">
              Explore Now
            </span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-full border border-[#000929] px-6 py-4 gap-3 bg-white"
          >
            <img src="assets/images/icons/video-octagon.svg" className="w-6 h-6" alt="icon" />
            <span className="font-semibold text-base sm:text-xl">
              Watch Story
            </span>
          </a>
        </div>
      </div>

      {/* Hero Image */}
      <div
        id="Hero-Image"
        className="relative mt-6 lg:absolute lg:right-0 lg:top-0 lg:w-[calc(100%-((100%-1130px)/2)-305px)] lg:h-[720px] rounded-bl-[40px] overflow-hidden"
      >
        <img
          src="assets/images/backgrounds/banner.png"
          className="w-full h-full object-cover rounded-xl lg:rounded-none"
          alt="hero background"
        />
      </div>
    </section>

    {/* CLIENTS & STATS SECTION */}
    <div className="flex flex-col pt-16 pb-10 px-6 sm:px-10 lg:px-[120px] gap-10 bg-[#0D903A] mt-5 sm:mt-10">
      
      {/* Logos */}
      <div className="flex items-center justify-center flex-wrap max-w-[1130px] mx-auto gap-6 sm:gap-[30px]">
        <img src="assets/images/logos/TESLA.svg" className="h-6 sm:h-8 md:h-9" alt="logo tesla" />
        <img src="assets/images/logos/Libra 2.svg" className="h-6 sm:h-8 md:h-9" alt="logo libra" />
        <img src="assets/images/logos/Binance logo.svg" className="h-6 sm:h-8 md:h-9" alt="logo binance" />
        <img src="assets/images/logos/Facebook 7.svg" className="h-6 sm:h-8 md:h-9" alt="logo facebook" />
        <img src="assets/images/logos/Microsoft 6.svg" className="h-6 sm:h-8 md:h-9" alt="logo microsoft" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-[50px] justify-center text-center">
        <div>
          <p className="text-sm sm:text-lg text-[#F7F7FD]">Comfortable Space</p>
          <p className="font-bold text-2xl sm:text-[38px] text-white">580M+</p>
        </div>
        <div>
          <p className="text-sm sm:text-lg text-[#F7F7FD]">Startups Succeed</p>
          <p className="font-bold text-2xl sm:text-[38px] text-white">98%</p>
        </div>
        <div>
          <p className="text-sm sm:text-lg text-[#F7F7FD]">Countries</p>
          <p className="font-bold text-2xl sm:text-[38px] text-white">90+</p>
        </div>
        <div>
          <p className="text-sm sm:text-lg text-[#F7F7FD]">Supportive Events</p>
          <p className="font-bold text-2xl sm:text-[38px] text-white">139M+</p>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header
