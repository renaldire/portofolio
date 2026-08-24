import { Code } from "@phosphor-icons/react";
import { skills } from "../data/portfolio";

export function About() {
  return (
    <section className="about wrap" id="about">
      <div className="skill-block">
        <p className="kicker">Tech I work with</p>
        <div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      </div>
      <div className="about-copy">
        <p className="kicker">About me</p>
        <p>Senior backend engineer and former squad lead with experience across payments, banking, and education platforms. I care about production reliability, clear technical decisions, and helping teams deliver maintainable systems.</p>
        <div className="education"><Code size={21} aria-hidden="true" /><span><strong>B.Sc. Computer Science</strong>Bina Nusantara University · GPA 3.74/4.00</span></div>
      </div>
    </section>
  );
}
