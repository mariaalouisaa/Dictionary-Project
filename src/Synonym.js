import "./Synonym.css";

export default function Synonym(props) {
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonym">
        <span>
          <strong>Synonyms:</strong>
        </span>
        <br />
        {props.synonyms.map((word, index) => {
          if (index < 14) {
            return (
              <span key={index} className="synonym">
                {word}
              </span>
            );
          } else return null;
        })}
      </div>
    );
  } else return null;
}
