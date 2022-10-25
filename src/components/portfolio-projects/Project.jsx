import React from "react";

const Project = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex flex-col items-center text-center bg-accent-brown rounded-md p-4 hover:scale-110 transiion-all duration-300 cursor-pointer"
    >
      <a href={item}>
        <div>
          <img className="rounded-md" src={item.image} alt="" />
        </div>
        <p className="capitalize text-primary text-md mb-3">{item.category}</p>
        <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
        <p className="text-paragraph text-lg max-w-full text-center">{item.desc}</p>
      </a>
    </div>
  );
};

export default Project;
