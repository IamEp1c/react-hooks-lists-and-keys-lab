import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  // console.log(projects);
  const eachProject = projects.map((project) => {
    console.log(project)
    // map is returning a new object with EACH individual objects
    // THEN I use the iterated name 'project' to assign each individual values dynamic as hell
    return <ProjectItem name = {project.name} about = {project.about} technologies = {project.technologies} />


  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{eachProject}</div>
    </div>
  );
}

export default ProjectList;

