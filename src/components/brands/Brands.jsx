import { brands } from "../../data";

const Brands = () => {
  return (
    <section className="min-h-[147px] bg-accent flex items-center justify-center">
      <div className="container flex flex-wrap items-center justify-around w-full">
        {brands.map((brand, index) => {
          return (
            <div key={index}>
              <img src={brand.img} className="h-[55px] w-[100%]" alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
