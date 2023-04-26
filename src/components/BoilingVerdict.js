export default function BoilingVerdict(props) {
  const { celcius } = props;
  if (celcius >= 100) {
    return <div><h1>The Water would boil.</h1></div>;
  }
  return <div><h1>The water would not boil.</h1></div>;
}
