"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";

const Page = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const svg = document.querySelector("svg.curve");
    const path = document.querySelector("svg.curve path");

    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;

    const targetCoordinates = [
      { x: 1206, y: 512, id: 1 },
      { x: 328, y: 564, id: 2 },
      { x: 1207, y: 628, id: 3 },
      { x: 332, y: 680, id: 4 },
    ];

    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const totalDistance = document.body.clientHeight - window.innerHeight;
      const scrollPercent = scrollValue / totalDistance;
      const currentPoint = scrollPercent * pathLength;
      path.style.strokeDashoffset = pathLength - currentPoint;

      // Get the point on the path based on the current scroll position
      const { x, y } = path.getPointAtLength(currentPoint);

      // Check if the cursor is close to any target coordinates
      targetCoordinates.forEach((coord) => {
        const distance = Math.sqrt(
          Math.pow(coord.x - x, 2) + Math.pow(coord.y - y, 2)
        );
        if (distance < 10 && !visibleCards.includes(coord.id)) {
          setVisibleCards((prevCards) => [...prevCards, coord.id]);
        }
      });
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
  }, [visibleCards]);

  return (
    <div className={styles.container}>
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
        <div className={styles.box}>
          {visibleCards.includes(1) && (
            <div className={`${styles.card} ${styles.show}`}>Card 1</div>
          )}
          {visibleCards.includes(2) && (
            <div className={`${styles.card} ${styles.show}`}>Card 2</div>
          )}
          {visibleCards.includes(3) && (
            <div className={`${styles.card} ${styles.show}`}>Card 3</div>
          )}
          {visibleCards.includes(4) && (
            <div className={`${styles.card} ${styles.show}`}>Card 4</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
