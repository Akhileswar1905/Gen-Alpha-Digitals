"use client";
import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import gsap from "gsap";
const Cursor = () => {
  const moveCursor = (e) => {
    gsap.to(cursor.current, {
      duration: 0.5,
      x: e.clientX,
      y: e.clientY,
    });
    gsap.to(followerCursor.current, {
      duration: 0.7,
      x: e.clientX,
      y: e.clientY,
    });
  };

  const cursor = useRef(null);
  const followerCursor = useRef(null);
  useEffect(() => {
    gsap.set(cursor, {
      xPercent: 100,
      yPercent: 100,
    });
    gsap.set(followerCursor, {
      xPercent: -20,
      yPercent: -20,
    });
    window.addEventListener("mousemove", moveCursor);
  }, []);
  return (
    <div className={styles.main}>
      <div ref={cursor} className={styles.cursor}></div>
      <div ref={followerCursor} className={styles.followingCursor}></div>
    </div>
  );
};

export default Cursor;
