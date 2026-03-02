export default function FreelanceServices() {
  return (
    <section id="Services">
      <h2 className="font-poppins font-bold text-3xl lg:text-4xl mb-8">
        Freelance Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-8">
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-sawad-lime/10 text-sawad-lime mb-4">
            Web Dev
          </span>
          <h3 className="font-poppins font-bold text-xl text-white mb-4">
            Full-Stack Web Development
          </h3>
          <ul className="text-sawad-muted text-sm space-y-2 list-disc list-inside mb-6">
            <li>Custom web applications</li>
            <li>REST API design &amp; integration</li>
            <li>Database design &amp; optimization</li>
            <li>Cloud deployment &amp; DevOps</li>
          </ul>
          <a
            href="#Contact"
            className="inline-block bg-sawad-lime text-black text-sm font-semibold px-6 py-2.5 rounded-full hover:brightness-110 transition"
          >
            Get in touch
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-8">
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-sawad-orange/10 text-sawad-orange mb-4">
            Startups
          </span>
          <h3 className="font-poppins font-bold text-xl text-white mb-4">
            MVP &amp; Startup Builds
          </h3>
          <ul className="text-sawad-muted text-sm space-y-2 list-disc list-inside mb-6">
            <li>Zero-to-launch, fast iteration</li>
            <li>Lean scoping &amp; architecture</li>
            <li>Auth &amp; payments integrations</li>
            <li>Handoff-ready, documented code</li>
          </ul>
          <a
            href="#Contact"
            className="inline-block bg-sawad-orange text-black text-sm font-semibold px-6 py-2.5 rounded-full hover:brightness-110 transition"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
