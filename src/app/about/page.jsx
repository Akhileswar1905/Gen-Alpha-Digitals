"use client";

import { MotionDiv } from "@/components/motionComponents/motionComponents";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Contact from "@/components/Contact/Contact";

const Page = () => {
  const animate = (ini, fin) => ({
    hidden: {
      opacity: 0.5,
      left: ini,
    },
    visible: {
      opacity: 1,
      left: fin,
      transition: {
        duration: 1.8,
      },
    },
  });

  useEffect(() => {
    const svg = document.querySelector("svg.curve");
    const path = document.querySelector("svg.curve path");
    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = 0;

    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const totalDistance = 2700;
      const scrollPercent = scrollValue / totalDistance;
      const currentPoint = scrollPercent * pathLength;
      path.style.strokeDashoffset = (pathLength - currentPoint) * 1.5;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.addEventListener("scroll", handleScroll);
          } else {
            window.removeEventListener("scroll", handleScroll);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(svg);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const scroller = document.querySelector(`.${styles.scroller__inner}`);
    const images = scroller.querySelectorAll("img");
    const totalWidth = Array.from(images).reduce(
      (acc, img) => acc + img.width,
      0
    );

    scroller.style.animationDuration = `${totalWidth / 50}px`;
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>About</h1>
        </div>
        <div className={styles.content}>
          <div className={`${styles.svgSection}`}>
            <svg
              width="1229"
              height="2213"
              viewBox="0 0 1229 2213"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="curve"
            >
              <path
                d="M542.559 -6V376.872C542.559 410.009 569.422 436.872 602.559 436.872H1166C1199.14 436.872 1226 463.735 1226 496.872V772.804C1226 805.941 1199.14 832.804 1166 832.804H63C29.8629 832.804 3 859.666 3 892.804V1173.84C3 1206.97 29.8629 1233.84 63 1233.84H1166C1199.14 1233.84 1226 1260.7 1226 1293.84V1590.44C1226 1623.87 1198.68 1650.86 1165.25 1650.44L64.9552 1636.67C31.0651 1636.24 3.5508 1663.95 4.21591 1697.84L9.34543 1959.18C9.98671 1991.85 36.6557 2018 69.3339 2018H318.5H620.713C628.28 2018 635.568 2020.86 641.116 2026.01L840 2210.5"
                stroke="#6A59FF"
                stroke-width="8"
              />
            </svg>

            <svg
              width="1229"
              height="2213"
              viewBox="0 0 1229 2213"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="underlay"
            >
              <path
                d="M542.559 -6V376.872C542.559 410.009 569.422 436.872 602.559 436.872H1166C1199.14 436.872 1226 463.735 1226 496.872V772.804C1226 805.941 1199.14 832.804 1166 832.804H63C29.8629 832.804 3 859.666 3 892.804V1173.84C3 1206.97 29.8629 1233.84 63 1233.84H1166C1199.14 1233.84 1226 1260.7 1226 1293.84V1590.44C1226 1623.87 1198.68 1650.86 1165.25 1650.44L64.9552 1636.67C31.0651 1636.24 3.5508 1663.95 4.21591 1697.84L9.34543 1959.18C9.98671 1991.85 36.6557 2018 69.3339 2018H318.5H620.713C628.28 2018 635.568 2020.86 641.116 2026.01L840 2210.5"
                stroke="#f0f0f0"
                stroke-width="10"
              />
            </svg>
          </div>
          <MotionDiv
            variants={animate("0%", "70.5%")}
            initial="hidden"
            whileInView="visible"
            className={`${styles.box} ${styles.box1}`}
          ></MotionDiv>
          <MotionDiv
            variants={animate("100%", "13%")}
            initial="hidden"
            whileInView="visible"
            className={`${styles.box} ${styles.box2}`}
          ></MotionDiv>
          <MotionDiv
            variants={animate("0%", "70.5%")}
            initial="hidden"
            whileInView="visible"
            className={`${styles.box} ${styles.box3}`}
          ></MotionDiv>
          <MotionDiv
            variants={animate("100%", "13%")}
            initial="hidden"
            whileInView="visible"
            className={`${styles.box} ${styles.box4}`}
          ></MotionDiv>
        </div>
      </div>
      {/* Team Section */}
      <div className={styles.team}>
        <h2 className={styles.team__title}>Meet the Team</h2>
        <div className={styles.scroller}>
          <ul className={`${styles.taglist} ${styles.scroller__inner}`}>
            <li>
              <Image
                alt="Person"
                src="/ppl/Person1.jpg"
                width={350}
                height={500}
              />
              <Image
                alt="Person"
                src="/ppl/Person2.jpg"
                width={350}
                height={500}
              />
              <Image
                alt="Person"
                src="/ppl/Person3.jpg"
                width={350}
                height={500}
              />
              <Image
                alt="Person"
                src="/ppl/Person4.jpg"
                width={350}
                height={500}
              />
              <Image
                alt="Person"
                src="/ppl/Person5.jpg"
                width={350}
                height={500}
              />
              <Image
                alt="Person"
                src="/ppl/Person6.jpg"
                width={350}
                height={500}
              />
              <Image
                alt="Person"
                src="/ppl/Person1.jpg"
                width={350}
                height={500}
                aria-hidden="true"
              />
              <Image
                alt="Person"
                src="/ppl/Person2.jpg"
                width={350}
                height={500}
                aria-hidden="true"
              />
              <Image
                alt="Person"
                src="/ppl/Person3.jpg"
                width={350}
                height={500}
                aria-hidden="true"
              />
              <Image
                alt="Person"
                src="/ppl/Person4.jpg"
                width={350}
                height={500}
                aria-hidden="true"
              />
              <Image
                alt="Person"
                src="/ppl/Person5.jpg"
                width={350}
                height={500}
                aria-hidden="true"
              />
              <Image
                alt="Person"
                src="/ppl/Person6.jpg"
                width={350}
                height={500}
                aria-hidden="true"
              />
            </li>
          </ul>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Page;
