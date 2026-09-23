import { useState } from 'react';
import { ArrowUpRight, Menu, X, Mail, Sparkles, Cpu, Satellite, Globe2, HeartPulse, ExternalLink } from 'lucide-react';
import { SiGoldmansachs, SiBankofamerica, SiGoogle, SiIbm, SiAmazonaws, SiOracle } from '@icons-pack/react-simple-icons';

const companies = [
  ['Goldman Sachs', SiGoldmansachs, 'Internal Audit · Software Engineering'],
  ['JPMorgan Chase & Co.', null, 'Software Engineering'],
  ['Bank of America', SiBankofamerica, 'Investment Banking'],
  ['Microsoft', null, 'Azure · Data Engineering'],
  ['Google', SiGoogle, 'Project Management · Data'],
  ['IBM', SiIbm, 'Data Science · AI'],
  ['AWS', SiAmazonaws, 'Cloud'],
  ['Oracle', SiOracle, 'Cloud']
];

const books = [
  ['The Heart Has A Memory','2026','282 pages','B0GNKNV7B3','Exploring the heart–brain continuum, emerging science and embodied understanding.'],
  ['Brewing Innovations','2023','100 pages','B0C8CHCW2G','Exploring the world of technologies and artificial intelligence.'],
  ['SHEMA ISRAEL: THE REAL VIBE','2022','34 pages','B0BK5CH7WR','A short work centered on knowledge, understanding, love, kindness and peace.']
];

const skills = ['Artificial Intelligence','Machine Learning','Data Analysis','Data Analytics','Python','C++','JavaScript','Swift','HTML','Git','Cybersecurity','DevOps','Microsoft Azure','IBM Cloud','Oracle Cloud','Power BI','Project Management','Critical Thinking','Stakeholder Management','Communication','Community Outreach','Event Planning','Risk Assessment','Technical Documentation','Quality Management','Adaptability','Accountability','Collaboration','Empathy'];

function ProtectedMark({ children, tone = 'dark' }) {
  return <div className={`protected-mark ${tone}`}>{children}</div>;
}

