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
            <i class="fas fa-volume-up"></i>
          </span>
          {props.data.word}{" "}
          <span className="phonetic"> {props.data.phonetic}</span>
        </h2>
        {props.data.meanings.map((meaning, index) => {
          return (
            <p key={index}>
              <strong>
                <em>{meaning.partOfSpeech}</em>
              </strong>
              <br />
              {meaning.definitions[0].definition}
            </p>
          );
        })}
      </div>
    );
  } else return null;
}
