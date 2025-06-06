

const Benefits = () => {
  return (
<section
  id="Benefits"
  className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-[1015px] mx-auto gap-10 lg:gap-[100px] mt-[60px] lg:mt-[100px] px-4 lg:px-0"
>
  {/* Heading - moves to top on mobile */}
  <h2 className="font-bold text-[28px]  text-center md:text-[32px] leading-[42px] md:leading-[48px] whitespace-nowrap">
  We Might Good <br />
    For Your Business
  </h2>

  {/* Benefits grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-[30px] w-full lg:w-auto px-6 sm:px-0">
    {/* Benefit Item 1 */}
    <div className="flex items-start gap-4">
      <div className="flex items-center justify-center shrink-0 w-14 h-14 lg:w-[70px] lg:h-[70px] rounded-2xl lg:rounded-[23px] bg-green-100 overflow-hidden">
        <img
          src="assets/images/icons/security-user.svg"
          className="w-6 h-6 lg:w-[34px] lg:h-[34px]"
          alt="Privacy icon"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-1 lg:gap-[5px]">
        <p className="font-bold text-base lg:text-lg leading-6 lg:leading-[27px]">
          Privacy-First Design
        </p>
        <p className="text-sm leading-5 lg:leading-[24px]">
          Lorem available without even higher tax that cost much
        </p>
      </div>
    </div>

    {/* Benefit Item 2 */}
    <div className="flex items-start gap-4">
      <div className="flex items-center justify-center shrink-0 w-14 h-14 lg:w-[70px] lg:h-[70px] rounded-2xl lg:rounded-[23px] bg-green-100  overflow-hidden">
        <img
          src="assets/images/icons/group.svg"
          className="w-6 h-6 lg:w-[34px] lg:h-[34px]"
          alt="Easy access icon"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-1 lg:gap-[5px]">
        <p className="font-bold text-base lg:text-lg leading-6 lg:leading-[27px]">Easy Move Access</p>
        <p className="text-sm leading-5 lg:leading-[24px]">
          Lorem available without even higher tax that cost much
        </p>
      </div>
    </div>

    {/* Benefit Item 3 */}
    <div className="flex items-start gap-4">
      <div className="flex items-center justify-center shrink-0 w-14 h-14 lg:w-[70px] lg:h-[70px] rounded-2xl lg:rounded-[23px] bg-green-100  overflow-hidden">
        <img
          src="assets/images/icons/3dcube.svg"
          className="w-6 h-6 lg:w-[34px] lg:h-[34px]"
          alt="Flexibility icon"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-1 lg:gap-[5px]">
        <p className="font-bold text-base lg:text-lg leading-6 lg:leading-[27px]">Flexibility Spaces</p>
        <p className="text-sm leading-5 lg:leading-[24px]">
          Lorem available without even higher tax that cost much
        </p>
      </div>
    </div>

    {/* Benefit Item 4 */}
    <div className="flex items-start gap-4">
      <div className="flex items-center justify-center shrink-0 w-14 h-14 lg:w-[70px] lg:h-[70px] rounded-2xl lg:rounded-[23px] bg-green-100  overflow-hidden">
        <img
          src="assets/images/icons/cup.svg"
          className="w-6 h-6 lg:w-[34px] lg:h-[34px]"
          alt="Top-rated icon"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-1 lg:gap-[5px]">
        <p className="font-bold text-base lg:text-lg leading-6 lg:leading-[27px]">Top-Rated Office</p>
        <p className="text-sm leading-5 lg:leading-[24px]">
          Lorem available without even higher tax that cost much
        </p>
      </div>
    </div>

    {/* Benefit Item 5 */}
    <div className="flex items-start gap-4">
      <div className="flex items-center justify-center shrink-0 w-14 h-14 lg:w-[70px] lg:h-[70px] rounded-2xl lg:rounded-[23px] bg-green-100  overflow-hidden">
        <img
          src="assets/images/icons/coffee.svg"
          className="w-6 h-6 lg:w-[34px] lg:h-[34px]"
          alt="Snacks icon"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-1 lg:gap-[5px]">
        <p className="font-bold text-base lg:text-lg leading-6 lg:leading-[27px]">
          Extra Snacks Available
        </p>
        <p className="text-sm leading-5 lg:leading-[24px]">
          Lorem available without even higher tax that cost much
        </p>
      </div>
    </div>

    {/* Benefit Item 6 */}
    <div className="flex items-start gap-4">
      <div className="flex items-center justify-center shrink-0 w-14 h-14 lg:w-[70px] lg:h-[70px] rounded-2xl lg:rounded-[23px] bg-green-100 overflow-hidden">
        <img
          src="assets/images/icons/home-trend-up.svg"
          className="w-6 h-6 lg:w-[34px] lg:h-[34px]"
          alt="Sustainability icon"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-1 lg:gap-[5px]">
        <p className="font-bold text-base lg:text-lg leading-6 lg:leading-[27px]">
          Sustain for Business
        </p>
        <p className="text-sm leading-5 lg:leading-[24px]">
          Lorem available without even higher tax that cost much
        </p>
      </div>
    </div>
  </div>
</section>
  )
}

export default Benefits
