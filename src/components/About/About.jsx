import Image from "next/image";
import styles from "./styles.module.css";
import {
  MotionDiv,
  MotionH3,
  MotionPTag,
  MotionSmall,
  MotionSpan,
} from "../motionComponents/motionComponents";
import Service from "../Service/Service";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const imgAni = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const showUp = {
  initial: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const About = () => {
  return (
    <MotionDiv variants={banner} className={styles.container}>
      <div className={styles.section1}>
        <MotionDiv
          className={styles.div1}
          variants={banner}
          initial="initial"
          animate="animate"
        >
          <MotionH3 variants={showUp} initial="initial" whileInView="visible">
            {"About Us".split("").map((letter, index) => (
              <MotionSpan
                key={index}
                variants={showUp}
                initial="initial"
                whileInView={"visible"}
              >
                {letter}
              </MotionSpan>
            ))}
          </MotionH3>
          <MotionPTag variants={showUp} initial="initial" whileInView="visible">
            Gen Alpha Digitals is your go-to partner for innovative digital
            marketing solutions. We specialize in branding and design, offering
            services such as graphic and logo design, UX design, and product
            packaging. Our tech team excels in web and app development, AR and
            VR solutions, UX/UI design, and SAP platform development, ensuring
            your business is equipped with cutting-edge technology. <br />
          </MotionPTag>
          <MotionPTag variants={showUp} initial="initial" whileInView="visible">
            We also provide comprehensive advertising and marketing services,
            including affiliate marketing, social media marketing, programmatic
            advertising, content marketing, and email and WhatsApp marketing.
            Whether you&apos;re a business or a startup, Gen Alpha Digitals is
            here to help you grow and succeed in the digital landscape.
          </MotionPTag>
        </MotionDiv>

        <MotionDiv variants={imgAni} initial="initial" whileInView="animate">
          <Image
            src="/about.jpg"
            alt=""
            width={300}
            height={300}
            className={`${styles.img} fade-in`}
          />
        </MotionDiv>
      </div>
      <MotionSmall
        className={styles.heading}
        variants={showUp}
        initial="initial"
        whileInView="visible"
      >
        {"Explore Our".split("").map((letter, index) => (
          <MotionSpan
            key={index}
            variants={showUp}
            initial="initial"
            whileInView="visible"
          >
            {letter}
          </MotionSpan>
        ))}{" "}
        <br />
        <i
          style={{
            color: "var(--accent)",
            fontWeight: 500,
          }}
        >
          {"Dynamic".split("").map((letter, index) => (
            <MotionSpan
              key={index}
              variants={showUp}
              initial="initial"
              whileInView="visible"
            >
              {letter}
            </MotionSpan>
          ))}
        </i>{" "}
        {"Digital Solutions".split("").map((letter, index) => (
          <MotionSpan
            key={index}
            variants={showUp}
            initial="initial"
            whileInView="visible"
          >
            {letter}
          </MotionSpan>
        ))}
      </MotionSmall>
      {/* <div className={styles.services}>
        <MotionDiv className={styles.service}>
          <Image
            src={"/services/service1.png"}
            width={50}
            height={50}
            alt="service"
          />
          <h6>Product Branding and Designing</h6>
          <small>
            Blending creativity and strategy, we create compelling brand
            identities with memorable visuals that align with your vision, from
            logos to complete brand ecosystems.
          </small>
          <button className={styles.btn}>Learn More</button>
        </MotionDiv>
        <MotionDiv className={styles.service}>
          <Image
            src={"/services/service2.png"}
            width={50}
            height={50}
            alt="service"
          />
          <h6>Product Packaging</h6>
          <small>
            Enhance product presentation with functional, sustainable packaging
            that stands out and tells your brand&apos;s story, leaving a lasting
            impression on customers.
          </small>
          <button className={styles.btn}>Learn More</button>
        </MotionDiv>
        <MotionDiv className={styles.service}>
          <Image
            src={"/services/service3.png"}
            width={50}
            height={50}
            alt="service"
          />
          <h6>Technology and Development</h6>
          <small>
            We develop cutting-edge tech solutions that streamline operations
            and enhance user experiences, leveraging the latest trends for
            robust and scalable systems.
          </small>
          <button className={styles.btn}>Learn More</button>
        </MotionDiv>
        <MotionDiv className={styles.service}>
          <Image
            src={"/services/service4.png"}
            width={50}
            height={50}
            alt="service"
          />
          <h6>Advertisment and Marketing</h6>
          <small>
            Our data-driven advertising and marketing services combine creative
            storytelling with strategic campaigns to maximize your brand&apos;s
            reach and impact across multiple platforms.
          </small>
          <button className={styles.btn}>Learn More</button>
        </MotionDiv>
      </div> */}

      <Service />
    </MotionDiv>
  );
};

export default About;
