import Image from "next/image";
import styles from "./styles.module.css";

const Ani = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img1Container}>
        <Image src="/img1.png" alt="" width={100} height={100} />
      </div>
      <div className={styles.img2Container}>
        <Image src="/img2.png" alt="" width={100} height={100} />
      </div>
    </div>
  );
};

export default Ani;
