import { Outlet } from "react-router-dom";
import Footer from "./Shared/Footer/Footer";
import Navbar from "./Shared/Navbar/Navbar";

export default function Root() {
  return (
    <>
      <section className="py-6 border-b-[1px] border-[#EAE8F3] bg-white z-[999] w-full">
        <Navbar />
      </section>
      {/* content */}
      <div className="my-16">
        <Outlet/>
      </div>
      <section className="w-full bg-primary">
        <Footer />
      </section>
    </>
  );
}
