import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosPlay } from "react-icons/io";

export default function Landing() {

  const info = [
    {
      name: "Net weight",
      number: 105,
      sub: "lbs",
    },
    {
      name: "Top Speed",
      number: 26,
      sub: "mph",
    },
    {
      name: "Max range",
      number: 38,
      sub: "Miles",
    },
    {
      name: "Max Torques",
      number: 89,
      sub: "nm",
    },
    {
      name: "Hill Climbing",
      number: "22%",
      sub: "Slope",
    },
    {
      name: "Hydralic Disc Brakes",
      number: "2x",
      sub: null,
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex items-start">
        {/* landing content */}
        <div className="w-full lg:w-[40%]">
          <div className="py-8 lg:py-16">
            <h2 className="text-4xl lg:text-7xl uppercase leading-[1.2em] text-[#42454A]">
              <span className="font-[100]">Let{"'"}s ride</span>
              <br />
              <span className="font-[700]">the future.</span>
            </h2>
          </div>
          <div className="w-[60%] h-1 bg-[#42454A]"></div>
          <div className="py-20">
            <p className="text-[22px] font-[400]">
              Simple and sleek design with users in mind.
            </p>
          </div>
          {/* buttons */}
          <div className="flex gap-20">
            <button className="flex justify-center items-center gap-4 text-xl">
              <span className="text-[#FFF] bg-[#42454A] py-4 px-6">
                <FaArrowRightLong />
              </span>
              <span>Buy Now</span>
            </button>
            <button className="flex justify-center items-center gap-6">
              <span className="hidden lg:flex">
                Watch our <br /> video how <br /> it works
              </span>
              <span className="relative">
                <img src="https://i.ibb.co.com/LQ2NSkD/Group-btn.png" alt="" />
                <IoIosPlay className="absolute left-[45%] top-[45%]"/>
              </span>
            </button>
          </div>
        </div>

        {/* landing img */}
        <div
          className="lg:w-[60%] lg:flex hidden"
          style={{
            backgroundImage: "url(https://i.ibb.co.com/59z6Wj5/bg.png)",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img src="https://i.ibb.co.com/Qpy2Wd9/landing.png" alt="" />
        </div>
      </div>
      <div className="flex justify-center lg:justify-end">
        <div className="flex justify-center items-center gap-10 py-6">
          <span>
            <img src="https://i.ibb.co.com/Gx9s1RK/slid-number.png" alt="" />
          </span>
          <span>
            <img src="https://i.ibb.co.com/pLJrgdV/arrows.png" alt="" />
          </span>
        </div>
      </div>
      {/* info */}
      <div className="flex flex-col lg:flex-row gap-6 justify-center items-center my-10">
        {info.map((item, index) => (
          <div
            key={index}
            className="p-8 rounded-md shadow-2xl flex flex-col justify-center items-center gap-2 w-full"
          >
            <h2 className="text-[#42454A] text-[36px] font-[600] flex gap-2 items-center justify-center">
              <span>{item.number}</span>
              <span className="text-[12px]">{item.sub}</span>
            </h2>
            <p className="text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
