import { Eye, Stack, Target, UsersThree, type Icon } from "@phosphor-icons/react";
import { principles, type Principle } from "../data/portfolio";

const principleIcons: Record<Principle["icon"], Icon> = {
  target: Target,
  stack: Stack,
  eye: Eye,
  team: UsersThree,
};

export function EngineeringApproach() {
  return (
    <section className="section approach wrap" id="approach">
      <div className="approach-intro">
        <div><p className="kicker">Architecture thinking</p><h2>Design for change.<br />Optimize for reality.</h2></div>
        <p>I align architecture with business outcomes, choosing practical trade-offs and building systems that teams can observe, operate, and evolve.</p>
      </div>
      <div className="principles">
        {principles.map((principle) => {
          const PrincipleIcon = principleIcons[principle.icon];
          return <article key={principle.title}><PrincipleIcon size={32} aria-hidden="true" /><h3>{principle.title}</h3><p>{principle.copy}</p></article>;
        })}
      </div>
    </section>
  );
}
