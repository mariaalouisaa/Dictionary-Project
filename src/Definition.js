export default function Definitions(props) {
  if (props.data) {
    return (
      <div className="Definitions">
        <h2>{props.data.word}</h2>
        {props.data.meanings.map(function (meaning, index) {
          console.log(meaning.definitions[0].definition);
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
