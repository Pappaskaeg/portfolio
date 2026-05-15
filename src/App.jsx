export default function NodeVaultPortfolio() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-blue-600/20 blur-3xl rounded-full animate-pulse" />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <div className="text-2xl font-bold tracking-[0.3em] text-cyan-400">
            NODEVAULT
          </div>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#systems" className="hover:text-cyan-400 transition">Systems</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl text-center z-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl mb-8">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
            <span className="text-cyan-300 text-sm tracking-widest">
              SYSTEM STATUS: ONLINE
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-none mb-8 tracking-tight">
            BUILDING THE
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
              FUTURE OF
            </span>
            <br />
            HOMELABS
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-8 mb-12">
            Smart home automation, Proxmox infrastructure,
            Home Assistant dashboards, WLED systems,
            networking and futuristic UI experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:scale-105 transition duration-300 shadow-2xl shadow-cyan-500/30"
            >
              Explore Systems
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              About NodeVault
            </div>

            <h2 className="text-5xl font-bold mb-8 leading-tight">
              Infrastructure.
              <br />
              Automation.
              <br />
              Design.
            </h2>

            <p className="text-gray-400 text-lg leading-8">
              I build high-performance homelab environments
              powered by Proxmox, Home Assistant,
              Zigbee2MQTT and modern automation systems.
              Focused on stability, scalability and futuristic UI design.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl shadow-cyan-500/10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest">
                    NODE STATUS
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 mt-2">
                    OPERATIONAL
                  </div>
                </div>

                <div className="w-5 h-5 rounded-full bg-green-400 animate-pulse" />
              </div>

              <div className="space-y-5 text-sm">
                <div className="flex justify-between border-b border-white/5 pb-3">
                  <span className="text-gray-400">Hypervisor</span>
                  <span>Proxmox VE</span>
                </div>

                <div className="flex justify-between border-b border-white/5 pb-3">
                  <span className="text-gray-400">Automation</span>
                  <span>Home Assistant</span>
                </div>

                <div className="flex justify-between border-b border-white/5 pb-3">
                  <span className="text-gray-400">Lighting</span>
                  <span>WLED Matrix</span>
                </div>

                <div className="flex justify-between border-b border-white/5 pb-3">
                  <span className="text-gray-400">Network</span>
                  <span>VLAN Segmented</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Uptime</span>
                  <span className="text-green-400">99.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <div className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Featured Systems
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Active Projects
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Advanced automation and infrastructure systems
            designed for performance and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Home Assistant Core',
              icon: '🏠',
              desc: 'Smart home dashboards, Zigbee2MQTT integration and automation workflows.',
              status: 'ONLINE'
            },
            {
              title: 'Proxmox Infrastructure',
              icon: '🖥️',
              desc: 'Virtualization cluster with containers, backups and NAS integration.',
              status: 'STABLE'
            },
            {
              title: 'WLED Matrix System',
              icon: '💡',
              desc: 'Custom LED matrix animations with live football and automation data.',
              status: 'ACTIVE'
            }
          ].map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-2 transition duration-500 hover:border-cyan-400/40 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition duration-500" />

              <div className="relative z-10">
                <div className="text-5xl mb-6">
                  {project.icon}
                </div>

                <div className="inline-flex px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs tracking-widest mb-5">
                  {project.status}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Systems */}
      <section id="systems" className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-3xl p-10 md:p-16 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div>
              <div className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
                Infrastructure Metrics
              </div>

              <h2 className="text-5xl font-bold leading-tight">
                Live System
                <br />
                Overview
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-6 min-w-[320px]">
              {[
                ['32', 'Automations'],
                ['18', 'Zigbee Devices'],
                ['99.9%', 'Uptime'],
                ['24/7', 'Monitoring']
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-black/20 p-6 text-center"
                >
                  <div className="text-3xl font-black text-cyan-400 mb-2">
                    {item[0]}
                  </div>

                  <div className="text-sm text-gray-400 uppercase tracking-widest">
                    {item[1]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 max-w-4xl mx-auto px-6 py-32">
        <div className="text-center mb-14">
          <div className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Contact
          </div>

          <h2 className="text-5xl font-bold mb-6">
            Connect To NodeVault
          </h2>

          <p className="text-gray-400 text-lg">
            Interested in automation, homelab systems or futuristic interfaces?
          </p>
        </div>

        <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-3xl p-8 md:p-10 shadow-2xl">
          <form className="space-y-6">
            <div>
              <label className="block text-sm uppercase tracking-widest text-gray-400 mb-3">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm uppercase tracking-widest text-gray-400 mb-3">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm uppercase tracking-widest text-gray-400 mb-3">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none focus:border-cyan-400 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-lg hover:scale-[1.02] transition duration-300 shadow-2xl shadow-cyan-500/20"
            >
              Send Transmission
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-10 text-center text-gray-500 text-sm">
        © 2026 NODEVAULT — Infrastructure • Automation • Smart Systems
      </footer>
    </div>
  )
}
