export default function TemperatureField(props) {
  const { value, change, scale } = props;
  const scaleName = scale === 'c' ? 'Celcius' : 'Fahrenheit';

  return (
    <fieldset>
      <legend>Enter Temperature in {scaleName}:</legend>
      <input value={value} onChange={change} name={scale} />
    </fieldset>
  );
}
