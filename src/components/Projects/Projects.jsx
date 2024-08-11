"use client";

import styles from "./styles.module.css";
import Card from "../Project Card/Card";
import Link from "next/link";

const images = [
  "/projects/project1.jpg",
  "/projects/project2.jpg",
  "/projects/project3.jpg",
  "/projects/project4.jpg",
];

const Projects = () => {
  return (
    <div className={styles.container}>
      <h1>See Our Works</h1>
      <div className={styles.wrapper}>
        {images.map((image, i) => (
          <Card
            key={i}
            img={image}
            name={`Project ${i}`}
            desc={`This is project ${i}`}
          />
        ))}
      </div>
      <Link href={"/projects"}>
        <button className={styles.btn}>View All</button>
      </Link>
    </div>
  );
};

export default Projects;
