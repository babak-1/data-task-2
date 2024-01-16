import axios from "axios";
import { useEffect } from "react";
import FilterContainer from "./components/Filter";
import "./App.css";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://searchartback-production-dc78.up.railway.app/api/country/?indicator=Gross%20Domestic%20Product%20billions%20of%20U.S.%20dollars`
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container">
      <FilterContainer />
    </div>
  );
}

export default App;
