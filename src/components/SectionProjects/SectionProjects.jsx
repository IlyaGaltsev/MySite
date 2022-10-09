import projects from '../../data/projects';
import ProjectCard from './components/ProjectCard/ProjectCard';
import './SectionProjects.css';

function SectionProjects() {
  return (
    <div className="section-projects__wrapper" id='projects'>
      <h2 className='section-projects__title'>Проекты</h2>
      <p className='section-projects__text'>Я усердно работаю, чтобы сделать себя, своё будущее и я знаю, что империи не строятся за один день...</p>
      <div className="section-projects__projects-cards">
        {projects.map(project => <ProjectCard key={project.id} project={project}/>)}
      </div>
    </div>
  );
}

export default SectionProjects;