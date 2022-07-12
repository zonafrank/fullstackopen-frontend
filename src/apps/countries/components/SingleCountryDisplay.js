import WeatherPanel from "./Weather";

function SingleCountryDisplay({ countryToDisplay }) {
  return (
    <div>
      <h2>{countryToDisplay.name.official}</h2>
      <div className="coat-of-arms">
        <img src={countryToDisplay.coatOfArms.png} alt="" />
      </div>
      <div>Capital: {countryToDisplay.capital}</div>
      <div>Area: {countryToDisplay.area}</div>
      <h3>Languages</h3>
      <ul>
        {Object.values(countryToDisplay.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <div className="flag-image">
        <img src={countryToDisplay.flags.png} alt="country flag" />
      </div>
      <WeatherPanel
        city={countryToDisplay.capital[0]}
        countryCode={countryToDisplay.cioc}
      />
    </div>
  );
}

export default SingleCountryDisplay;
