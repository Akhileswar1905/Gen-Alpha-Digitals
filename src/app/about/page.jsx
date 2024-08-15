import Image from "next/image";
import styles from "./page.module.css";
import Brands from "@/components/Brands/Brands";
import Contact from "@/components/Contact/Contact";
import {
  MotionPTag,
  MotionSpan,
} from "@/components/motionComponents/motionComponents";

const contain = (delay) => ({
  hidden: { opacity: 0, x: "-100%" },
  visible: { opacity: 1, x: 0, transition: { delay: delay, duration: 0.8 } },
});

const textContain = (delay) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: delay, duration: 0.2 },
  },
});

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.hero} fade-in`}>
        <h1>
          Welcome To
          <br /> <span>Gen Alpha Digital</span>
        </h1>
      </div>

      {/* Section 1 */}
      <div className={`${styles.section1}`}>
        <div className={styles.div1}>
          <h3>
            {"About Us".split("").map((letter, index) => (
              <MotionSpan
                key={index}
                className={styles.letter}
                variants={textContain(0.109 * index)}
                initial="hidden"
                whileInView="visible"
              >
                {letter}
              </MotionSpan>
            ))}
          </h3>
          <MotionPTag
            variants={contain(0.1)}
            initial="hidden"
            whileInView="visible"
          >
            Gen Alpha Digitals is your go-to partner for innovative digital
            marketing solutions. We specialize in branding and design, offering
            services such as graphic and logo design, UX design, and product
            packaging. Our tech team excels in web and app development, AR and
            VR solutions, UX/UI design, and SAP platform development, ensuring
            your business is equipped with cutting-edge technology. <br />
          </MotionPTag>
          <MotionPTag
            variants={contain(0.3)}
            initial="hidden"
            whileInView="visible"
          >
            We also provide comprehensive advertising and marketing services,
            including affiliate marketing, social media marketing, programmatic
            advertising, content marketing, and email and WhatsApp marketing.
            Whether you&apos;re a business or a startup, Gen Alpha Digitals is
            here to help you grow and succeed in the digital landscape.
          </MotionPTag>
        </div>

        <div>
          <Image
            src="/about.jpg"
            alt=""
            width={300}
            height={300}
            className={`${styles.img}`}
          />
        </div>
      </div>

      {/* Brands */}
      <Brands />

      {/* Our Team */}
      <div className={`${styles.team} fade-in`}>
        <p className={styles.heading}>Meet Our Team</p>
        {/* Cards */}
        <div className={styles.cards}>
          <div className={styles.cardSlide}>
            <Image
              className="img"
              alt=""
              src={"/ppl/person1.jpg"}
              width={1080}
              height={920}
            />
            <Image
              className="img"
              alt=""
              src={"/ppl/person2.jpg"}
              width={1080}
              height={920}
            />
            <Image
              className="img"
              alt=""
              src={"/ppl/person3.jpg"}
              width={1080}
              height={920}
            />
            <Image
              className="img"
              alt=""
              src={"/ppl/person4.jpg"}
              width={1080}
              height={920}
            />
            <Image
              className="img"
              alt=""
              src={"/ppl/person5.jpg"}
              width={1080}
              height={920}
            />
            <Image
              className="img"
              alt=""
              src={"/ppl/person6.jpg"}
              width={1080}
              height={920}
            />
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default Page;
