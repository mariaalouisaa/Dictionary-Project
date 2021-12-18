import "./Definition.css";

export default function Definitions(props) {
  if (props.data) {
    console.log(props.data.phonetic);
    return (
      <div className="Definitions">
        <h2>
          {props.data.word}{" "}
          <span className="phonetic"> {props.data.phonetic}</span>
        </h2>
        {props.data.meanings.map(function (meaning, index) {
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
