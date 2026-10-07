export default function NodeVaultPortfolio() {
  const systems = [
    {
      name: "Home Assistant",
      icon: "🏠",
      status: "ONLINE",
      description:
        "Smart home control, dashboards, automations, climate and connected devices.",
    },
    {
      name: "Proxmox Cluster",
      icon: "🖥️",
      status: "ONLINE",
      description:
        "Virtualization infrastructure running VMs, containers, services and backups.",
    },
    {
      name: "Jellyfin",
      icon: "🎬",
      status: "ONLINE",
      description:
        "Self-hosted media platform connected to the home NAS and local media library.",
    },
    {
      name: "Immich",
      icon: "📸",
      status: "ONLINE",
      description:
        "Private photo management and backup running inside the NodeVault environment.",
    },
    {
      name: "Grafana + Prometheus",
      icon: "📊",
      status: "MONITORED",
      description:
        "Infrastructure monitoring, metrics and visual dashboards across the homelab.",
    },
    {
      name: "Uptime Kuma",
      icon: "📡",
      status: "MONITORING",
      description:
        "Service monitoring for the systems and applications running across the network.",
    },
    {
      name: "WLED Matrix",
      icon: "💡",
      status: "ACTIVE",
      description:
        "Custom LED matrix system with animations, football data and Home Assistant integration.",
    },
    {
      name: "Zigbee2MQTT",
      icon: "📶",
      status: "ONLINE",
      description:
        "Local Zigbee infrastructure connecting smart home sensors, switches and devices.",
    },
    {
      name: "Ollama / AI",
      icon: "🧠",
      status: "ACTIVE",
      description:
        "Local AI models running inside the homelab without relying entirely on cloud services.",
    },
    {
      name: "Paperless-ngx",
      icon: "📄",
      status: "ONLINE",
      description:
        "Digital document management and automated document archiving.",
    },
    {
      name: "Vaultwarden",
      icon: "🔐",
      status: "ONLINE",
      description:
        "Self-hosted password management running securely within NodeVault.",
    },
    {
      name: "MeshCentral",
      icon: "🛰️",
      status: "ONLINE",
      description:
        "Remote management and administration of machines across the homelab.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-[40%] -right-40 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <a
            href="#home"
            className="text-2xl font-bold tracking-[0.35em] text-cyan-400"
          >
            NODEVAULT
          </a>

          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#systems" className="hover:text-cyan-400 transition">
              Systems
            </a>
            <a href="#overview" className="hover:text-cyan-400 transition">
              Overview
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="max-w-5xl mx-auto text-center">

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-300 text-sm tracking-widest mb-10">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
            NODEVAULT SYSTEM STATUS: ONLINE
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9]">
            BUILDING THE
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              FUTURE
            </span>{" "}
            OF
            <br />
            HOME LABS
          </h1>

          <p className="mt-10 max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-8">
            A personal infrastructure built around automation, virtualization,
            self-hosting, networking, AI and futuristic interfaces.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="#systems"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 font-semibold hover:scale-105 transition shadow-[0_0_35px_rgba(34,211,238,0.25)]"
            >
              Explore Systems
            </a>

            <a
              href="#overview"
              className="px-8 py-4 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition"
            >
              System Overview
            </a>
          </div>

        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 max-w-7xl mx-auto px-6 py-32">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <div className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-5">
              About NodeVault
            </div>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Infrastructure.
              <br />
              Automation.
              <br />
              Design.
            </h2>

            <p className="mt-8 text-gray-400 text-lg leading-8 max-w-xl">
              NodeVault is my personal homelab environment where
              infrastructure, automation and technology come together.
              Everything is designed around reliability, control and the
              freedom to run services locally.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 shadow-2xl">

            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="text-gray-500 text-sm tracking-widest">
                  NODE STATUS
                </div>

                <div className="text-2xl font-bold text-cyan-400 mt-2">
                  OPERATIONAL
                </div>
              </div>

              <div className="w-4 h-4 rounded-full bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.8)]" />
            </div>

            {[
              ["Hypervisor", "Proxmox VE"],
              ["Automation", "Home Assistant"],
              ["Media", "Jellyfin"],
              ["Photos", "Immich"],
              ["Monitoring", "Grafana"],
              ["AI", "Ollama"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between py-4 border-t border-white/10"
              >
                <span className="text-gray-500">{label}</span>
                <span className="text-gray-200 font-medium">{value}</span>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Systems */}
      <section id="systems" className="relative z-10 max-w-7xl mx-auto px-6 py-32">

        <div className="text-center mb-16">
          <div className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            NodeVault Infrastructure
          </div>

          <h2 className="text-5xl md:text-6xl font-bold">
            Active Systems
          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of the services, platforms and hardware powering
            the NodeVault homelab.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {systems.map((system) => (
            <div
              key={system.name}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl hover:-translate-y-2 hover:border-cyan-400/30 transition duration-500"
            >

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/10 group-hover:to-blue-500/10 transition duration-500" />

              <div className="relative z-10">

                <div className="text-4xl mb-6">
                  {system.icon}
                </div>

                <div className="flex items-center justify-between mb-5">

                  <h3 className="text-xl font-bold">
                    {system.name}
                  </h3>

                  <span className="text-[10px] tracking-widest px-2.5 py-1 rounded-full border border-green-400/20 bg-green-400/5 text-green-400">
                    {system.status}
                  </span>

                </div>

                <p className="text-gray-500 leading-7">
                  {system.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="relative z-10 max-w-7xl mx-auto px-6 py-32">

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 md:p-12">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <div className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-5">
                Infrastructure Metrics
              </div>

              <h2 className="text-5xl font-bold">
                Live System
                <br />
                Overview
              </h2>

              <p className="mt-6 text-gray-400 leading-7 max-w-lg">
                The NodeVault environment combines virtualization,
                automation, monitoring, media, AI and smart-home
                infrastructure into one self-hosted ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">

              {[
                ["12+", "Core Systems"],
                ["24/7", "Monitoring"],
                ["100%", "Self Hosted"],
                ["∞", "Possibilities"],
              ].map(([number, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-black/30 p-7 text-center"
                >
                  <div className="text-4xl font-bold text-cyan-400">
                    {number}
                  </div>

                  <div className="mt-3 text-xs uppercase tracking-widest text-gray-500">
                    {label}
                  </div>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 max-w-4xl mx-auto px-6 py-32">

        <div className="text-center">

          <div className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-5">
            Contact
          </div>

          <h2 className="text-5xl md:text-6xl font-bold">
            Connect To NodeVault
          </h2>

          <p className="mt-6 text-gray-400 text-lg">
            Interested in homelabs, automation, infrastructure or
            self-hosted technology?
          </p>

          <a
            href="mailto:hello@nodevault.dk"
            className="inline-block mt-10 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 font-semibold hover:scale-105 transition"
          >
            Get In Touch
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-600">

          <span>
            © {new Date().getFullYear()} NodeVault
          </span>

          <span>
            Homelab · Automation · Infrastructure · Self Hosting
          </span>

        </div>

      </footer>

    </div>
  );
}