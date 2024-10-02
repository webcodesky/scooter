import PrimaryTitle from "../../../UI/PrimaryTitle/PrimaryTitle";

export default function ProductInfo() {
  return (
    <div className="">
      <PrimaryTitle>
        <span className="text-[25px] lg:text-[50px] font-[700]">Product Information</span>
        <span className="text-[10px] lg:text-[20px] font-[400]">
          Our Scooter has following unique design and technology features:
        </span>
      </PrimaryTitle>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2">
          <figure>
            <img src="https://i.ibb.co.com/s9H9FvC/proInfo.png" alt="" />
          </figure>
        </div>
        <div className="w-full lg:w-1/2 flex justify-end">
          <ul className="flex flex-col gap-4 items-start">
            {[
              "Lightweight aircraft grade aluminium frame",
              "Car grade lithium battery",
              "Self-balanced",
              "Plug n play",
              "Quick release adapter",
              "RFID key card",
            ].map((item, index) => (
              <li key={index} className="flex gap-2 items-center">
                <img src="https://i.ibb.co.com/ccCYFqr/check-Icon.png" alt="" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-24">
        <PrimaryTitle>
          <span className="text-[25px] lg:text-[50px] font-[700]">High Efficiency Motor</span>
          <span className="text-[10px] lg:text-[20px] font-[400]">
            More torque for powerful riding with 22% maximum hill climbing
            capability.
          </span>
        </PrimaryTitle>
          <figure className="flex justify-center">
            <img className="w-full" src="https://i.ibb.co.com/TRbX3BL/high-Efeciency.png" alt="" />
          </figure>
      </div>
    </div>
  );
}
