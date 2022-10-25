import { skills } from '../../data';

const Skills = () => {
  return (
    <section className='bg-accent py-12 min-h-[227px] flex items-center'>
      <div className='container mx-auto'>
        <div
          className='flex flex-wrap items-center justify-around'
        >
          {skills.map((skill, index) => {
            return (
              <div
                className='flex items-center justify-center'
                key={index}
              >
                <img className='h-[75px] w-full' src={skill.image} alt='' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;