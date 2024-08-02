import Image from "next/image";
import styles from "./styles.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <small className={styles.heading}>
        Explore Our Dynamic Digital Solutions
      </small>
      <div className={styles.services}>
        <div className={styles.service}>
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
          <button>Learn More</button>
        </div>
        <div className={styles.service}>
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
          <button>Learn More</button>
        </div>
        <div className={styles.service}>
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
          <button>Learn More</button>
        </div>
        <div className={styles.service}>
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
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
