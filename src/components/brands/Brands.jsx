import React from "react";

import { brands } from "../../data";

const Brands = () => {
  return (
    <section className="min-h-[147px] bg-accent flex items-center justify-center">
      <div className="container flex flex-row items-center w-full justify-evenly">
        {brands.map((brand, index) => {
          return (
            <div key={index}>
              <img src={brand.img} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
