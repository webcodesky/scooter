import PrimaryTitle from "../../../UI/PrimaryTitle/PrimaryTitle";

export default function Gallery() {
  return (
    <div>
      <PrimaryTitle>
        <span className="text-[25px] lg:text-[50px] font-[700]">Gallery</span>
        <span className="text-[10px] lg:text-[20px] font-[400]">
          View gallery of our products and make yourself satisfied with our
          creation.
        </span>
      </PrimaryTitle>
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-6">
        <div className="flex flex-col justify-end gap-20 px-4">
          <div className="relative">
            <p className="absolute left-5 top-5">Scooter</p>
            <img src="https://i.ibb.co.com/vQLwc6W/gallery-3.png" alt="" />
          </div>
          <div className="flex flex-col gap-4">
            {[
              "Battery Images",
              "Spare Parts Images",
              "Charging Cable Images",
            ].map((item, index) => (
              <button
                key={index}
                className="px-8 py-4 text-lg font-bold border-[2px] border-[#42454A] rounded-lg"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-gap-20 px-4">
          <div className="relative">
            <p className="absolute left-5 top-5">Build Quality</p>
            <img src="https://i.ibb.co.com/XsDKpYn/gallery-1.png" alt="" />
          </div>
          <div className="relative">
            <p className="absolute left-1 top-5">Parts</p>
            <img src="https://i.ibb.co.com/4NmmtLL/gallery-2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
