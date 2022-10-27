import './results.scss';

export default function Results(props) {
  return (
    <section data-testid='results'>
      <p>Result Headers</p>
      <pre data-testid='results-headers'>{props.response && props.response.headers ? JSON.stringify(props.response.headers, undefined, 2) : null}</pre>
      <p>Result Body</p>
      <pre data-testid='results-body'>{props.response && props.response.data ? JSON.stringify(props.response.data, undefined, 2) : null}</pre>
    </section>
  );
}
