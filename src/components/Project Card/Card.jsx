"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MotionDiv } from "../motionComponents/motionComponents";
const Card = ({ name, img, desc }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [125, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <>
      <MotionDiv
        className={styles.card}
        ref={ref}
        style={{ translateY, scale }}
      >
        <div className={styles.img}>
          <Image src={img} alt="" width={500} height={500} />
        </div>
        <div className={styles.desc}>
          <h5>{name}</h5>
          <p>{desc}</p>
          <button>
            <div className={styles.arrow}></div>
          </button>
        </div>
      </MotionDiv>
    </>
  );
};

export default Card;
