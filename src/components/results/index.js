import './results.scss';

export default function Results(props) {
  return (
    <section>
      <pre data-testid='results-pre'>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
    </section>
  );
}
