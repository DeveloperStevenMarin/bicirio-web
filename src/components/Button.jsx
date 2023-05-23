export default function Button({text}) {
  return (
    <button className="button login__submit">
      <span className="button__text">{text}</span>
      <i className="button__icon fas fa-chevron-right"></i>
    </button>
  );
}
