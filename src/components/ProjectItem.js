import React from "react";


function ProjectItem({  name, about, technologies }) {
  const technologyObj = technologies.map(technology => {
    console.log(technology)
    return <span>{technology}</span>
  })
  return (
    <div className="newProject-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologyObj}
      </div>
    </div>
  );
}

export default ProjectItem;
