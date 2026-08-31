import { IoIosPhonePortrait, IoMdWatch } from 'react-icons/io';
import { FaCamera, FaHeadphonesAlt, FaSitemap } from 'react-icons/fa';
import { MdLaptopChromebook } from 'react-icons/md';

export default function StarterSection() {
  return (
    <div className="my-5 -mt-16">
      <div className=" grid grid-cols-3 md:grid-cols-3 gap-5 sm:p-5 lg:p-0 lg:grid-cols-6 mx-auto max-w-7xl shadow-xl rounded-2xl z-[1254152]">
        {/* icon 1  */}
        <div className=" flex flex-col justify-center space-y-1 p-2 rounded-2xl lg:p-10 lg:rounded-2xl lg:rounded-r-none items-center group hover:bg-brand-green/90">
          <div className=" rounded-full bg-brand-purple/10 group-hover:bg-brand-purple/100 w-12 h-12 p-3 flex flex-col justify-center items-center">
            <IoIosPhonePortrait
              size={30}
              className="text-brand-purple group-hover:text-white text-4xl"
            />
          </div>
          <h3 className="text-brand-purple font-montserrat font-semibold mt-2">Smartphone</h3>
          <p>Up to 40% off </p>
        </div>

        {/* icon 2  */}
        <div className=" flex flex-col justify-center space-y-1 p-2 rounded-2xl lg:p-10 lg:rounded-2xl items-center group hover:bg-brand-green/90">
          <div className=" rounded-full bg-brand-purple/10 group-hover:bg-brand-purple/100 w-12 h-12 p-3 flex flex-col justify-center items-center">
            <FaHeadphonesAlt
              size={30}
              className="text-brand-purple group-hover:text-white text-4xl"
            />
          </div>
          <h3 className="text-brand-purple font-montserrat font-semibold mt-2">Headphones</h3>
          <p>Up to 30% off </p>
        </div>

        {/* icon 3  */}
        <div className=" flex flex-col justify-center space-y-1 p-2 rounded-2xl lg:p-10 lg:rounded-2xl items-center group hover:bg-brand-green/90">
          <div className=" rounded-full bg-brand-purple/10 group-hover:bg-brand-purple/100 w-12 h-12 p-3 flex flex-col justify-center items-center">
            <IoMdWatch size={30} className="text-brand-purple group-hover:text-white text-4xl" />
          </div>
          <h3 className="text-brand-purple font-montserrat font-semibold mt-2">Smart Watches</h3>
          <p>Up to 35% off </p>
        </div>

        {/* icon 4  */}
        <div className=" flex flex-col justify-center space-y-1 p-2 rounded-2xl lg:p-10 lg:rounded-2xl items-center group hover:bg-brand-green/90">
          <div className=" rounded-full bg-brand-purple/10 group-hover:bg-brand-purple/100 w-12 h-12 p-3 flex flex-col justify-center items-center">
            <FaSitemap size={30} className="text-brand-purple group-hover:text-white text-4xl" />
          </div>
          <h3 className="text-brand-purple font-montserrat font-semibold mt-2">Accessories</h3>
          <p>Up to 20% off </p>
        </div>

        {/* icon 5  */}
        <div className=" flex flex-col justify-center space-y-1 p-2 rounded-2xl lg:p-10 lg:rounded-2xl items-center group hover:bg-brand-green/90">
          <div className=" rounded-full bg-brand-purple/10 group-hover:bg-brand-purple/100 p-3 w-12 h-12 flex flex-col justify-center items-center">
            <MdLaptopChromebook
              size={30}
              className="text-brand-purple group-hover:text-white text-4xl"
            />
          </div>
          <h3 className="text-brand-purple font-montserrat font-semibold mt-2">Laptops</h3>
          <p>Up to 25% off </p>
        </div>

        {/* icon 6  */}
        <div className=" flex flex-col justify-center space-y-1 p-2 rounded-2xl lg:p-10 lg:rounded-2xl lg:rounded-l-none items-center group hover:bg-brand-green/90">
          <div className=" rounded-full bg-brand-purple/10 group-hover:bg-brand-purple/100 w-12 h-12 p-3 flex flex-col justify-center items-center">
            <FaCamera size={30} className="text-brand-purple group-hover:text-white text-4xl" />
          </div>
          <h3 className="text-brand-purple font-montserrat font-semibold mt-2">Cameras</h3>
          <p>Up to 30% off </p>
        </div>
      </div>
    </div>
  );
}
