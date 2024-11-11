import { Link } from "react-router-dom";

const ProjectCard = ({project}) => {
    // let project = props.project;

    return (
        <div>
            <p><b>Title:</b> <Link to={`/projects/${project.slug}`} >{project.title}</Link></p>
            <p><b>Technologies:</b> {project.technologies}</p>
            <hr />
        </div>

    );
};


export default ProjectCard;