import { NavLink, useParams } from "react-router-dom";
import styles from "./Country.module.css";
import { useTrip } from "../../Context/TripContext";
import Card from "../../Components/Card/Card";

const Country = () => {
  const { id } = useParams();
  const { trip } = useTrip();

  const countryData = trip?.trip?.continents?.find((eachData) => {
    return eachData.id === parseInt(id);
  });

  return (
    <div className="container">
      <h1 className={styles.brand__heading}>
        Top Countries in {countryData?.name} for Your Next Holiday
      </h1>
      <div className={styles.grid__container}>
        {countryData?.countries?.map((eachData) => {
          return (
            <NavLink
              to={`/continents/country/${eachData.id}`}
              key={eachData.id}
            >
              <Card key={eachData.id} data={eachData} />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Country;
