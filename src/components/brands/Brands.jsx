import { brands } from "../../data";

const Brands = () => {
  return (
    <section className="min-h-[15vh] bg-accent flex items-center justify-center">
      <div className="container flex flex-wrap items-center justify-around w-full">
        {brands.map((brand, index) => {
          return (
            <div key={index}>
              <a href={brand.href} rel='noreferrer' target='_blank'>
              <img src={brand.img} className="h-[55px] w-[100%] hover:scale-125 transition-all duration-300" alt="" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
