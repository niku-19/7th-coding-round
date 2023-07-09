/* eslint-disable react/prop-types */
import { IoLocationSharp } from "react-icons/io5";

import styles from "./Card.module.css";

const Card = ({ data }) => {
  return (
    <div className={styles.card}>
      <img src={data?.image} alt={data?.name} />
      <div className={styles.Continents__name}>
        <IoLocationSharp className={styles.location__icons} />
        <h3 className={styles.text__name}>{data?.name}</h3>
      </div>
    </div>
  );
};

export default Card;
