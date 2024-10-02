import PrimaryTitle from "../../../UI/PrimaryTitle/PrimaryTitle";

export default function Colors() {
  return (
    <div className="">
      <PrimaryTitle>
        <span className="text-[25px] lg:text-[50px] font-[700]">Colors</span>
        <span className="text-[10px] lg:text-[20px] font-[400]">
          Checkout our products colors.
        </span>
      </PrimaryTitle>
      <div
        className="relative my-20 w-full h-full">
        <figure>
          <img className="w-full" src="https://i.ibb.co.com/VDG6GW1/colorsBg.png" alt="" />
        </figure>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:absolute bottom-[0%]">
          <img src="https://i.ibb.co.com/8bgwbj5/1.png" alt="" />
          <img src="https://i.ibb.co.com/P1k2QMM/2.png" alt="" />
          <img src="https://i.ibb.co.com/Y3w9jZL/3.png" alt="" />
          <img src="https://i.ibb.co.com/r6247vp/4.png" alt="" />
        </div>
      </div>
    </div>
  );
}
