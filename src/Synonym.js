import "./Synonym.css";

export default function Synonym(props) {
  console.log(props.synonyms.length);
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonym">
        <p>Synonyms:</p>
        {props.synonyms.map((word, index) => {
          return (
            <span key={index} className="synonym">
              {word}
            </span>
          );
        })}
      </div>
    );
  } else return null;
}
