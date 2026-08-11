import { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, BriefcaseBusiness, CheckCircle2, Code2, FileText,
  Database, Download, Github, GraduationCap, Linkedin, Mail, Menu,
  Moon, Send, Server, Sparkles, Terminal, UserRound, X, Cloud,
  Layers3, ExternalLink
} from "lucide-react";
import { portfolio } from "./data/portfolio";

const skillIcons = {
  Languages: Code2,
  Frontend: Terminal,
  Backend: Server,
  Databases: Database,
  "Cloud & DevOps": Cloud,
};

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-violet-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      {description && <p className="mt-4 leading-7 text-slate-400">{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = [...document.querySelectorAll("section[id]")];
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const nav = [
    ["home", "Home"], ["about", "About"], ["skills", "Skills"],
    ["projects", "Projects"], ["assignments", "Assignments"], ["experience", "Experience"],
    ["education", "Education"], ["contact", "Contact"]
  ];

  const scrollTo = id => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#060812] text-slate-200">
      <div className="fixed inset-0 -z-10 bg-grid opacity-30" />
      <div className="fixed left-1/2 top-[-12rem] -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#0a0e1a]/75 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-violet-400/30 bg-violet-500/10 text-sm font-bold text-violet-200">VB</span>
            <span className="font-semibold text-white">Viraj Bhadange</span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {nav.map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)}
                className={`rounded-lg px-3 py-2 text-xs transition ${active === id ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"}`}>
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] md:grid"><Moon size={16} /></span>
            <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] md:hidden">
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {menuOpen && (
            <div className="absolute left-3 right-3 top-[4.5rem] rounded-xl border border-white/10 bg-[#0a0e1a] p-2 shadow-2xl md:hidden">
              {nav.map(([id, label]) => (
                <button key={id} onClick={() => scrollTo(id)} className="block w-full rounded-lg px-4 py-3 text-left text-sm text-slate-300 hover:bg-white/5 hover:text-white">{label}</button>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main>
        <section id="home" className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-16 pt-32">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
            <div className="animate-rise">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-200">
                <Sparkles size={13} /> Hello, I'm
              </span>
              <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Viraj <span className="gradient-text">Bhadange</span>
              </h1>
              <p className="mt-4 text-2xl font-semibold text-slate-200">{portfolio.shortRole}</p>
              <p className="mt-3 text-sm font-medium text-violet-300">{portfolio.role}</p>
              <p className="mt-7 max-w-xl text-base leading-8 text-slate-400">{portfolio.bio}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => scrollTo("projects")} className="btn-primary">View My Work <ArrowRight size={17} /></button>
                <a href={portfolio.resume} download className="btn-secondary"><Download size={17} /> Download Resume</a>
              </div>
              <div className="mt-3 flex flex-wrap gap-3">
                <a href={portfolio.github} target="_blank" rel="noreferrer" className="btn-secondary"><Github size={17} /> GitHub</a>
                <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="btn-secondary"><Linkedin size={17} /> LinkedIn</a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-8 rounded-full bg-violet-600/20 blur-3xl" />
              <div className="relative aspect-square rounded-full border border-violet-400/30 bg-gradient-to-br from-violet-500/10 to-cyan-400/5 p-3 shadow-[0_0_70px_rgba(139,92,246,.16)]">
                <div className="relative h-full overflow-hidden rounded-full border border-white/10 bg-[#0b101d]">
                  <img
                    src="/assets/viraj-profile.png"
                    alt="Viraj Bhadange"
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#060812]/90 via-[#060812]/30 to-transparent px-6 pb-8 pt-20 text-center">
                    <p className="font-semibold text-white">Building ideas into software.</p>
                    <p className="mt-2 text-sm text-slate-300">Full-Stack • AI • Cloud</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-2 top-1/4 rounded-xl border border-white/10 bg-[#0c1120]/80 p-3 backdrop-blur-xl"><Code2 className="text-violet-300" /></div>
              <div className="absolute -left-2 bottom-1/4 rounded-xl border border-white/10 bg-[#0c1120]/80 p-3 backdrop-blur-xl"><Layers3 className="text-cyan-300" /></div>
            </div>
          </div>
        </section>

        <section id="about" className="section-wrap">
          <SectionTitle eyebrow="01 — About" title="A developer who likes building things that work." description="Focused on practical software engineering, clean implementation and continuous technical growth." />
          <div className="glass grid gap-8 p-7 md:grid-cols-[.8fr_1.2fr] md:p-9">
            <div className="relative min-h-72 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-cyan-400/5">
              <div className="absolute inset-0 bg-grid opacity-50" />
              <div className="absolute inset-0">
                <img
                  src="/assets/viraj-profile.png"
                  alt="Viraj Bhadange"
                  className="h-full w-full object-cover object-top opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070a13] via-transparent to-transparent" />
              </div>
            </div>
            <div>
              <p className="leading-8 text-slate-400">I'm a software engineering student and developer who enjoys building real-world solutions with modern technologies. I like working across the stack, designing useful interfaces, developing reliable backends, and learning how systems work underneath.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {["Full-Stack Development", "Problem-solving & DSA", "Scalable Web Applications", "Clean Code & Best Practices", "Backend & Databases", "Continuous Learning"].map(item => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-3 text-sm text-slate-300">
                    <CheckCircle2 size={16} className="shrink-0 text-violet-300" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-wrap">
          <SectionTitle eyebrow="02 — Skills" title="Technical toolkit" description="Technologies I use to design, build, test and deploy software." />
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(portfolio.skills).map(([category, skills]) => {
              const Icon = skillIcons[category] || Code2;
              return (
                <div key={category} className="glass card-hover p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500/10 text-violet-300"><Icon size={19} /></span>
                    <h3 className="font-semibold text-white">{category}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skills.map(skill => <span key={skill} className="skill-pill">{skill}</span>)}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="projects" className="section-wrap">
          <div className="mb-10 flex items-end justify-between gap-4">
            <SectionTitle eyebrow="03 — Projects" title="Selected work" description="A collection of applications and technical projects built while learning and solving real problems." />
            <span className="hidden rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-200 sm:block">{portfolio.projects.length} projects</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {portfolio.projects.map(project => (
              <article key={project.number + project.name} className="glass card-hover flex min-h-[290px] flex-col p-5">
                <div className="flex items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-xs font-bold text-slate-300">{project.number}</span>
                  <Code2 size={18} className="text-violet-300" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">{project.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.technologies.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
                <div className="mt-auto flex gap-2 pt-6">
                  <a href={project.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label={`${project.name} GitHub`}><Github size={16} /></a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="icon-btn" aria-label={`${project.name} live demo`}><ExternalLink size={16} /></a>
                  <button className="icon-btn ml-auto" aria-label={`View ${project.name}`}><ArrowUpRight size={16} /></button>
                </div>
              </article>
            ))}
          </div>
        </section>


        <section id="assignments" className="section-wrap">
          <SectionTitle
            eyebrow="04 — Assignments"
            title="Academic work & assignments"
            description="Keep your important college assignments, reports and practical work organized in one place."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.assignments.map((assignment) => (
              <article key={assignment.number + assignment.title} className="glass card-hover flex min-h-[255px] flex-col p-6">
                {assignment.file?.match(/\\.(jpg|jpeg|png|webp)$/i) && (
                  <div className="mb-5 overflow-hidden rounded-xl border border-white/10 bg-black/20">
                    <img
                      src={assignment.file}
                      alt={`${assignment.title} assignment`}
                      className="h-44 w-full object-cover transition duration-300 hover:scale-[1.02]"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500/10 text-sm font-bold text-violet-300">
                    {assignment.number}
                  </span>
                  <FileText size={20} className="text-violet-300" />
                </div>

                <p className="mt-5 text-xs font-medium uppercase tracking-wider text-violet-300">
                  {assignment.subject}
                </p>

                <h3 className="mt-2 text-lg font-semibold text-white">
                  {assignment.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {assignment.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {assignment.tags.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <a
                    href={assignment.file}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary w-full justify-center"
                  >
                    <FileText size={16} /> View Assignment
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-dashed border-white/10 bg-white/[0.02] p-4 text-sm text-slate-500">
            <strong className="text-slate-300">To add an assignment:</strong>{" "}
            add a new object inside <code className="text-violet-300">assignments</code> in
            <code className="mx-1 text-violet-300">src/data/portfolio.js</code> and place the PDF inside
            <code className="mx-1 text-violet-300">public/assignments/</code>.
          </div>
        </section>

        <section id="experience" className="section-wrap">
          <SectionTitle eyebrow="05 — Experience" title="Experience & practice" description="Placeholder entries are intentionally generic until real company names, dates and achievements are added." />
          <div className="glass p-6 md:p-8">
            <div className="relative ml-2 border-l border-white/10 pl-7">
              {portfolio.experience.map((item, index) => (
                <div key={index} className="relative pb-10 last:pb-0">
                  <span className="absolute -left-[2.05rem] top-1 h-3 w-3 rounded-full border-2 border-violet-300 bg-[#080b15] shadow-[0_0_15px_rgba(139,92,246,.7)]" />
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-white">{item.role}</h3>
                      <p className="mt-1 text-sm text-violet-300">{item.company}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-500">{item.duration}</span>
                  </div>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">{item.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">{item.technologies.map(t => <span key={t} className="tech-tag">{t}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section-wrap">
          <SectionTitle eyebrow="06 — Education" title="Academic foundation" />
          <div className="glass flex flex-col gap-5 p-7 sm:flex-row sm:items-center">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-violet-500/10 text-violet-300"><GraduationCap /></div>
            <div>
              <h3 className="text-xl font-semibold text-white">{portfolio.education.degree}</h3>
              <p className="mt-1 text-slate-400">{portfolio.education.college}</p>
              <p className="mt-2 text-sm text-violet-300">{portfolio.education.graduation}</p>
            </div>
          </div>
        </section>

        <section className="section-wrap">
          <SectionTitle eyebrow="07 — Current Focus" title="What I'm learning next" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.focus.map((item, i) => (
              <div key={item} className="glass card-hover flex items-center gap-3 p-4">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-violet-500/10 text-xs font-bold text-violet-300">0{i + 1}</span>
                <span className="text-sm font-medium text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="section-wrap">
          <div className="overflow-hidden rounded-2xl border border-violet-400/20 bg-gradient-to-r from-violet-500/15 via-[#0c1120] to-cyan-500/10 p-7 md:flex md:items-center md:justify-between md:p-9">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-violet-500/15 text-violet-200"><Download /></div>
              <div><p className="text-xl font-semibold text-white">Resume</p><p className="mt-1 text-sm text-slate-400">Download my resume to learn more about my skills and experience.</p></div>
            </div>
            <a href={portfolio.resume} download className="btn-secondary mt-5 md:mt-0"><Download size={17} /> Download Resume</a>
          </div>
        </section>

        <section id="contact" className="section-wrap pb-16">
          <SectionTitle eyebrow="08 — Contact" title="Let's build something together." description="Have an idea, internship opportunity or software project? Send a message." />
          <div className="glass grid gap-8 p-7 lg:grid-cols-[.75fr_1.25fr] md:p-9">
            <div>
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-violet-500/10 text-violet-300"><Mail /></div>
              <h3 className="mt-5 text-xl font-semibold text-white">Get in touch</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">I'm open to discussing projects, internships, collaborations and software-development opportunities.</p>
              <div className="mt-7 space-y-4 text-sm">
                <a href={`mailto:${portfolio.email}`} className="flex items-center gap-3 text-slate-300 hover:text-white"><Mail size={16} /> {portfolio.email}</a>
                <a href={portfolio.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white"><Github size={16} /> GitHub</a>
                <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white"><Linkedin size={16} /> LinkedIn</a>
              </div>
            </div>

            <form onSubmit={e => { e.preventDefault(); alert("Connect this form to your preferred email/form backend."); }} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="field"><span>Name</span><input required placeholder="Your name" /></label>
                <label className="field"><span>Email</span><input required type="email" placeholder="Your email" /></label>
              </div>
              <label className="field"><span>Message</span><textarea required rows="5" placeholder="Tell me about your idea..." /></label>
              <button className="btn-primary justify-center sm:w-fit sm:px-8"><Send size={16} /> Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="font-semibold text-slate-200">{portfolio.name}</p><p className="mt-1">Software Engineer</p></div>
          <div className="flex gap-5"><a href={portfolio.github}>GitHub</a><a href={portfolio.linkedin}>LinkedIn</a><a href={`mailto:${portfolio.email}`}>Email</a></div>
          <p>© 2026 {portfolio.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;