export default function Pictures(props) {
  if (props.data) {
    console.log(props.data);
    return <section>PICS</section>;
  } else return null;
}
