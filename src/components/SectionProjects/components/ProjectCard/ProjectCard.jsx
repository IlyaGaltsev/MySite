import './ProjectCard.css';
import {ImLink, ImGithub} from "react-icons/im";
function ProjectCard({project}) {
    const{image, name, description,link,github,technologies} = project;
  return (
    <div className="project-card__wrapper">
        <img className="project-card__image" src={image} width={'100%'} alt="i" />
      <div className="project_card__contant">
       <h3 className='project_card__title'>{name}</h3>
       <p className='project_card__description text_16px'>{description}</p>
       <div className="project_card__technologies">
        {technologies.map(techno => <p className='text_16px' id={techno.id}>{techno.name}</p>)}
       </div>
       <div className="project_card__links">
        {(link!=='/')
        ?<a href={link}>
          <ImLink size={24}/>
         </a>
        :null}
        {(github!=='/')
        ?<a href={github}>
          <ImGithub size={24}/>
         </a>
        :null}
        
       </div>
      </div>
      
    </div>
  );
}

export default ProjectCard;