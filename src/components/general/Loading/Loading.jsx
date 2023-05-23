import './loading.css'
export default function Loading() {
  return (
    <section className="main__container--loading">
      <div className="container__loading">
        <div className="green__dot"></div>
        <div className="yellow__dot"></div>
        <div className="red__dot"></div>
        <div className="emerald__dot"></div>
      </div>
    </section>
  );
}
