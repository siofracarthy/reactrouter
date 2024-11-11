import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projectsJSON from '../../components/data/projects.json';


const Show = () => {
    const [projectsList, setProjectsList] = useState(projectsJSON);
    const [project, setProject] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        const found = projectsList.find((project) => {
            return project.slug === slug;
        })

        setProject(found);
        // console.log(found);

    }, []);

    if(!project) return <h2>Loading...</h2>
    
    return (
        <>
            <h2>Title: {project.title} </h2>
            <p>{project.description} </p>
            <p>{project.technologies} </p>
        </>

    )
}

export default Show;