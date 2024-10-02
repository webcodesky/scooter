/* eslint-disable react/prop-types */
import StarRatting from "../StarRatting/StarRatting";

export default function TestimonialsCard({ review }) {
  const { name, title, image, message, ratting } = review;

  return (
    <div className="flex flex-col gap-8 items-center ">
      <div>
        <StarRatting rating={ratting} />
      </div>
      <div>
        <p className="text-center text-[#42454A] text-[20px] font-[400]">
          {message}
        </p>
      </div>
      <div className="flex gap-4 items-center justify-normal">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="flex flex-col gap-1">
          <h3 className="text-[#42454A] text-[16px] font-[500]">{name}</h3>
          <p className="text-[#42454A] text-[14px] font-[400]">{title}</p>
        </div>
      </div>
    </div>
  );
}
