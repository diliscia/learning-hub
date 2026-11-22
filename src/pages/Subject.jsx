import { Link, useParams } from "react-router-dom";
import { topics } from "../data/site";

function Subject() {
  const { subject } = useParams();
  const name = subject === "physics" ? "Physics" : "Math";
  const list = topics.filter((t) => t.subject === name);

  return (
    <section className="section">
      <Link to="/">Back to home</Link>
      <h1>{name}</h1>
      <div className="grid">
        {list.map((t) => (
          <Link key={t.id} className="card" to={`/${subject}/${t.id}`}>
            <h3>{t.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Subject;