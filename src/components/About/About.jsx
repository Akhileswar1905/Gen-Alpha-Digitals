"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import { delay, motion } from "framer-motion";

const contain = (delay) => ({
  hidden: { opacity: 0, x: "-100%" },
  visible: { opacity: 1, x: 0, transition: { delay: delay, duration: 0.8 } },
});

const About = () => {
  return (
    <div className={styles.container}>
      <small className={styles.heading}>
        Explore Our <br />
        <i
          style={{
            color: "var(--accent)",
            fontWeight: 500,
          }}
        >
          Dynamic
        </i>{" "}
        Digital Solutions
      </small>
      <div className={styles.services}>
        <motion.div
          variants={contain(0)}
          initial="hidden"
          whileInView="visible"
          className={styles.service}
        >
          <Image
            src={"/services/service1.png"}
            width={50}
            height={50}
            alt="service"
          />
          <h6>Product Branding and Designing</h6>
          <small>
            Blending creativity and strategy, we create compelling brand
            identities with memorable visuals that align with your vision, from
            logos to complete brand ecosystems.
          </small>
          <button className={styles.btn}>Learn More</button>
        </motion.div>
        <motion.div
          variants={contain(0.1)}
          initial="hidden"
          whileInView="visible"
          className={styles.service}
        >
          <Image
            src={"/services/service2.png"}
            width={50}
            height={50}
            alt="service"
          />
          <h6>Product Packaging</h6>
          <small>
            Enhance product presentation with functional, sustainable packaging
            that stands out and tells your brand&apos;s story, leaving a lasting
            impression on customers.
          </small>
          <button className={styles.btn}>Learn More</button>
        </motion.div>
        <motion.div
          variants={contain(0)}
          initial="hidden"
          whileInView="visible"
          className={styles.service}
        >
          <Image
            src={"/services/service3.png"}
            width={50}
            height={50}
            alt="service"
          />
          <h6>Technology and Development</h6>
          <small>
            We develop cutting-edge tech solutions that streamline operations
            and enhance user experiences, leveraging the latest trends for
            robust and scalable systems.
          </small>
          <button className={styles.btn}>Learn More</button>
        </motion.div>
        <motion.div
          variants={contain(0.1)}
          initial="hidden"
          whileInView="visible"
          className={styles.service}
        >
          <Image
            src={"/services/service4.png"}
            width={50}
            height={50}
            alt="service"
          />
          <h6>Advertisment and Marketing</h6>
          <small>
            Our data-driven advertising and marketing services combine creative
            storytelling with strategic campaigns to maximize your brand&apos;s
            reach and impact across multiple platforms.
          </small>
          <button className={styles.btn}>Learn More</button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
