const Sidebar = ({ handleSelection }) => {
  return (
    <div className="position-relative">
      <h2>Apps</h2>
      <div>
        <div type="submit" onClick={() => handleSelection("notes")}>
          Notes
        </div>
        <div type="submit" onClick={() => handleSelection("phonebook")}>
          Phonebook
        </div>
        <div type="submit" onClick={() => handleSelection("countries")}>
          Countries
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
