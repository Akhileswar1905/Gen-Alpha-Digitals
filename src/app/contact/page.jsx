"use client";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <p className={styles.para1}>
          <i>Hey!</i> Reach out to us today!👋
        </p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.interests}>
          <p className={styles.para2}>What are your interests!</p>
          <br />
          <div className={styles.btns}>
            <motion.button
              className={styles.btn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              UI/UX Design
            </motion.button>
            <motion.button
              className={styles.btn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Front-end
            </motion.button>
            <motion.button
              className={styles.btn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back-end
            </motion.button>
            <motion.button
              className={styles.btn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              System Design
            </motion.button>
            <motion.button
              className={styles.btn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Marketing
            </motion.button>
            <motion.button
              className={styles.btn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              DevOps
            </motion.button>
            <motion.button
              className={styles.btn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Prgramming
            </motion.button>
            <motion.button
              className={styles.btn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </motion.button>
            <motion.button
              className={styles.btn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Branding
            </motion.button>
          </div>
        </div>
        <div className={styles.input}>
          <form>
            <input
              type="text"
              name="full-name"
              placeholder="Your Name"
              className={styles.field}
            />
            <br />
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className={styles.field}
            />
            <br />
            <br />
            <input
              type="text"
              name="contact"
              placeholder="Phone Number"
              className={styles.field}
            />
            <br />
            <br />
            <input
              type="text"
              name="project"
              placeholder="Tell us about your project"
              className={styles.field}
            />
            <motion.input
              type="button"
              value="Submit"
              className={styles.submit}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </form>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src="https://trak.in/wp-content/uploads/2015/01/Singapore-New-Hyderabad.jpg"
          alt="city"
          className={styles.city}
          width={1080}
          height={1920}
        />
        <div className={styles.para3}>
          <h1 className={styles.heading}>Contact Us</h1>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.line}>
          <p className={styles.pa}>
            <span>Hotline:</span>
          </p>
          <p className={styles.num}>
            <span>1234567890</span>
          </p>
          <p className={styles.num}>
            <span>1234567890</span>
          </p>
        </div>
        <div className={styles.address}>
          <p className={styles.pa}>
            <span>Address:</span>
          </p>
          <p className={styles.add}>
            <span>
              Kartheeka Hostel, Pragathi Nagar, Kukatpally, Hyderabad,
              Telangana.
            </span>
          </p>
        </div>
        <div className={styles.mail}>
          <p className={styles.pa}>
            <span>
              <i>Email:</i>
            </span>
          </p>
          <p className={styles.mails}>
            <span>
              1234@gmail.com
              <br />
              5678@gmail.com
              <br />
              9012@gmail.com
            </span>
          </p>
        </div>
        {/* <div className={styles.hours}>
                <p className={styles.pa}>Opening Hours:</p>
                <p className={styles.days}>Monday: <br/>
                    Tuesday:<br/>
                    Wednesday: <br/>
                    Thursday: <br/>
                    Friday: 
                </p>
                
            </div>
            <div className={styles.followus}>
                <p className={styles.pa}>Follow Us:</p>
            </div> */}
      </div>
      <div className={styles.hours}>
        <p className={styles.pa}>
          <marquee className={styles.marq}>Opening Hours:</marquee>
        </p>
        <p className={styles.days}>
          <span>
            <b>Monday:</b> 9:00 AM to 5:00 PM
            <br />
            <b>Tuesday:</b> 9:00 AM to 5:00 PM
            <br />
            <b>Wednesday:</b> 9:00 AM to 5:00 PM
            <br />
            <b>Thursday:</b> 9:00 AM to 5:00 PM
            <br />
            <b>Friday:</b>Friday: 9:00 AM to 5:00 PM
          </span>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
