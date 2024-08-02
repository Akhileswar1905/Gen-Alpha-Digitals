import styles from "./styles.module.css";
import Image from "next/image";
import Contact from "@/components/Contact/Contact";
import Card from "@/components/Project Card/Card";

const Projects = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.first}>
          <small>Projects</small>
          <p className={styles.heading}>Our Works</p>
        </div>
        <div className={styles.cards}>
          <Card
            name={"Project 1"}
            img={"/projects/project1.jpg"}
            desc={"Description of project 1"}
          />
          <Card
            name={"Project 2"}
            img={"/projects/project2.jpg"}
            desc={"Description of project 2"}
          />
          <Card
            name={"Project 3"}
            img={"/projects/project3.jpg"}
            desc={"Description of project 3"}
          />
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Projects;
