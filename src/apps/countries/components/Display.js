import SingleCountryDisplay from "./SingleCountryDisplay";
import MultipleCountryDisplay from "./MultipleCountryDisplay";

function Display({ countryArray, selectCountry, searchString }) {
  if (countryArray.length === 0 && !searchString) {
    return <p>Enter the name of a country you wish to see.</p>;
  } else if (countryArray.length === 0 && searchString) {
    return <p>No country in my database matches that search string.</p>;
  } else if (countryArray.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countryArray.length === 1) {
    return <SingleCountryDisplay countryToDisplay={countryArray[0]} />;
  } else {
    return (
      <MultipleCountryDisplay
        countriesToDisplay={countryArray}
        handleClick={selectCountry}
      />
    );
  }
}

export default Display;
