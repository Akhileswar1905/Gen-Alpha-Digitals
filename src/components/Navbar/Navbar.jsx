"use client";
import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

// Improved naming for the animation variants function
const navVariants = (delay) => ({
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: delay,
      duration: 0.3,
    },
  },
});

const navLinks = [
  { label: "Home", href: "/", imgSrc: "/navbar/home.png", delay: 0 },
  {
    label: "About Us",
    href: "/about",
    imgSrc: "/navbar/about.png",
    delay: 0.1,
  },
  {
    label: "Services",
    href: "/services",
    imgSrc: "/navbar/services.png",
    delay: 0.2,
  },
  {
    label: "Projects",
    href: "/projects",
    imgSrc: "/navbar/projects.png",
    delay: 0.3,
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    imgSrc: "/navbar/blog.png",
    delay: 0.4,
  },
];

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href={"/"}>Logo</Link>
      </div>

      {/* Menu */}
      <div className={styles.menu}>
        {navLinks.map((link, index) => (
          <div className={styles.linkBox} key={index}>
            <div className={styles.label}>
              <p>{link.label}</p>
            </div>
            <motion.div
              variants={navVariants(link.delay)}
              initial="hidden"
              animate="visible"
              className={styles.link}
            >
              <Link href={link.href}>
                <Image
                  src={link.imgSrc}
                  alt={link.label}
                  width={25}
                  height={25}
                />
              </Link>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Contact Page */}
      <div className={styles.linkBox}>
        <div className={styles.label}>
          <p>Contact Us</p>
        </div>
        <motion.div
          variants={navVariants(0.5)}
          initial="hidden"
          animate="visible"
          className={styles.contact}
        >
          <Link href={"/contact"}>
            <Image
              src={"/navbar/contact us.png"}
              alt="Contact Us"
              width={35}
              height={35}
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
