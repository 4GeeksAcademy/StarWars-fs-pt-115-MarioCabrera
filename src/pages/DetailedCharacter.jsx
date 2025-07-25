// Import necessary components from react-router-dom and other parts of the application.
import { Link, useParams } from "react-router-dom";
import { DetailedCharacterInfo } from "../components/DetailedCharacter";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export const DetailedCharacter = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()
  const { id } = useParams()
  const selectedInfo = store.characters.find(character => character.id === parseInt(id))
  const usedStyles = store.styles.filter(style =>
  style.combat_style_character.some(
    character => character.name === selectedInfo.name
  )
);
   
  
  return (
    <div className="details-page">
      <div className="d-flex justify-content-end">
        <DetailedCharacterInfo
          name = {selectedInfo.name}
          age = {selectedInfo.age}
          gender = {selectedInfo.gender}
          description = {selectedInfo.description}
          img = {selectedInfo.img}
          quote = {selectedInfo.quote}
          styles = {usedStyles}
          race = {selectedInfo.race}
        />
      </div>
    </div>
  );
};
