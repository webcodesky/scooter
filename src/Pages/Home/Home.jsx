import NewsLatter from "../../Components/NewsLatter/NewsLatter";
import Accessories from "./Sections/Accessories";
import Colors from "./Sections/Colors";
import Gallery from "./Sections/Gallery";
import Landing from "./Sections/Landing";
import ProductInfo from "./Sections/ProductInfo";
import Testimonials from "./Sections/Testimonials";

export default function Home() {
  return (
    <div className="max-w-full lg:max-w-screen-2xl mx-auto px-10">
      <div>
        <Landing />
      </div>
      <div className="my-28">
        <ProductInfo />
      </div>
      <div className="my-28">
        <Accessories />
      </div>
      <div className="my-28">
        <Gallery />
      </div>
      <div className="my-28">
        <Colors />
      </div>
      <div className="my-28">
        <Testimonials />
      </div>
      <div className="my-28">
        <NewsLatter />
      </div>
    </div>
  );
}
