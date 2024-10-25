import Slider from "@/app/components/Slider";
import ProductList from "./components/ProductList";

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-2 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
