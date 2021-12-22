export default function Example(props) {
  if (props.example) {
    return (
      <span>
        <strong> Example: </strong> {props.example}
      </span>
    );
  } else return null;
}
