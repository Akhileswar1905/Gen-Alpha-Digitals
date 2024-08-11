import Card from "@/components/Project Card/Card";
import styles from "./styles.module.css";
import Contact from "@/components/Contact/Contact";

const Projects = () => {
  const projects = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.first}>
          <small>Projects</small>
          <p className={styles.heading}>Our Works</p>
        </div>
        <div className={styles.cards}>
          {projects.map((i) => (
            <Card
              key={i}
              img={`/projects/project${i}.jpg`}
              name={`Project ${i}`}
              desc={`This is project ${i}`}
            />
          ))}
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Projects;
