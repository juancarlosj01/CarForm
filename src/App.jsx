import { useEffect, useState } from "react";
import axios from "axios";
import CarForms from "./components/CarForms";
import CarList from "./components/CarList";

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("https://cars-crud.herokuapp.com/cars/")
      .then((res) => setCars(res.data));
  }, []);

  const getCars = () => {
    axios
      .get("https://cars-crud.herokuapp.com/cars/")
      .then((res) => setCars(res.data));
  };

  console.log(cars);

  return (
    <div className="App">
      <CarForms getCars={getCars} />
      <CarList cars={cars} />
    </div>
  );
}

export default App;