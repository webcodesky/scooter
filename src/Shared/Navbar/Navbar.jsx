import { useState } from "react";
import brandLogo from "../../../public/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";

export default function Navbar() {
  const [clickedBars, setClickedBars] = useState(false);

  const navLinks = (
    <>
      <li>Products</li>
      <li>Gallery</li>
      <li>Contact</li>
    </>
  );

  return (
    <nav className="flex justify-between items-center max-w-full lg:max-w-screen-2xl mx-auto px-10">
      <div className="brand_name">
        <a href="#">
          <img src={brandLogo} alt="brand_logo" />
        </a>
      </div>

      <div className="navLinks hidden lg:flex uppercase">
        <ul className="flex gap-10 text-same">{navLinks}</ul>
      </div>

      <div className="buttons hidden lg:flex gap-10 ">
        <button className="uppercase text-sm">Log In</button>
        <button className="px-7 py-4 bg-[#42454A] text-[#FFF] rounded-md uppercase text-sm">
          Sign Up
        </button>
      </div>
      <div className="flex lg:hidden text-lg cursor-pointer">
        <FaBarsStaggered onClick={() => setClickedBars(!clickedBars)} />
      </div>
      {/* mobile links */}
      {clickedBars && (
        <div className="absolute left-0 top-[83.3px] w-full h-full bg-[#FFF] text-[#42454A] flex justify-center items-center">
          <ul className="flex flex-col gap-10 uppercase">{navLinks}</ul>
        </div>
      )}
    </nav>
  );
}
