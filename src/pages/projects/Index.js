import { useState, useEffect } from "react";
import projectsJSON from '../../components/data/projects.json';
import ProjectCard from "../../components/ProjectCard";
import { Grid, GridItem } from "@chakra-ui/react"
// import { Button } from "../../components/ui/button"


const Index = () => {
    const [projectsList, setProjectsList] = useState(projectsJSON);

    const projectsCards = projectsList.map((project, index) => {
        return <ProjectCard key={index} project={project} />

    });

    return (
        <>
            <h1><b>Projects</b></h1>
            <Grid templateColumns="repeat(2, 1fr)" gap="6">
                {projectsCards}
            </Grid>
        </>
    )
}

export default Index;