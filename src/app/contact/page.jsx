import Contact from "@/components/Contact/Contact";
import styles from "./Contact.module.css";
import Footer from "@/components/Footer/Footer";

function ContactUs() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1>Let&apos;s Work Together</h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.detailsWrapper}>
          <div className={styles.hotline}>
            <p className={styles.para}>Hotline:</p>
          </div>
          <div className={styles.address}>
            <p className={styles.para}>Address:</p>
          </div>
          <div className={styles.mail}>
            <p className={styles.para}>Mail:</p>
          </div>
          <div className={styles.openinghours}>
            <p className={styles.para}>Opening Hours:</p>
          </div>
          <div className={styles.followus}>
            <p className={styles.para}>Follow Us:</p>
          </div>
          <div className={styles.location}></div>
        </div>
      </div>
      <div className={styles.connect}>
        <div className={styles.form1}>
          <p className={styles.para1}>ContactUs Form</p>
          <p className={styles.para2}>
            Fill this out so we learnt more about <br />
            you and your needs
          </p>
          <form>
            <input
              type="text"
              placeholder="First and Second name"
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email address"
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Phone Number"
              className={styles.input}
            />
            <input type="text" placeholder="Message" className={styles.input} />
            <input type="text" placeholder="" className={styles.input} />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
