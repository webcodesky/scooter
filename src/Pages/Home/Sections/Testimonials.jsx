import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import TestimonialsCard from "../../../UI/TestimonialsCard/TestimonialsCard";
import PrimaryTitle from "../../../UI/PrimaryTitle/PrimaryTitle";
import { useEffect } from "react";
import glide from "@glidejs/glide";

export default function Testimonials() {
  const reviews = [
    {
      name: "Serhiy Hipskyy",
      title: "CEO Universal",
      image: "https://i.ibb.co.com/g9bDc7J/person-3.png",
      message:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
      ratting: 5,
    },
    {
      name: "Justus Menke",
      title: "CEO Eronaman",
      image: 'https://i.ibb.co.com/nrcnV89/person-1.png"',
      message:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimu",
      ratting: 5,
    },
    {
      name: "Britain Eriksen",
      title: "CEO Universal",
      image: "https://i.ibb.co.com/xX3fMdz/person-2.png",
      message:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      ratting: 5,
    },
    {
      name: "Shahid Hasan",
      title: "CEO Division",
      image: "https://i.ibb.co.com/g9bDc7J/person-3.png",
      message:
        "These tags tell browsers to ignore anything between them. For example, say youre building a website.",
      ratting: 5,
    },
    {
      name: "Mahmud hasan",
      title: "CEO Division",
      image: "https://i.ibb.co.com/g9bDc7J/person-3.png",
      message:
        "These tags tell browsers to ignore anything between them. For example, say youre building a website.",
      ratting: 5,
    },
  ];

  useEffect(() => {
    const slider = new glide(".glide-04", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3500,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col gap-10 ">
      <PrimaryTitle>
        <span className="text-[25px] lg:text-[50px] font-[700]">
          Testimonials
        </span>
      </PrimaryTitle>
      <div className="glide-04 relative w-full ">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex gap-10 w-full overflow-hidden p-0">
            {reviews.map((item, index) => (
              <li
                key={index}
                className="shadow-xl py-[34px] px-[28px] border-[#FAFAFA] border-[1px]"
              >
                {" "}
                <TestimonialsCard review={item} />
              </li>
            ))}
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="mt-10 flex w-full items-center justify-center gap-2 p-4"
          data-glide-el="controls"
        >
          <button
            className="p-4 text-xl rounded-full bg-primary text-white"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <FaArrowLeftLong />
          </button>
          <button
            className="p-4 text-xl rounded-full bg-primary text-white"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
}
