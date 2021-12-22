import "./Synonym.css";

export default function Synonym(props) {
  console.log(props.synonyms.length);
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonym">
        <span>
          <strong>Synonyms:</strong>
        </span>
        <br />
        {props.synonyms.map((word, index) => {
          if (index < 15) {
            return (
              <span key={index} className="synonym">
                {word}
              </span>
            );
          }
        })}
      </div>
    );
  } else return null;
}
