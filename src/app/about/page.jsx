"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Brands from "@/components/Brands/Brands";
import Card from "@/components/Team Card/Card";
import Contact from "@/components/Contact/Contact";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const Page = () => {
  useIntersectionObserver();

  return (
    <div className={styles.container}>
      <div className={`${styles.hero} fade-in`}>
        <h1>
          Welcome To
          <br /> <span>Gen Alpha Digital</span>
        </h1>
      </div>

      {/* Section 1 */}
      <div className={`${styles.section1} fade-in`}>
        <div className={styles.div1}>
          <h3>About Us</h3>
          <p>
            Gen Alpha Digitals is your go-to partner for innovative digital
            marketing solutions. We specialize in branding and design, offering
            services such as graphic and logo design, UX design, and product
            packaging. Our tech team excels in web and app development, AR and
            VR solutions, UX/UI design, and SAP platform development, ensuring
            your business is equipped with cutting-edge technology. <br />
            <br />
            We also provide comprehensive advertising and marketing services,
            including affiliate marketing, social media marketing, programmatic
            advertising, content marketing, and email and WhatsApp marketing.
            Whether you&apos;re a business or a startup, Gen Alpha Digitals is
            here to help you grow and succeed in the digital landscape.
          </p>
        </div>

        <div>
          <Image
            src="/about.jpg"
            alt=""
            width={300}
            height={300}
            className={`${styles.img} fade-in`}
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
          <Card name="Person" img="/ppl/person1.jpg" role="Developer" />
          <Card name="Person" img="/ppl/person2.jpg" role="Developer" />
          <Card name="Person" img="/ppl/person3.jpg" role="Developer" />
          <Card name="Person" img="/ppl/person4.jpg" role="Developer" />
          <Card name="Person" img="/ppl/person5.jpg" role="Developer" />
          <Card name="Person" img="/ppl/person6.jpg" role="Developer" />
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default Page;
