import Synonym from "./Synonym";
import Example from "./Example";
import "./Definition.css";

export default function Definitions(props) {
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
            <section className="definition-text" key={index}>
              <span className="part-text">{meaning.partOfSpeech}</span>
              <br />
              <span className="deff-text">
                {meaning.definitions[0].definition}
              </span>
              <br />
              <Example example={meaning.definitions[0].example} />
              <br />
              <Synonym synonyms={meaning.definitions[0].synonyms} />
            </section>
          );
        })}
      </div>
    );
  } else return <div className="holder"></div>;
}
