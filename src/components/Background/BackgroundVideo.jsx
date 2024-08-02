import styles from "./styles.module.css";
const BackgroundVideo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <video src={"/video/video.mp4"} autoPlay loop muted />
      <div className={styles.content}>
        <h1>Welcome to Gen Alpha Digital</h1>
        <h4>
          Empowering Businesses and Startups to Maximize Their Impact in the
          Digital World
        </h4>
        <div className={styles.btns}>
          <button>Get Started</button>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
