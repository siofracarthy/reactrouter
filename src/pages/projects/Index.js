import { useState, useEffect } from "react";
import projectsJSON from '../../components/data/projects.json';
import ProjectCard from "../../components/ProjectCard";

const Index = () => {
    const [projectsList, setProjectsList] = useState(projectsJSON);

    const projectsCards = projectsList.map((project, index) => {
        return  <ProjectCard key={index} project={project} />

    });

    return (
        <>
            <h1>Projects</h1>
            {projectsCards}
        </>
    )
}

export default Index;