import {
  MotionButton,
  MotionPTag,
  MotionSmall,
  MotionSpan,
} from "../motionComponents/motionComponents";
import styles from "./styles.module.css";

const contain = (delay) => ({
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { delay: delay, duration: 0.6 } },
});

const BackgroundVideo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <video src={"/video/video.mp4"} autoPlay loop muted />
      <div className={styles.content}>
        <MotionPTag variants={contain(0.1)} initial="hidden" animate="visible">
          Welcome <i>to</i>
          <br />
          <MotionSpan
            variants={contain(0.2)}
            initial="hidden"
            animate="visible"
          >
            Gen Alpha Digital
          </MotionSpan>
        </MotionPTag>
        <MotionSmall variants={contain(0.3)} initial="hidden" animate="visible">
          Empowering Businesses and Startups to Maximize Their Impact in the
          Digital World
        </MotionSmall>
        <MotionButton
          className={styles.btn}
          variants={contain(0.4)}
          initial="hidden"
          animate="visible"
        >
          Get In Touch
        </MotionButton>
      </div>
    </div>
  );
};

export default BackgroundVideo;
