import { experience } from "../data/portfolio";

export function ExperienceTimeline() {
  return (
    <section className="section wrap" id="experience">
      <div className="section-heading compact"><div><p className="kicker">Experience</p><h2>Built across finance and technology.</h2></div></div>
      <div className="experience-list">
        {experience.map((item, index) => (
          <article className="experience-item" key={`${item.company}-${item.period}`}>
            <div className="timeline-marker" aria-hidden="true"><span>{index + 1}</span></div>
            <time>{item.period}</time>
            <div className="experience-role"><h3>{item.role}</h3><p>{item.company}</p></div>
            <p className="experience-copy">{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
