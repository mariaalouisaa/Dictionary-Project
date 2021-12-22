import "./Synonym.css";

export default function Synonym(props) {
  function searchSynonym() {
    console.log("clicked");
  }

  if (props.synonyms.length > 0) {
    return (
      <div className="Synonym">
        <span>
          <strong>Synonyms:</strong>
        </span>
        <br />
        {props.synonyms.map((word, index) => {
          if (index < 10) {
            return (
              <button key={index} className="synonym" onClick={searchSynonym}>
                {word}
              </button>
            );
          } else return null;
        })}
      </div>
    );
  } else return null;
}
