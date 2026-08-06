const services = [
  ["Web systems", "Custom applications, API integrations, database design, and deployment-ready engineering."],
  ["MVP builds", "Focused scoping, architecture, auth and payment integrations, and a clear path from zero to launch."],
];
export default function FreelanceServices() {
  return <section className="atlas-services" id="services" aria-labelledby="services-title"><div><p>For teams with a problem to solve</p><h2 id="services-title">Bring the messy brief.</h2></div><div className="atlas-service-list">{services.map(([title, body]) => <a key={title} href="#contact"><span>↗</span><h3>{title}</h3><p>{body}</p><em>Start a conversation</em></a>)}</div></section>;
}
