import Image from "next/image";
import styles from "./styles.module.css";

const Card = ({ name, img, role }) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <Image src={img} alt="" width={100} height={100} />
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default Card;
