import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href={"/"}>Logo</Link>
      </div>

      {/* Menu */}
      <div className={styles.menu}>
        <div className={styles.linkBox}>
          <div className={styles.label}>
            <p>Home</p>
          </div>
          <div className={styles.link}>
            <Link href={"/"}>
              <Image src={"/navbar/home.png"} alt="" width={25} height={25} />
            </Link>
          </div>
        </div>
        <div className={styles.linkBox}>
          <div className={styles.label}>
            <p>About Us</p>
          </div>
          <div className={styles.link}>
            <Link href={"/about"}>
              <Image src={"/navbar/about.png"} alt="" width={25} height={25} />
            </Link>
          </div>
        </div>
        <div className={styles.linkBox}>
          <div className={styles.label}>
            <p>Services</p>
          </div>
          <div className={styles.link}>
            <Link href={"/services"}>
              <Image
                src={"/navbar/services.png"}
                alt=""
                width={25}
                height={25}
              />
            </Link>
          </div>
        </div>
        <div className={styles.linkBox}>
          <div className={styles.label}>
            <p>Projects</p>
          </div>
          <div className={styles.link}>
            <Link href={"/projects"}>
              <Image
                src={"/navbar/projects.png"}
                alt=""
                width={25}
                height={25}
              />
            </Link>
          </div>
        </div>
        <div className={styles.linkBox}>
          <div className={styles.label}>
            <p>Case Studies</p>
          </div>
          <div className={styles.link}>
            <Link href={"/case-studies"}>
              <Image src={"/navbar/blog.png"} alt="" width={25} height={25} />
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Page */}
      <div className={styles.linkBox}>
        <div className={styles.label}>
          <p>Contact Us</p>
        </div>
        <div className={styles.contact}>
          <Link href={"/contact"}>
            <Image
              src={"/navbar/contact us.png"}
              alt=""
              width={35}
              height={35}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
