"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Testimonial = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [125, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.wrapper}
        ref={ref}
        style={{
          opacity,
          scale,
          translateY,
        }}
      >
        <div className={styles.section1}>
          <h1>Testimonial Header</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            ratione totam sint ipsa quasi non, magni vel earum eaque,
            perspiciatis similique a nobis quod voluptatum nemo porro nihil.
            Excepturi, perferendis!
          </p>
        </div>
        <div>
          <Image
            src={"/images/client1.jpg"}
            alt="client"
            className={styles.client}
            width={564 / 2}
            height={752 / 2}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonial;
