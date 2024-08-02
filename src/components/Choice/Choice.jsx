import Image from "next/image";
import styles from "./styles.module.css";

const Choice = ({ img, title, desc }) => {
  return (
    <div className={styles.choice}>
      <Image src={img} width={75} height={75} alt="" />
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default Choice;
