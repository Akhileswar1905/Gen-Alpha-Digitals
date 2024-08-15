"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

const contain = (delay) => ({
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: delay,
      duration: 0.6,
    },
  },
});
const Brands = ({ bg }) => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: bg ? bg.backgroundColor : "#fff",
        borderTopLeftRadius: bg ? "50px" : "",
        borderTopRightRadius: bg ? "50px" : "",
      }}
    >
      <motion.h1 variants={contain(0)} initial="hidden" whileInView="visible">
        Brands In Collaboration With Us
      </motion.h1>
      <motion.p variants={contain(0.1)} initial="hidden" whileInView="visible">
        Partnering with top brands, we collaborate to bring innovative and
        impactful solutions to market.
      </motion.p>

      <div className={styles.brands}>
        <div className={styles.brand}>
          <Image
            src="/brands/brand1.jpg"
            alt="brand1"
            width={500}
            height={500}
          />
        </div>
        <div className={styles.brand}>
          <Image
            src="/brands/brand2.jpg"
            alt="brand2"
            width={500}
            height={500}
          />
        </div>
        <div className={styles.brand}>
          <Image
            src="/brands/brand3.jpg"
            alt="brand3"
            width={500}
            height={500}
          />
        </div>
        <div className={styles.brand}>
          <Image
            src="/brands/brand4.jpg"
            alt="brand4"
            width={500}
            height={500}
          />
        </div>
        <div className={styles.brand}>
          <Image
            src="/brands/brand5.jpg"
            alt="brand5"
            width={500}
            height={500}
          />
        </div>
        <div className={styles.brand}>
          <Image
            src="/brands/brand6.jpg"
            alt="brand6"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
