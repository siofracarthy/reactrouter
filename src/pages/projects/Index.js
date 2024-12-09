import { useState, useEffect } from "react";
import projectsJSON from '../../components/data/projects.json';
import ProjectCard from "../../components/ProjectCard";
import { Grid } from "@chakra-ui/react"
import FilterProjects from "../../components/FilterProjects";
// import { Button } from "../../components/ui/button"


const Index = () => {
    const [projectsList, setProjectsList] = useState(projectsJSON);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredList, setFilteredList] = useState(projectsJSON);
    const [selectedCategory, setSelectedCategory] = useState("All")

    useEffect(() => {
        console.log(searchTerm)

        if (searchTerm.length === "") {
            setFilteredList(projectsList)
        } else if (searchTerm.length <= 1) {
            return;
        }
        else {
            let result = projectsList.filter((project) => {
                return project.title.toLowerCase().includes(searchTerm.toLowerCase());


            });

            setFilteredList(result)
        }
    }, [searchTerm])

    useEffect(() => {
        console.log(searchTerm)

        if (selectedCategory === "All") {
            setFilteredList(projectsList)
        } 
        else {
            let result = projectsList.filter((project) => {
                return project.categories.includes(selectedCategory);


            });

            setFilteredList(result)
        }
    }, [selectedCategory])

    const projectsCards = filteredList.map((project, index) => {
        return <ProjectCard key={index} project={project} />

    });

    return (
        <>
            <h1><b>Projects</b></h1>
            <FilterProjects setSearchTerm={setSearchTerm} setSelectedCategory={setSelectedCategory} />
            <Grid templateColumns="repeat(2, 1fr)" gap="6">
                {projectsCards}
            </Grid>
        </>
    )
}

export default Index;