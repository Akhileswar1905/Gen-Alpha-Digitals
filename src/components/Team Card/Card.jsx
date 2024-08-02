import styles from "./styles.module.css";

const Card = ({ name, img, role }) => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${img})` }}>
      <div className={styles.content}>
        <h5>{name}</h5>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default Card;
