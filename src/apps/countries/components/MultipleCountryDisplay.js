function MultipleCountryDisplay({ countriesToDisplay, handleClick }) {
  return (
    <div>
      {countriesToDisplay.map((c) => (
        <p key={c.cca3}>
          {c.name.common} <button onClick={() => handleClick(c)}>show</button>
        </p>
      ))}
    </div>
  );
}

export default MultipleCountryDisplay;
