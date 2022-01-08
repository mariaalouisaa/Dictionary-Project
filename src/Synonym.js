import "./Synonym.css";

export default function Synonym(props) {
  function searchSynonym(event) {
    console.log(event.target.innerHTML);
  }

  if (props.synonyms.length > 0) {
    return (
      <div className="Synonym">
        {props.synonyms.map((word, index) => {
          if (index < 10) {
            return (
              <button
                key={index}
                className="synonym-word"
                onClick={searchSynonym}
              >
                {word}
              </button>
            );
          } else return null;
        })}
      </div>
    );
  } else return null;
}
