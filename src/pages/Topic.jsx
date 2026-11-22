import { Link, useParams } from "react-router-dom";
import { topics } from "../data/site";

function Topic() {
  const { subject, topicId } = useParams();
  const topic = topics.find((t) => t.id === topicId);

  if (!topic) {
    return (
      <section className="section">
        <p>Course not found.</p>
        <Link to="/">Back to home</Link>
      </section>
    );
  }

  return (
    <section className="section">
      <Link to={`/${subject}`}>Back to {topic.subject}</Link>
      <h1>{topic.title}</h1>
      <p>{topic.description}</p>

      {topic.goals && (
        <>
          <h2>What students will learn</h2>
          <p>{topic.goals}</p>
        </>
      )}

      <h2>Lessons</h2>
      {topic.lessons.map((lesson, index) => (
        <article className="lesson" key={index}>
          <h3>{lesson.title}</h3>

          {lesson.videoId ? (
            <iframe
              className="video"
              src={`https://www.youtube-nocookie.com/embed/${lesson.videoId}`}
              title={`${topic.title}, ${lesson.title}`}
              allowFullScreen
            />
          ) : (
            <div className="video placeholder">Video coming soon</div>
          )}

          {lesson.worksheetUrl ? (
            <a className="button" href={lesson.worksheetUrl} target="_blank" rel="noreferrer">
              Open worksheet
            </a>
          ) : (
            <p>Worksheet coming soon.</p>
          )}
        </article>
      ))}
    </section>
  );
}

export default Topic;