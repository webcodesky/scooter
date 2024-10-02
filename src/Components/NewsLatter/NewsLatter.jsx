import PrimaryTitle from "../../UI/PrimaryTitle/PrimaryTitle";

export default function NewsLatter() {
  return (
    <div className="flex flex-col gap-10 justify-center w-full items-center">
      <PrimaryTitle>
        <span className="text-[25px] lg:text-[50px] font-[700]">Subscribe To Newsletter</span>
        <span className="text-[10px] lg:text-[20px] font-[400]">
        Subscribe to our newsletter to get amazing offers in future.
        </span>
      </PrimaryTitle>
      <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-0 lg:justify-between bg-[#FAFAFA] border-[1px] border-[#F5F5F5] px-8 py-4 rounded-md w-full lg:w-[40%]">
        <input
          className="w-full lg:w-[70%]"
          type="email"
          placeholder="Enter Your Email"
          name="newsLatter"
        />
        <button className="px-7 py-4 bg-[#42454A] text-[#FFF] rounded-md uppercase text-sm w-full lg:w-[30%]">
          Get Start
        </button>
      </div>
    </div>
  );
}
