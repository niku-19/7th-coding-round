import { NavLink } from "react-router-dom";
import Card from "../../Components/Card/Card";
import { useTrip } from "../../Context/TripContext";
import styles from "./Continents.module.css";

const Continents = () => {
  const { trip } = useTrip();
  return (
    <div className="container">
      <h1 className={styles.brand__heading}>Welcome to Trip Advisor</h1>
      <h3 className={styles.brand__subHeading}>
        Top Continents for your next holiday
      </h3>
      <div className={styles.grid__container}>
        {trip?.trip?.continents?.map((eachData) => {
          return (
            <NavLink to={`/country/${eachData.id}`} key={eachData.id}>
              <Card data={eachData} />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Continents;
