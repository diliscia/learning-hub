import { Link, useParams } from "react-router-dom";
import { topics } from "../data/site";

function Topic() {
  const { subject, topicId } = useParams();
  const topic = topics.find((t) => t.id === topicId);

  if (!topic) {
    return (
      <section className="section">
        <p>Topic not found.</p>
        <Link to="/">Back to home</Link>
      </section>
    );
  }

  return (
    <section className="section">
      <Link to={`/${subject}`}>Back to {topic.subject}</Link>
      <h1>{topic.title}</h1>

      {topic.videoId ? (
        <iframe
          className="video"
          src={`https://www.youtube-nocookie.com/embed/${topic.videoId}`}
          title={topic.title}
          allowFullScreen
        />
      ) : (
        <div className="video placeholder">Video coming soon</div>
      )}

      <h2>Worksheet</h2>
      <p>Worksheet coming soon.</p>
    </section>
  );
}

export default Topic;