
const Project = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex flex-col items-center p-4 text-center duration-300 rounded-md cursor-pointer bg-tertiary hover:scale-110 transiion-all"
    >
      <a href={item.link} rel="noreferrer" target="_blank">
        <div>
          <img className="w-full h-full max-h-[420px] rounded-md max-w-[800px]" src={item.image} alt="" />
        </div>
        <h3 className="mb-3 text-2xl font-semibold underline capitalize text-primary">{item.name}</h3>
        <p className="max-w-full text-lg font-semibold text-center text-primary">{item.desc}</p>
      </a>
    </div>
  );
};

export default Project;
