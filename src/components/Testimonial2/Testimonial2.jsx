import Image from "next/image";
import styles from "./styles.module.css";

const Testimonial2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.section1}>
          <h1>Testimonial Header</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            ratione totam sint ipsa quasi non, magni vel earum eaque,
            perspiciatis similique a nobis quod voluptatum nemo porro nihil.
            Excepturi, perferendis!
          </p>
        </div>
        <div>
          <Image
            src={"/images/client2.jpg"}
            alt="client"
            className={styles.client}
            width={564 / 2}
            height={752 / 2}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial2;
