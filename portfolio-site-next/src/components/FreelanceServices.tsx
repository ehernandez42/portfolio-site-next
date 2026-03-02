export default function FreelanceServices() {
    return (
        <section id="Services" className="w-full py-12">
            <h2 className="text-3xl font-extrabold mb-8 text-white">Freelance Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card bg-base-200 shadow-xl">
                    <div className="card-body">
                        <h3 className="card-title">
                            Full-Stack Web Development
                            <span className="badge badge-info">Web Dev</span>
                        </h3>
                        <ul className="text-left list-disc list-inside space-y-1 mt-2">
                            <li>Custom web applications</li>
                            <li>REST API design &amp; integration</li>
                            <li>Database design &amp; optimization</li>
                            <li>Cloud deployment &amp; DevOps</li>
                        </ul>
                        <div className="card-actions justify-end mt-4">
                            <a href="#Contact" className="btn btn-info btn-sm">Get in touch</a>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-200 shadow-xl">
                    <div className="card-body">
                        <h3 className="card-title">
                            MVP &amp; Startup Builds
                            <span className="badge badge-info">Startups</span>
                        </h3>
                        <ul className="text-left list-disc list-inside space-y-1 mt-2">
                            <li>Zero-to-launch, fast iteration</li>
                            <li>Lean scoping &amp; architecture</li>
                            <li>Auth &amp; payments integrations</li>
                            <li>Handoff-ready, documented code</li>
                        </ul>
                        <div className="card-actions justify-end mt-4">
                            <a href="#Contact" className="btn btn-info btn-sm">Get in touch</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
