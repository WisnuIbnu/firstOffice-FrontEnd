import type { Office } from '../types/type'

const OfficeCard = ({office}: OfficeCardProps) => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  return (
  <a href="details.html" className="card block">
    <div className="flex flex-col rounded-2xl lg:rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden hover:shadow-md transition-shadow mx-12 sm:mx-0">
      {/* Thumbnail with badge */}
      <div className="thumbnail-container relative w-full h-[180px] sm:h-[200px]">
        <p className="absolute top-4 left-4 lg:top-5 lg:left-5 w-fit rounded-full px-3 py-1 lg:p-[6px_16px] bg-[#0D903A] font-bold text-xs lg:text-sm leading-5 lg:leading-[21px] text-[#F7F7FD]">
          Popular
        </p>
        <img
          src={`${baseURL}/${office.thumbnail}`}
          className="w-full h-full object-cover"
          alt="Office thumbnail"
          loading="lazy"
        />
      </div>

      {/* Card content */}
      <div className="card-detail-container flex flex-col p-4 lg:p-5 pb-5 lg:pb-[30px] gap-3 lg:gap-4">
        {/* Title */}
        <h3 className="line-clamp-2 font-bold text-lg lg:text-[22px] leading-7 lg:leading-[36px] min-h-[56px] lg:h-[72px]">
          {office.name}
        </h3>

        {/* Price and duration */}
        <div className="flex items-center justify-between">
          <p className="font-semibold text-base lg:text-xl leading-6 lg:leading-[30px]">
            {office.price}
          </p>
          <div className="flex items-center gap-1 lg:gap-[6px]">
            <p className="font-semibold text-sm lg:text-base">{office.duration} days</p>
            <img
              src="/assets/images/icons/clock.svg"
              className="w-5 h-5 lg:w-6 lg:h-6"
              alt="Duration icon"
              loading="lazy"
            />
          </div>
        </div>

        <hr className="border-[#F6F5FD]" />

        {/* Location and rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 lg:gap-[6px]">
            <img
              src="/assets/images/icons/location.svg"
              className="w-5 h-5 lg:w-6 lg:h-6"
              alt="Location icon"
              loading="lazy"
            />
            <p className="font-semibold text-sm lg:text-base">{office.city.name}</p>
          </div>
          <div className="flex items-center gap-1 lg:gap-[6px]">
            <p className="font-semibold text-sm lg:text-base">4.5/5</p>
            <img
              src="/assets/images/icons/Star 1.svg"
              className="w-5 h-5 lg:w-6 lg:h-6"
              alt="Rating icon"
              loading="lazy"
            />
          </div>
        </div>

        <hr className="border-[#F6F5FD]" />

        {/* Features */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 lg:gap-[6px]">
            <img
              src="/assets/images/icons/wifi.svg"
              className="w-5 h-5 lg:w-6 lg:h-6"
              alt="WiFi icon"
              loading="lazy"
            />
            <p className="font-semibold text-sm lg:text-base">Fast-Connection</p>
          </div>
          <div className="flex items-center gap-1 lg:gap-[6px]">
            <img
              src="/assets/images/icons/security-user.svg"
              className="w-5 h-5 lg:w-6 lg:h-6"
              alt="Security icon"
              loading="lazy"
            />
            <p className="font-semibold text-sm lg:text-base">Secure 100%</p>
          </div>
        </div>
      </div>
    </div>
  </a>
  )
}

export default OfficeCard

interface OfficeCardProps {
  office : Office
}
