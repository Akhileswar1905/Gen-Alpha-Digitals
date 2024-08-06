"use client";
import { useRef } from "react";
import Footer from "../Footer/Footer";
import styles from "./styles.module.css";
import { useScroll, useTransform, motion } from "framer-motion";
const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const translateX = useTransform(scrollYProgress, [0, 1], [-10, 0]);

  return (
    <>
      <div className={styles.container}>
        <motion.div
          className={styles.wrapper}
          ref={ref}
          style={{
            opacity,
            scale,
            translateX,
          }}
        >
          <div className={styles.section1}>
            <p>Let&apos;s Talk</p>
            <h1>What are you waiting for?</h1>
          </div>
          <div className={styles.section2}>
            <form>
              <input type="text" placeholder="Enter your name" />
              <input type="text" placeholder="Enter your email" />
              <textarea
                name="message"
                placeholder="Enter your message"
              ></textarea>
              <button>Send Message</button>
            </form>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
