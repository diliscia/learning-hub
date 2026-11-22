import { Link } from "react-router-dom";
import { site } from "../data/site";

function Home() {
  return (
    <>
      <header className="header">
        <h1>{site.name}</h1>
        <p>{site.tagline}</p>
      </header>

      <section className="section">
        <div className="grid">
          <Link className="card subject" to="/math">
            <h2>Math</h2>
            <p>Integers, inequalities, factoring and more.</p>
          </Link>
          <Link className="card subject" to="/physics">
            <h2>Physics</h2>
            <p>Kinematics, space exploration and more.</p>
          </Link>
        </div>
      </section>

      <section className="section work">
        <h2>Work with me</h2>
        <p>Want help one on one? See my classes and reviews on Outschool.</p>
        <a className="button" href={site.outschoolUrl} target="_blank" rel="noreferrer">
          See my classes on Outschool
        </a>
      </section>
    </>
  );
}

export default Home;