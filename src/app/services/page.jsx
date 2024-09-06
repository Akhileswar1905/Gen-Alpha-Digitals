import Choice from "@/components/Choice/Choice";
import styles from "./page.module.css";
import Testimonial from "@/components/Testimonial1/Testimonial1";
import Testimonial2 from "@/components/Testimonial2/Testimonial2";
import Contact from "@/components/Contact/Contact";
import Image from "next/image";
import {
  MotionButton,
  MotionPTag,
  MotionSmall,
} from "@/components/motionComponents/motionComponents";
import AnimatedTextWord from "../about/variants";

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

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.wrap}>
          <AnimatedTextWord text={"Our"} fontSize={"5rem"} />
          <i>
            <AnimatedTextWord text={"Services"} fontSize={"5rem"} />
          </i>
        </div>
      </div>

      {/* Services */}
      <div className={styles.services}>
        <div className={styles.service}>
          <div className={styles.line}></div>
          <MotionSmall
            variants={varient(0)}
            initial="hidden"
            whileInView="visible"
          >
            Product Branding and Designing
          </MotionSmall>
          <MotionPTag
            variants={varient(0.1)}
            initial="hidden"
            whileInView="visible"
          >
            Blending creativity and strategy, we create compelling brand
            identities with memorable visuals that align with your vision, from
            logos to complete brand ecosystems.
          </MotionPTag>
          <MotionButton
            variants={varient(0.2)}
            initial="hidden"
            whileInView="visible"
          >
            Learn More
          </MotionButton>
        </div>
        <div className={styles.service}>
          <div className={styles.line}></div>
          <MotionSmall
            variants={varient(0)}
            initial="hidden"
            whileInView="visible"
          >
            Product Packaging
          </MotionSmall>
          <MotionPTag
            variants={varient(0.1)}
            initial="hidden"
            whileInView="visible"
          >
            Enhance product presentation with functional, sustainable packaging
            that stands out and tells your brand&apos;s story, leaving a lasting
            impression on customers.
          </MotionPTag>
          <MotionButton
            variants={varient(0.2)}
            initial="hidden"
            whileInView="visible"
          >
            Learn More
          </MotionButton>
        </div>
        <div className={styles.service}>
          <div className={styles.line}></div>
          <MotionSmall
            variants={varient(0)}
            initial="hidden"
            whileInView="visible"
          >
            Technology and Development
          </MotionSmall>
          <MotionPTag
            variants={varient(0.1)}
            initial="hidden"
            whileInView="visible"
          >
            We develop cutting-edge tech solutions that streamline operations
            and enhance user experiences, leveraging the latest trends for
            robust and scalable systems.
          </MotionPTag>
          <MotionButton
            variants={varient(0.2)}
            initial="hidden"
            whileInView="visible"
          >
            Learn More
          </MotionButton>
        </div>
        <div className={styles.service}>
          <div className={styles.line}></div>
          <MotionSmall
            variants={varient(0)}
            initial="hidden"
            whileInView="visible"
          >
            Advertisment and Marketing
          </MotionSmall>
          <MotionPTag
            variants={varient(0.1)}
            initial="hidden"
            whileInView="visible"
          >
            Our data-driven advertising and marketing services combine creative
            storytelling with strategic campaigns to maximize your brand&apos;s
            reach and impact across multiple platforms.
          </MotionPTag>
          <MotionButton
            variants={varient(0.2)}
            initial="hidden"
            whileInView="visible"
          >
            Learn More
          </MotionButton>
        </div>
      </div>

      {/* Choices */}
      <div className={styles.section2}>
        <div className={styles.heading}>
          <AnimatedTextWord text={"Why are we your "} fontSize={"5rem"} />
          <i>
            <AnimatedTextWord text={"Best Choice?"} fontSize={"5rem"} />
          </i>
        </div>
        <div className={styles.choices}>
          <div className={styles.line}></div>
          <Choice
            img={"/icons/icon1.png"}
            title={"Proven Track Record"}
            desc={
              "We have built a reputation as a trusted and reliable partner in achieving business success."
            }
          />
          <div className={styles.line}></div>
          <Choice
            img={"/icons/icon2.png"}
            title={"Tailored Solutions"}
            desc={
              "We offer personalized solutions tailored to your specific goals, audience, and industry."
            }
          />
          <div className={styles.line}></div>
          <Choice
            img={"/icons/icon3.png"}
            title={"Client-Centric Focus"}
            desc={
              "Your success is our priority. We prioritize understanding your business goals."
            }
          />
          <div className={styles.line}></div>
          <Choice
            img={"/icons/icon4.png"}
            title={"Transparent Communication"}
            desc={
              "We believe in open and honest communication every step of the way."
            }
          />
          <div className={styles.line}></div>
          <Choice
            img={"/icons/icon5.png"}
            title={"Dedicated Support"}
            desc={
              "Your success is our priority, and we're here to support you every step of the way."
            }
          />
          <div className={styles.line}></div>
          <Choice
            img={"/icons/icon6.png"}
            title={"Expertise Across Industries"}
            desc={
              "Your success is our priority. We prioritize understanding your business goals."
            }
          />
        </div>
      </div>

      <Testimonial />
      <Testimonial2 />
      <Contact />
    </div>
  );
};

export default page;
