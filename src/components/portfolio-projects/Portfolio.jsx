import loadable from '@loadable/component';

const Projects = loadable(() => import('./Projects'));

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center mb-[-45px]'>
          <h2 className='section-title text-accent-hover font-light before:content-portfolio relative before:absolute before:opacity-80 before:-top-[2rem] before:-left-[83%] before:hidden before:lg:block'>
            My latest work
          </h2>
          <p className='text-2xl subtitle'>
            Here are some of my most recent projects
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;