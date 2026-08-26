import { useState } from "react";
import { ArrowDown, ArrowRight } from "@phosphor-icons/react";
import { projects } from "../data/portfolio";

export function SelectedWork() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  return (
    <section className="section wrap" id="work">
      <div className="section-heading">
        <div><p className="kicker">Selected work</p><h2>Selected engineering work.</h2></div>
        <span className="section-note">Payments · Banking · Regional products</span>
      </div>
      <div className="project-list">
        {projects.map((project) => {
          const isActive = activeProjectId === project.id;
          const buttonId = `${project.id}-button`;
          const panelId = `${project.id}-details`;

          return (
            <article className={isActive ? "project is-active" : "project"} key={project.id}>
              <button
                id={buttonId}
                className="project-summary"
                type="button"
                onClick={() => setActiveProjectId(isActive ? null : project.id)}
                aria-controls={panelId}
                aria-expanded={isActive}
                data-goatcounter-click={`project-${project.id}`}
              >
                <span className="project-number">{project.number}</span>
                <span className="project-title"><strong>{project.name}</strong><small>{project.description}</small></span>
                <span className="project-impact"><i>Impact</i>{project.impact}</span>
                <span className="project-stack"><i>Stack</i>{project.stack}</span>
                <span className="project-arrow">{isActive ? <ArrowDown size={20} aria-hidden="true" /> : <ArrowRight size={20} aria-hidden="true" />}</span>
              </button>
              {isActive && (
                <div id={panelId} className="project-detail" role="region" aria-labelledby={buttonId}>
                  <span>Behind the work</span><p>{project.detail}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
