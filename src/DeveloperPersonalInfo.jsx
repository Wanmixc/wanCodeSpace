import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Globe,
  FileDown,
  Code2,
  Cpu,
  Rocket,
  Sun,
  Moon,
  Sparkles,
  Phone,
} from "lucide-react";

// —— Quick animation helpers
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const stagger = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.08 },
  },
};

export default function DeveloperPersonalInfo() {
  // —— Data yang mudah diganti
  const profile = useMemo(
    () => ({
      name: "Irawan S.A",
      role: "Full‑Stack Developer",
      tagline:
        "Membangun aplikasi yang cepat, aman, dan menyenangkan dipakai — dari database hingga UI.",
      location: "Batam, Indonesia",
      website: "https://example.dev",
      email: "you@example.com",
      phone: "+62 812‑3456‑7890",
      socials: {
        github: "https://github.com/username",
        linkedin: "https://linkedin.com/in/username",
      },
      skills: [
        { label: "JavaScript/TypeScript", level: 92 },
        { label: "React + Tailwind", level: 90 },
        { label: "Node.js / Express", level: 88 },
        { label: "PHP (CodeIgniter)", level: 86 },
        { label: "C# / ASP.NET", level: 82 },
        { label: "SQL Server / Postgres", level: 88 },
        { label: "Android (Java)", level: 75 },
        { label: "UI/UX Design", level: 72 },
      ],
      stacks: ["React", "Vite", "Tailwind", "Node", "CI3", "ASP.NET", "PostgreSQL", "SQL Server"],
      experiences: [
        {
          title: "Software Engineer",
          company: "PT Riau Sakti United Plantations (RSUP)",
          period: "2021 — Sekarang",
          points: [
            "Mendesain & membangun modul klinik, HR/payroll, dan operasional (MyPAD, MyAIS, MyFleet).",
            "Optimasi query kompleks (T‑SQL/PLpgSQL) hingga 4x lebih cepat.",
            "Menerapkan arsitektur API terukur serta otentikasi JWT.",
          ],
        },
        {
          title: "Full‑Stack Freelancer",
          company: "Remote",
          period: "2018 — 2021",
          points: [
            "Membangun dashboard & aplikasi mobile ringan untuk UMKM.",
            "Integrasi payment & WhatsApp gateway untuk otomatisasi bisnis.",
          ],
        },
      ],
      projects: [
        {
          title: "e‑Klinik RSUP",
          desc: "Sistem rekam medis dengan integrasi payroll & laporan PDF (FPDF).",
          tags: ["ASP.NET", "PostgreSQL", "FPDF"],
          link: "#",
        },
        {
          title: "MyFleet",
          desc: "Aplikasi Android untuk operasional harian & monitoring armada.",
          tags: ["Android", "SQLite", "Retrofit"],
          link: "#",
        },
        {
          title: "Koperasi App",
          desc: "Web CRUD + export Excel (PhpSpreadsheet), stok, dan transaksi.",
          tags: ["PHP", "MySQL", "Bootstrap"],
          link: "#",
        },
      ],
    }),
    []
  );

  // —— Dark mode lokal halaman (tanpa global theme)
  const [dark, setDark] = useState(true);

  return (
    <div className={"min-h-screen w-full font-sans antialiased " + (dark ? "dark" : "") }>
      {/* Inline CSS untuk animasi blob */}
      <style>{`
        .animate-blob { animation: blob 18s infinite; }
        .animation-delay-2 { animation-delay: 6s; }
        .animation-delay-4 { animation-delay: 12s; }
        @keyframes blob {
          0% { transform: translate(0,0) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 10px) scale(0.98); }
          100% { transform: translate(0,0) scale(1); }
        }
      `}</style>

      {/* Background */}
      <div className="relative">
        <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900" />
        <div className="pointer-events-none fixed -top-32 -right-16 -z-10 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-indigo-400/30 via-fuchsia-400/30 to-cyan-400/30 blur-3xl animate-blob" />
        <div className="pointer-events-none fixed -bottom-32 -left-24 -z-10 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-emerald-400/20 via-teal-400/20 to-indigo-400/20 blur-3xl animate-blob animation-delay-2" />
        <div className="pointer-events-none fixed top-1/3 left-1/3 -z-10 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-amber-400/20 via-pink-400/20 to-purple-400/20 blur-3xl animate-blob animation-delay-4" />
      </div>

      {/* Navbar mini */}
      <div className="sticky top-0 z-20 border-b border-slate-200/40 bg-white/70 backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-xl bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-200">
              {profile.name.split(" ")[0]} · Portfolio
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <button
              onClick={() => setDark((d) => !d)}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition hover:shadow dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            >
              {dark ? (
                <>
                  <Sun className="h-4 w-4" /> Mode Terang
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4" /> Mode Gelap
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Container */}
      <main className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        {/* Hero */}
        <motion.section
          {...fadeUp(0.05)}
          className="relative grid grid-cols-1 items-center gap-6 rounded-3xl border border-slate-200/60 bg-white/70 p-6 shadow-xl shadow-slate-900/[.03] backdrop-blur md:grid-cols-[1.2fr_.8fr] md:p-10 dark:border-slate-800/60 dark:bg-slate-900/60"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-cyan-500/10 px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200/70 dark:text-slate-300 dark:ring-slate-700/60">
              <Rocket className="h-4 w-4" /> Available for interesting projects
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl dark:text-white">
              {profile.name}
            </h1>
            <p className="text-lg font-medium text-slate-700 dark:text-slate-300">
              {profile.role}
            </p>
            <p className="max-w-2xl text-slate-600 md:text-lg dark:text-slate-400">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-2">
              {profile.stacks.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-200"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px] hover:shadow-lg dark:bg-white dark:text-slate-900"
              >
                <Mail className="h-4 w-4" /> Hubungi Saya
              </a>
              <a
                href="#cv"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <FileDown className="h-4 w-4" /> Unduh CV
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1 text-sm text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {profile.location}</span>
              <a href={profile.website} className="inline-flex items-center gap-1.5 hover:underline" target="_blank" rel="noreferrer">
                <Globe className="h-4 w-4" /> {profile.website.replace("https://", "")}
              </a>
              <a href={`tel:${profile.phone.replace(/\\s/g, "")}`} className="inline-flex items-center gap-1.5 hover:underline">
                <Phone className="h-4 w-4" /> {profile.phone}
              </a>
            </div>
          </div>

          {/* Avatar + Accent */}
          <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
              className="relative aspect-square overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white/60 to-slate-100/60 shadow-2xl ring-1 ring-white/60 dark:border-slate-800/60 dark:from-slate-800/50 dark:to-slate-900/50 dark:ring-slate-800/60"
            >
              {/* Placeholder avatar */}
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <Code2 className="mx-auto h-12 w-12 text-slate-400 dark:text-slate-500" />
                  <p className="pt-2 text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    Your Photo Here
                  </p>
                </div>
              </div>
              {/* Glow ring */}
              <div className="pointer-events-none absolute -inset-1 rounded-[2rem] ring-1 ring-black/5 dark:ring-white/5" />
            </motion.div>
          </div>
        </motion.section>

        {/* About + Stats */}
        <motion.section
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          <motion.div
            variants={fadeUp(0)}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-lg transition hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-2xl transition group-hover:bg-indigo-500/20" />
            <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Tentang Saya</h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Saya menyukai problem solving dan menulis kode yang bersih. Fokus pada
              developer experience, performa query, serta tampilan UI yang enak dipakai.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp(0.05)}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900/60"
          >
            <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl" />
            <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Keahlian</h3>
            <div className="space-y-4">
              {profile.skills.map((s, i) => (
                <div key={s.label} className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-300">
                    <span>{s.label}</span>
                    <span>{s.level}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-200/70 dark:bg-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: i * 0.05 }}
                      className="h-2 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp(0.1)}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900/60"
          >
            <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-amber-500/10 blur-2xl" />
            <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Ringkasan Cepat</h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2"><Cpu className="mt-0.5 h-4 w-4 text-slate-400" /> 5+ tahun pengalaman full‑stack</li>
              <li className="flex items-start gap-2"><Rocket className="mt-0.5 h-4 w-4 text-slate-400" /> Tertarik proyek skala kecil sampai enterprise</li>
              <li className="flex items-start gap-2"><Code2 className="mt-0.5 h-4 w-4 text-slate-400" /> Senang refactor dan optimasi query</li>
            </ul>
          </motion.div>
        </motion.section>

        {/* Timeline Pengalaman */}
        <motion.section
          {...fadeUp(0.05)}
          className="mt-12 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900/60"
        >
          <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">Pengalaman</h3>
          <div className="relative pl-6">
            {/* vertical line */}
            <div className="absolute left-[11px] top-0 h-full w-0.5 bg-slate-200 dark:bg-slate-800" />

            <div className="space-y-8">
              {profile.experiences.map((exp, idx) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="relative rounded-2xl border border-slate-200 bg-white/60 p-5 shadow-md hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50"
                >
                  <div className="absolute -left-[11px] top-5 h-2.5 w-2.5 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 ring-4 ring-white dark:ring-slate-900" />
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="text-base font-semibold text-slate-900 dark:text-white">
                      {exp.title} · <span className="text-slate-600 dark:text-slate-300">{exp.company}</span>
                    </div>
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400">{exp.period}</div>
                  </div>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
                    {exp.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          {...fadeUp(0.05)}
          className="mt-12 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900/60"
        >
          <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">Proyek Pilihan</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {profile.projects.map((p, idx) => (
              <motion.a
                key={p.title}
                href={p.link}
                target={p.link.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/60"
              >
                <div className="aspect-video w-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700" />
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white">{p.title}</h4>
                    <span className="text-xs text-slate-500 transition group-hover:text-slate-700 dark:text-slate-400 dark:group-hover:text-slate-200">
                      Lihat →
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          {...fadeUp(0.05)}
          className="mt-12 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900/60"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Tertarik Bekerja Sama?</h3>
              <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
                Kirimkan detail proyek, timeline, dan budget. Saya akan merespons secepatnya.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px] hover:shadow-lg dark:bg-white dark:text-slate-900"
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
            <div id="cv" className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-800 dark:bg-slate-900/60">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Unduh CV</h4>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                Ganti tautan di tombol berikut dengan file CV Anda.
              </p>
              <a
                href="#"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px] hover:shadow-lg"
              >
                <FileDown className="h-4 w-4" /> Download PDF
              </a>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="mx-auto mt-10 flex items-center justify-between gap-3 pb-6 text-xs text-slate-500 dark:text-slate-400">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span className="inline-flex items-center gap-1"><Globe className="h-3.5 w-3.5" /> Dibuat dengan React, Tailwind, Framer Motion.</span>
        </footer>
      </main>
    </div>
  );
}
