import Image from "next/image";
import styles from "./styles.module.css";
import { MotionPTag, MotionSmall } from "../motionComponents/motionComponents";

const varient = (delay) => ({
  hidden: {
    opacity: 0,

    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      delay: delay,
      duration: 0.75,
    },
  },
});

const Choice = ({ img, title, desc }) => {
  return (
    <div className={styles.choice}>
      <div className={styles.head__part}>
        <Image src={img} width={75} height={75} alt="" />
        <MotionSmall
          variants={varient(0)}
          initial="hidden"
          whileInView="visible"
        >
          {title}
        </MotionSmall>
      </div>
      <MotionPTag
        variants={varient(0.1)}
        initial="hidden"
        whileInView="visible"
      >
        {desc}
      </MotionPTag>
    </div>
  );
};

export default Choice;
