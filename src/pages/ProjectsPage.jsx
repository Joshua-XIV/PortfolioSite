import ProjectsDisplay from '../components/ProjectsDisplay'

const ProjectsPage = ({gradient}) => {
  return (
    <div className='w-full flex justify-center items-center mt-20'>
      <div className='w-5xl flex flex-col justify-center'>
          <ProjectsDisplay gradient={gradient} home={false}/>
      </div>
    </div>
  )
}

export default ProjectsPage