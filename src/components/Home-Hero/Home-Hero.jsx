import Image from "next/image";
import {
  MotionButton,
  MotionDiv,
  MotionPTag,
  MotionSmall,
  MotionSpan,
} from "../motionComponents/motionComponents";
import styles from "./styles.module.css";
import Ani from "../Ani/Ani";
const contain = (delay) => ({
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { delay: delay, duration: 0.6 } },
});
const HomeHero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <MotionDiv variants={contain(0)} initial="hidden" whileInView="visible">
          <Ani />
        </MotionDiv>
        <MotionPTag
          variants={contain(0.1)}
          initial="hidden"
          whileInView="visible"
        >
          Welcome{" "}
          <i
            style={{
              fontWeight: "400",
            }}
          >
            to
          </i>
          <br />
          <MotionSpan
            variants={contain(0.2)}
            initial="hidden"
            whileInView="visible"
          >
            Gen Alpha Digital
          </MotionSpan>
        </MotionPTag>
        <MotionSmall
          variants={contain(0.3)}
          initial="hidden"
          whileInView="visible"
        >
          Empowering Businesses and Startups to Maximize Their Impact in the
          Digital World
        </MotionSmall>

        <MotionButton
          className={styles.btn}
          variants={contain(0.4)}
          initial="hidden"
          whileInView="visible"
        >
          Get In Touch
        </MotionButton>
      </div>
    </div>
  );
};

export default HomeHero;
