import { useState, useEffect } from "react";
import { projectsData } from "../../data";
import { projectsNav } from "../../data";
import loadable from '@loadable/component';

const Project = loadable(() => import('./Project'));

const Projects = () => {
  const [item, setItem] = useState({ name: "featured" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // get projects based on item
    if (item.name === "featured") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {/* projects nav */}
      <nav className="max-w-xl mx-auto mb-12">
        <ul className="flex flex-col items-center text-paragraph sm:flex-row justify-evenly">
          {projectsNav.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? "active" : ""
                } cursor-pointer capitalize m-4`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      {/* projects */}
      <section className="grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
        {projects.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </section>
    </div>
  );
};

export default Projects;
