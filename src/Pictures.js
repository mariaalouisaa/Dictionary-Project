import "./Pictures.css";

export default function Pictures(props) {
  if (props.data) {
    console.log(props.data);
    return (
      <section>
        <div className="pic-container">
          {props.data.map((pic, index) => {
            return (
              <img
                src={pic.src.landscape}
                alt={pic.alt}
                key={index}
                className="picture"
              />
            );
          })}
        </div>
      </section>
    );
  } else return null;
}
