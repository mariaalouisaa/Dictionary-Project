export default function Example(props) {
  if (props.example) {
    return <span className="example">"{props.example}"</span>;
  } else return null;
}
