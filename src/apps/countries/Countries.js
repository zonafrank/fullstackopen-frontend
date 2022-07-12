import axios from "axios";
import { useEffect, useState } from "react";
import Display from "./components/Display";
import "./Countries.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleSearch = (event) => {
    setSelectedCountry(null);
    setSearchString(event.target.value);
  };

  let displayList;

  if (searchString.length === 0) {
    displayList = [];
  } else if (selectedCountry) {
    displayList = [selectedCountry];
  } else {
    displayList = countries.filter((c) =>
      c.name.official.toLowerCase().includes(searchString.toLowerCase())
    );
  }

  return (
    <div>
      <div>
        find country{" "}
        <input type="text" onChange={handleSearch} value={searchString} />
      </div>
      <Display
        countryArray={displayList}
        selectCountry={setSelectedCountry}
        selectedCountry={selectedCountry}
        searchString={searchString}
      />
    </div>
  );
}

export default App;
