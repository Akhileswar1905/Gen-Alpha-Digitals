import Image from "next/image";
import styles from "./styles.module.css";
import Contact from "../Contact/Contact";

const Card = ({ name, img, desc }) => {
  return (
    <>
      <div className={styles.card}>
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
      </div>
    </>
  );
};

export default Card;
