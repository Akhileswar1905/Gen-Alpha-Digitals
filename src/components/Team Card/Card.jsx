import styles from "./styles.module.css";

const Card = ({ name, img, role }) => {
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `url(${img})`,
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className={styles.content}>
        <h5>{name}</h5>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default Card;
