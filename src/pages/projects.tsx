import React, { useState } from 'react'
import ProjectCard from '../../components/ProjectCard'
import { projects as projectsData } from '../../data'
import ProjectsNavbar from '../../components/ProjectsNavbar'
import { Category } from '../../type'
import { motion } from 'framer-motion'
import { Stagger, fadeInUp, routeFading } from '../../animations'

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");
  const [showDetail,setShowDetail]=useState<number|null>(null);

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };
    return (
    <motion.div variants={routeFading} initial="initial" animate="animate" exit="exit"
     className="px-5 my-6 py-2 overflow-y-scroll dark:bg-slate-800" style={{ height: "85vh" }}>
      <ProjectsNavbar
        handleFilterCategory={handleFilterCategory}
        active={active}
      />

      <motion.div variants={Stagger} initial="initial"animate="animate"
      className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project) => (
          <motion.div variants={fadeInUp}
          className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 " key={project.id} >
            <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail}/>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>)
}

export default Projects
