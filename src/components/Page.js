import NoteApp from "../apps/note-app/NoteApp";
import Phonebook from "../apps/phonebook/Phonebook";
import Countries from "../apps/countries/Countries";

const Page = ({ selectedApp }) => {
  const renderApp = () => {
    switch (selectedApp) {
      case "notes":
        return <NoteApp />;
      case "phonebook":
        return <Phonebook />;
      case "countries":
        return <Countries />;
      default:
        return <NoteApp />;
    }
  };

  return <>{renderApp()}</>;
};
export default Page;
