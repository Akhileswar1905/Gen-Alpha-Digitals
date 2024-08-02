import Choice from "@/components/Choice/Choice";
import styles from "./page.module.css";
import Testimonial from "@/components/Testimonial1/Testimonial1";
import Testimonial2 from "@/components/Testimonial2/Testimonial2";
import Contact from "@/components/Contact/Contact";
import Image from "next/image";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.wrap}>
          <small>Our Services</small>
          <p className={styles.heading}>What are we good at?</p>
        </div>
      </div>
      <div className={styles.services}>
        <div className={styles.service}>
          <Image src={"/services/service1.png"} alt="" width={50} height={50} />
          <h5>Product Branding and Designing</h5>
          <p>
            Blending creativity and strategy, we create compelling brand
            identities with memorable visuals that align with your vision, from
            logos to complete brand ecosystems.
          </p>
          <button>Learn More</button>
        </div>
        <div className={styles.service}>
          <Image src={"/services/service2.png"} alt="" width={50} height={50} />
          <h5>Product Packaging</h5>
          <p>
            Enhance product presentation with functional, sustainable packaging
            that stands out and tells your brand&apos;s story, leaving a lasting
            impression on customers.
          </p>
          <button>Learn More</button>
        </div>
        <div className={styles.service}>
          <Image src={"/services/service3.png"} alt="" width={50} height={50} />
          <h5>Technology and Development</h5>
          <p>
            We develop cutting-edge tech solutions that streamline operations
            and enhance user experiences, leveraging the latest trends for
            robust and scalable systems.
          </p>
          <button>Learn More</button>
        </div>
        <div className={styles.service}>
          <Image src={"/services/service4.png"} alt="" width={50} height={50} />
          <h5>Advertisment and Marketing</h5>
          <p>
            Our data-driven advertising and marketing services combine creative
            storytelling with strategic campaigns to maximize your brand&apos;s
            reach and impact across multiple platforms.
          </p>
          <button>Learn More</button>
        </div>
      </div>

      {/* Choices */}

      <div className={styles.section2}>
        <small>Why Choose Us</small>
        <p className={styles.heading}>Why we are your best choice?</p>
        <div className={styles.choices}>
          <Choice
            img={"/icons/icon1.png"}
            title={"Proven Track Record"}
            desc={
              "We have built a reputation as a trusted and reliable partner in achieving business success."
            }
          />
          <Choice
            img={"/icons/icon2.png"}
            title={"Tailored Solutions"}
            desc={
              "We offer personalized solutions tailored to your specific goals, audience, and industry."
            }
          />
          <Choice
            img={"/icons/icon3.png"}
            title={"Client-Centric Focus"}
            desc={
              "Your success is our priority. We prioritize understanding your business goals."
            }
          />
          <Choice
            img={"/icons/icon4.png"}
            title={"Transparent Communication"}
            desc={
              "We believe in open and honest communication every step of the way."
            }
          />
          <Choice
            img={"/icons/icon5.png"}
            title={"Dedicated Support"}
            desc={
              "Your success is our priority, and we're here to support you every step of the way."
            }
          />
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
