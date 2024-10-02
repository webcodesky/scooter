import PrimaryTitle from "../../../UI/PrimaryTitle/PrimaryTitle";

export default function Accessories() {
  return (
    <div className="">
      <PrimaryTitle>
        <span className="text-[25px] lg:text-[50px] font-[700]">Multiple Accessories</span>
        <span className="text-[10px] lg:text-[20px] font-[400]">
          There are multiple modes for the scooter for your multiple needs.
        </span>
      </PrimaryTitle>
      <div className="w-full flex flex-col gap-4 lg:gap-0 lg:flex-row items-center py-16">
        <div className="flex flex-col gap-4 justify-start">
          <PrimaryTitle>
            <span className="text-[20px] lg:text-[40px] font-[700]">Golf Bag Rock</span>
          </PrimaryTitle>
          <ul className="flex flex-col gap-4 items-start">
            {[
              "Material : Aluminium alloy",
              "Color : Black",
              "Capacity : 45lbs",
              "Ease : Steady & adjustable",
            ].map((item, index) => (
              <li key={index} className="flex gap-2 items-center">
                <img src="https://i.ibb.co.com/ccCYFqr/check-Icon.png" alt="" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <img src="https://i.ibb.co.com/hLg5Kq9/accessories-1.png" alt="" />
        <img src="https://i.ibb.co.com/sRKRdbB/accessories-2.png" alt="" />
      </div>
      <div className="w-full flex flex-col gap-4 lg:gap-0 lg:flex-row-reverse items-center justify-between py-16">
        <div className="flex flex-col gap-4 justify-start">
          <PrimaryTitle>
            <span className="text-[20px] lg:text-[40px] font-[700]">Shopping Rack</span>
          </PrimaryTitle>
          <ul className="flex flex-col gap-4 items-start">
            {[
              "Material : Aluminium alloy",
              "Color : Black",
              "Capacity : 45lbs",
              "Ease : Steady & adjustable",
            ].map((item, index) => (
              <li key={index} className="flex gap-2 items-center">
                <img src="https://i.ibb.co.com/ccCYFqr/check-Icon.png" alt="" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <img src="https://i.ibb.co.com/rtzs9b6/accessories-4.png" alt="" />
        <img src="https://i.ibb.co.com/bW0M4Bf/accessories-3.png" alt="" />
      </div>
      <div className="mx-auto text-center">
        <button className="px-8 py-4 text-lg font-bold border-[2px] border-[#42454A]">
          More Accessories Coming Soon
        </button>
      </div>
    </div>
  );
}
