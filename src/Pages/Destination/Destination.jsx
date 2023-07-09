import { useParams } from "react-router-dom";
import styles from "./Destination.module.css";
import { useTrip } from "../../Context/TripContext";

const Destination = () => {
  const { id } = useParams();
  const { trip } = useTrip();

  const destinationData = trip?.trip?.continents?.countries?.find(
    (eachData) => {
      return eachData.id === parseInt(id);
    }
  );
  console.log(
    "🚀 ~ file: Destination.jsx:12 ~ destinationData ~ destinationData:",
    destinationData
  );
  return (
    <div className="container">
      <h1 className={styles.brand__heading}>
        Top Countries in for Your Next Holiday
      </h1>
      <div className={styles.grid__container}>
        {/* {countryData?.countries?.map((eachData) => {
          return <Card key={eachData.id} data={eachData} />;
        })} */}
      </div>
    </div>
  );
};

export default Destination;
