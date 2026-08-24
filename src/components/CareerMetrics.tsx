import { Briefcase, ChartLineUp, Globe, Pulse, type Icon } from "@phosphor-icons/react";
import { careerMetrics, type CareerMetric } from "../data/portfolio";

const metricIcons: Record<CareerMetric["icon"], Icon> = {
  pulse: Pulse,
  growth: ChartLineUp,
  briefcase: Briefcase,
  globe: Globe,
};

export function CareerMetrics() {
  return (
    <section className="metrics wrap" aria-label="Career highlights">
      {careerMetrics.map((metric) => {
        const MetricIcon = metricIcons[metric.icon];
        return (
          <div className="metric" key={metric.label}>
            <MetricIcon size={27} aria-hidden="true" />
            <div><strong>{metric.value}</strong><b>{metric.label}</b><span>{metric.note}</span></div>
          </div>
        );
      })}
    </section>
  );
}
