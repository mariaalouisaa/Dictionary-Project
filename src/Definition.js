import Synonym from "./Synonym";
import "./Definition.css";

export default function Definitions(props) {
  console.log(props.data);
  if (props.data) {
    let audio = new Audio(props.data.phonetics[0].audio);

    const play = () => {
      audio.play();
    };

    return (
      <div className="Definitions">
        <h2>
          <span className="sound" onClick={play}>
            <i className="fas fa-volume-up"></i>
          </span>
          {props.data.word}{" "}
          <span className="phonetic"> {props.data.phonetic}</span>
        </h2>
        {props.data.meanings.map((meaning, index) => {
          return (
            <div className="definition-text" key={index}>
              <span className="part-text">{meaning.partOfSpeech}</span>
              <br />
              <strong> Defintion: </strong>
              {meaning.definitions[0].definition}
              <br />
              <strong> Example: </strong>
              {meaning.definitions[0].example}.
              <Synonym synonyms={meaning.definitions[0].synonyms} />
            </div>
          );
        })}
      </div>
    );
  } else return null;
}