function CompanyLogo({ Icon, name }) {
  if (Icon) return <Icon title={`${name} logo`} color="default" size={32} aria-label={`${name} logo`} />;
  return <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-[9px] font-bold tracking-[-.04em] text-white" aria-label={`${name} logo`}>JPM</span>;
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const body = `Name: ${form.get('name')}\nEmail: ${form.get('email')}\n\n${form.get('message')}`;
    setSent(true);
    window.location.href = 'mailto:hello@example.com?subject=' +
      encodeURIComponent('Portfolio enquiry from ' + form.get('name')) +
      '&body=' + encodeURIComponent(body);
  };

  const nav = ['Science','Experience','Service','Publications','Contact'];

  return <div className="min-h-screen overflow-x-hidden bg-[#f7f8fa] text-[#0b0d10]">
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex min-h-[68px] max-w-[1240px] items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#top" className="shrink-0 font-semibold tracking-[.18em]">ZR <span className="ml-2 text-[10px] text-slate-500">ZAFAR RIZA</span></a>
        <div className="hidden items-center gap-7 md:flex">{nav.map(x => <a key={x} href={'#' + x.toLowerCase()} className="text-[11px] tracking-[.12em] text-slate-500 transition hover:text-black">{x}</a>)}</div>
        <button onClick={() => setMenu(!menu)} className="rounded-full border p-2 md:hidden" aria-label={menu ? 'Close menu' : 'Open menu'}>{menu ? <X size={18}/> : <Menu size={18}/>}</button>
      </nav>
      {menu && <div className="border-t bg-white px-5 py-2 md:hidden">{nav.map(x => <a onClick={() => setMenu(false)} key={x} href={'#' + x.toLowerCase()} className="block border-b border-black/5 py-3 text-sm last:border-0">{x}</a>)}</div>}
    </header>

    <main id="top">
      <section className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-32">
        <div>
          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border bg-white px-3 py-1.5 text-[9px] font-semibold tracking-[.14em] text-slate-600 sm:text-[10px]"><Sparkles size={12}/> SCIENCE · TECHNOLOGY · ENTREPRENEURSHIP</div>
          <h1 className="text-[clamp(3.25rem,10vw,7.8rem)] font-semibold leading-[.9] tracking-[-.065em]">Build what<br/><span className="bg-gradient-to-r from-black via-violet-600 to-cyan-600 bg-clip-text text-transparent">doesn't exist.</span></h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">Scientist-minded builder, AI automation specialist, published author and founder of ZR PRODUCTIONS — exploring intelligent systems, data, space and ambitious technology.</p>
          <div className="mt-9 flex flex-col gap-3 xs:flex-row sm:flex-row"><a href="#publications" className="rounded-full bg-black px-5 py-3 text-center text-xs font-semibold text-white">Explore the work <ArrowUpRight className="ml-2 inline" size={14}/></a><a href="#contact" className="rounded-full border bg-white px-5 py-3 text-center text-xs font-semibold">Contact</a></div>
          <div className="mt-12 grid max-w-xl grid-cols-1 gap-3 border-t pt-6 text-[10px] font-semibold tracking-[.12em] text-slate-500 sm:grid-cols-3 sm:gap-4"><span>AI & AUTOMATION</span><span>SPACE & RESEARCH</span><span>VENTURES</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-400/30 via-cyan-300/20 to-pink-300/20 blur-2xl"/>
          <div className="relative rounded-[2rem] border bg-white p-2 shadow-2xl">
            <img src="/Portfolio/assets/profile.png" alt="Zafar Riza" className="aspect-[4/4.6] w-full rounded-[1.55rem] object-cover" onError={(e)=>{e.currentTarget.style.background='#e8ebf0';}}/>
            <div className="absolute bottom-5 left-5 rounded-2xl bg-[#090b10]/90 px-4 py-3 text-white backdrop-blur-xl sm:bottom-6 sm:left-6 sm:px-5 sm:py-4"><div className="font-serif text-2xl text-[#e9d39a] sm:text-3xl">$100B</div><div className="text-[8px] tracking-[.18em] text-white/55">ASPIRATIONAL VISION</div></div>
          </div>
        </div>
      </section>

      <section id="science" className="bg-[#080a0e] text-white"><div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <p className="text-[10px] font-semibold tracking-[.22em] text-cyan-300">01 / SCIENCE</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.055em] sm:text-6xl lg:text-7xl">Think in systems.<br/><span className="font-serif font-normal text-cyan-200">Build in reality.</span></h2>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">{[['AI & Machine Learning',Cpu,'Machine learning, computer vision, data science and intelligent automation.'],['Space & Dynamics',Satellite,'Spacecraft dynamics, astronomy and space technology.'],['Research & Analysis',Globe2,'Mathematical thinking, algorithms, analytics and structured research.'],['Human-Centered Innovation',HeartPulse,'Technology concepts connected to healthcare, sustainability and human needs.']].map(([t,I,p])=><article key={t} className="rounded-3xl border border-white/10 bg-white/[.035] p-6 sm:p-7"><I className="text-cyan-300" size={26}/><h3 className="mt-7 text-xl font-semibold">{t}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{p}</p></article>)}</div>
      </div></section>

      <section id="experience" className="mx-auto max-w-[1240px] px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <p className="text-[10px] font-semibold tracking-[.22em] text-violet-600">02 / EXPERIENCE</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.055em] sm:text-6xl lg:text-7xl">Experience &<br/><span className="font-serif font-normal text-violet-600">recognition.</span></h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14">
          <article className="rounded-[2rem] bg-[#090b10] p-7 text-white sm:p-8"><ProtectedMark>NASA</ProtectedMark><span className="mt-6 inline-block text-[9px] tracking-[.16em] text-cyan-200">STEM ENGAGEMENT PROGRAMME</span><h3 className="mt-4 text-2xl font-semibold">Artificial Developer in Satellites in Artemis Missions</h3><p className="mt-4 text-sm leading-7 text-slate-400">Portfolio role description supplied by Zafar Riza. NASA's Office of STEM Engagement provides STEM opportunities connected to aerospace education and careers.</p><a className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-cyan-200" href="https://www.nasa.gov/learning-resources/stem-engagement/" target="_blank" rel="noreferrer">NASA STEM Engagement <ExternalLink size={13}/></a></article>
          {companies.slice(0,3).map(([n,Icon,d])=><article key={n} className="rounded-[2rem] border bg-white p-7 shadow-sm sm:p-8"><div className="flex items-center gap-4"><CompanyLogo Icon={Icon} name={n}/><div><h3 className="font-semibold">{n}</h3><p className="text-xs text-slate-500">{d}</p></div></div><p className="mt-8 border-t pt-6 text-sm leading-7 text-slate-600">{n==='Goldman Sachs'?'Internal Audit and Software Engineering virtual experiences: internal controls, compliance risk, cybersecurity governance and password-hashing analysis.':n.includes('JPMorgan')?'Software Engineering virtual experience: development environments, repository troubleshooting and real-time financial-data visualization.':'Investment Banking virtual experience: acquisition analysis using SWOT, DCF valuation and sensitivity analysis.'}</p></article>)}
        </div>
        <h3 className="mt-16 text-sm font-semibold tracking-[.15em] text-slate-500 sm:mt-20">TECHNOLOGY & LEARNING ECOSYSTEM</h3>
        <div className="mt-5 grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-4">{companies.slice(3).map(([n,Icon,d])=><div key={n} className="flex items-center gap-3 rounded-2xl border bg-white p-4"><CompanyLogo Icon={Icon} name={n}/><div><div className="text-xs font-semibold">{n}</div><div className="text-[10px] text-slate-400">{d}</div></div></div>)}</div>
      </section>

      <section id="service" className="border-y bg-white"><div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <p className="text-[10px] font-semibold tracking-[.22em] text-[#0093d5]">03 / SERVICE</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.055em] sm:text-6xl lg:text-7xl">Service with a<br/><span className="font-serif font-normal text-[#0093d5]">human purpose.</span></h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3 lg:mt-14">
          {[['UNICEF','Volunteer participation · diplomatic/community engagement','https://www.unicef.org/'],['WHO','Volunteer participation · diplomatic/community engagement','https://www.who.int/'],['Meer Foundation','Community-focused volunteering · outreach · coordination','https://www.meerfoundation.org/']].map(([n,p,u])=><article key={n} className="rounded-[2rem] border bg-[#f8fafc] p-7 sm:p-8"><ProtectedMark tone="blue">{n}</ProtectedMark><h3 className="mt-7 text-xl font-semibold">{n}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{p}</p><a href={u} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold">Official website <ExternalLink size={13}/></a></article>)}
        </div>
        <p className="mt-6 max-w-3xl text-xs leading-6 text-slate-400">NASA, UNICEF and WHO marks are protected. The portfolio uses clean text identifiers rather than reproducing official protected emblems without the required permission, while keeping the organizations clearly identified.</p>
      </div></section>

      <section id="publications" className="mx-auto max-w-[1240px] px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"><p className="text-[10px] font-semibold tracking-[.22em] text-violet-600">04 / PUBLICATIONS</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.055em] sm:text-6xl lg:text-7xl">Ideas become<br/><span className="font-serif font-normal text-violet-600">artifacts.</span></h2>
        <div className="mt-12 grid gap-4 lg:mt-14 lg:grid-cols-3">{books.map(([t,y,p,id,d])=><article key={id} className="flex min-h-[360px] flex-col rounded-[2rem] border bg-white p-7 shadow-sm sm:p-8"><span className="text-[9px] font-semibold tracking-[.18em] text-slate-400">BOOK · {y}</span><h3 className="mt-6 text-2xl font-semibold">{t}</h3><p className="mt-4 text-sm leading-7 text-slate-600">{d}</p><span className="mt-auto pt-8 text-[10px] uppercase tracking-[.12em] text-slate-400">{p} · English</span><a href={'https://www.amazon.com/dp/'+id} target="_blank" rel="noreferrer" className="mt-4 rounded-full bg-black px-4 py-3 text-center text-[10px] font-semibold uppercase tracking-[.12em] text-white">View on Amazon <ArrowUpRight className="ml-2 inline" size={14}/></a></article>)}</div>
      </section>

      <section className="bg-[#080a0e] text-white"><div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"><p className="text-[10px] font-semibold tracking-[.22em] text-cyan-300">05 / CAPABILITIES</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.055em] sm:text-6xl lg:text-7xl">Technical depth.<br/><span className="font-serif font-normal text-cyan-200">Human skills.</span></h2><div className="mt-10 flex flex-wrap gap-2 sm:mt-12">{skills.map(s=><span key={s} className="rounded-full border border-white/10 bg-white/[.035] px-3 py-2 text-[11px] text-slate-300">{s}</span>)}</div></div></section>

      <section id="contact" className="mx-auto max-w-[1240px] px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-14"><div><p className="text-[10px] font-semibold tracking-[.22em] text-violet-600">06 / CONTACT</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.055em] sm:text-6xl lg:text-7xl">Let's build the<br/><span className="font-serif font-normal text-violet-600">next chapter.</span></h2><p className="mt-7 max-w-md text-sm leading-7 text-slate-500">For technology projects, research conversations, partnerships or ambitious ideas.</p><div className="mt-8 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs text-slate-600"><Mail size={14}/> Contact form</div></div>
      <form onSubmit={submit} className="rounded-[2rem] border bg-white p-6 shadow-sm sm:p-8"><div className="grid gap-4 sm:grid-cols-2"><label className="text-xs font-medium">Name<input name="name" required autoComplete="name" className="mt-2 w-full rounded-2xl border bg-[#f8fafc] px-4 py-3 outline-none focus:border-violet-400"/></label><label className="text-xs font-medium">Email<input name="email" type="email" required autoComplete="email" className="mt-2 w-full rounded-2xl border bg-[#f8fafc] px-4 py-3 outline-none focus:border-violet-400"/></label></div><label className="mt-4 block text-xs font-medium">Message<textarea name="message" required rows="7" className="mt-2 w-full rounded-2xl border bg-[#f8fafc] px-4 py-3 outline-none focus:border-violet-400"/></label><button className="mt-4 w-full rounded-full bg-black px-6 py-3 text-xs font-semibold text-white sm:w-auto">Send enquiry <ArrowUpRight className="ml-2 inline" size={14}/></button>{sent&&<p className="mt-4 text-xs text-slate-500">Your email client should open with the message prepared.</p>}<p className="mt-4 text-[10px] text-slate-400">Replace hello@example.com in src/App.jsx with the professional email address you want to receive enquiries.</p></form></div></section>

      <section className="border-t bg-[#f1f3f6]"><div className="mx-auto max-w-[1240px] px-5 py-20 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-32"><p className="text-[10px] font-semibold tracking-[.22em] text-slate-500">THE VISION</p><div className="mt-10 bg-gradient-to-b from-slate-900 to-slate-400 bg-clip-text text-[clamp(6rem,22vw,18rem)] font-bold leading-none tracking-[-.1em] text-transparent">$100<span className="font-serif">B</span></div><p className="mx-auto mt-10 max-w-2xl text-sm text-slate-500">An aspirational $100B-scale vision — not a claim of current net worth.</p></div></section>
    </main>
    <footer className="border-t bg-white"><div className="mx-auto flex max-w-[1240px] flex-col gap-3 px-5 py-8 text-[10px] tracking-[.12em] text-slate-500 sm:flex-row sm:justify-between lg:px-8"><span>ZR — ZAFAR RIZA</span><span>SCIENTIST · BUILDER · AUTHOR · FOUNDER</span></div></footer>
  </div>;
}
