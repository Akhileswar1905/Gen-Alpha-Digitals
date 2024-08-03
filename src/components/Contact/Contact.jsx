import Footer from "../Footer/Footer";
import styles from "./styles.module.css";
const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.section1}>
            <p>Let&apos;s Talk</p>
            <h1>What are you waiting for?</h1>
          </div>
          <div className={styles.section2}>
            <form>
              <input type="text" placeholder="Enter your name" />
              <input type="text" placeholder="Enter your email" />
              <textarea
                name="message"
                placeholder="Enter your message"
              ></textarea>
              <button>Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
