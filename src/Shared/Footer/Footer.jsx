import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <nav className="max-w-full lg:max-w-screen-2xl mx-auto flex flex-col pr-10">
      <div className="flex justify-between items-center">
        <div className="w-1/2 lg:flex hidden">
          <figure>
            <img src="https://i.ibb.co.com/3yBZ3Zz/footer.png" alt="footer" />
          </figure>
        </div>
        <div className="w-1/2 hidden lg:flex flex-col-2 lg:flex-row gap-10 justify-between ">
          <div>
            <h2 className="text-[#FBFBFB] font-[700] mb-4 text-[22px]">
              About
            </h2>
            <ul className="flex flex-col gap-6">
              {["Company", "Teams", "Profile", "Careers"].map((item, index) => (
                <li
                  className="text-[#FBFBFB] font-[400] text-[16px]"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[#FBFBFB] font-[700] mb-4 text-[22px]">
              Resources
            </h2>
            <ul className="flex flex-col gap-6">
              {["Contact", "Application", "FAQ Features"].map((item, index) => (
                <li
                  className="text-[#FBFBFB] font-[400] text-[16px]"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[#FBFBFB] font-[700] mb-4 text-[22px]">
              Legals
            </h2>
            <ul className="flex flex-col gap-6">
              {["Copyright Privacy", "Policy Disclaimer", "Terms"].map(
                (item, index) => (
                  <li
                    className="text-[#FBFBFB] font-[400] text-[16px]"
                    key={index}
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
            <div className="flex justify-between gap-4 mt-6">
              <div className="p-3 rounded-full bg-white">
                <FaFacebookF/>
              </div>
              <div className="p-3 rounded-full bg-white">
              <FaTwitter/>
              </div>
              <div className="p-3 rounded-full bg-white">
              <FaInstagramSquare/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6">
        <p className="text-[#FBFBFB] font-[400] text-[18px] text-center">
          © Copyright 2021. All rights reserved.
        </p>
      </div>
    </nav>
  );
}
