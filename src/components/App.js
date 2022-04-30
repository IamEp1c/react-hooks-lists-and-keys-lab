import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";
import user from "../data/user";

const links = ["home", "about", "projects"];

function App() {
  return (
    <div>
      <NavBar links = {links}/>
      <Home username={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
      <ProjectList projects={user.projects}/>
    </div>
  );
}

export default App;
