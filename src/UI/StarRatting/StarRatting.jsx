/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

export default function StarRatting({ rating, maxStars=5 }) {
  const stars = Array.from({ length: maxStars }, (_, index) => {

    return index < rating ? <FaStar/> : <FaStarHalfAlt/>;
  });

  return (
    <div className="flex gap-2 justify-center items-center">
      {stars.map((star, index) => (
        <span key={index} style={{ fontSize: "24px", color: "#FFD700" }}>
          {star}
        </span>
      ))}
    </div>
  );
}
