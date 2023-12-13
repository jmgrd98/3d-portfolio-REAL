import { projects } from '../constants'

const Projects = () => {
  return (
    <section className='max-container'>
    <h1 className='head-text'>
      My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
    </h1>

    <div className='mt-5 flex flex-col gap-3 text-slate-500'>
      <p>I've embarked on numerous projects throughout the years, but these are the ones I hold closest to my heart</p>
    </div>


    <div className='flex flex-wrap my-20 gap-16'>
      {projects.map((project) => (
        <div className='lg:w-[400px] w-full' key={project.name}>
          <div>
            <div className={`btn-back rounded-xl ${project.theme}`} />
            <div>
              <img src={project.iconUrl} alt='Project Icon' className='w-1/2 h-1/2 object-contain'/>
            </div>
          </div>
        </div>
      ))}
    </div>
    </section>
  )
}

export default Projects