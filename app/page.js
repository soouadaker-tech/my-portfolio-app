import { profile as p } from "@/data/profile";
import Sidebar from "@/components/Sidebar";
import Section from "@/components/Section";
import Job from "@/components/Job";
import Tags from "@/components/Tags";

export default function Home() {
  return (
    <div className="min-h-screen md:grid md:grid-cols-[320px_1fr]">
      <Sidebar />

      <main className="max-w-4xl px-6 pb-24 pt-12 md:px-[clamp(24px,6vw,88px)] md:pt-[72px]">
        <header>
          <h1 className="font-display text-[clamp(44px,8vw,92px)] font-extrabold leading-[.95] tracking-tighter">
            <span className="block animate-rise">{p.first}</span>
            <span className="block animate-rise text-accent [animation-delay:.12s]">{p.last}</span>
          </h1>
          <p className="mt-5 font-display text-xl font-medium text-muted md:text-2xl">{p.role}</p>
          <p className="mt-7 max-w-[62ch] text-lg">{p.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`https://mail.google.com/mail/?view=cm&fo=1&to=${p.email}&su=${encodeURIComponent("Prise de contact depuis votre portfolio")}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border-2 border-ink bg-ink px-6 py-3 font-semibold text-bg transition hover:border-accent hover:bg-accent hover:text-white"
          >
            Me contacter
          </a>
            <a href="#experience" className="rounded-full border-2 border-ink px-6 py-3 font-semibold transition hover:border-accent hover:bg-accent hover:text-white">
              Voir mon parcours
            </a>
          </div>
        </header>

        <Section id="experience" title="Expériences professionnelles">
          {p.experience.map((e) => <Job key={e.title} {...e} />)}
        </Section>

        <Section id="projets" title="Projets">
          <div className="grid gap-5">
            {p.projects.map((pr) => (
              <article key={pr.title} className="rounded-md border border-line border-l-[6px] border-l-accent bg-surface p-7">
                <h3 className="font-display text-[22px] font-bold">{pr.title}</h3>
                <p className="my-3 max-w-[64ch]">{pr.text}</p>
                <Tags list={pr.tags} />
                {pr.link && (
                  <a href={pr.link} target="_blank" rel="noreferrer" className="mt-4 inline-block border-b-2 border-accent font-semibold">
                    Voir le code
                  </a>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section id="competences" title="Compétences">
          <div className="grid gap-7 sm:grid-cols-2">
            {p.skills.map(([name, list]) => (
              <div key={name}>
                <h3 className="mb-3 font-display text-[17px] font-bold">{name}</h3>
                <Tags list={list} />
              </div>
            ))}
          </div>
        </Section>

        <Section id="formation" title="Formation">
          {p.education.map((e) => <Job key={e.title} {...e} />)}
        </Section>

        <Section id="contact" title="Travaillons ensemble">
          <p className="mb-5 max-w-[700px]">
            Je suis à la recherche d’une nouvelle opportunité professionnelle en développement web full stack, PHP/Symfony, Big Data ou Cloud. N’hésitez pas à me contacter, je vous répondrai rapidement.
          </p>
          <ul className="grid gap-2.5 font-semibold">
            <li><a className="border-b-2 border-accent" href={`mailto:${p.email}`}>{p.email}</a></li>
            <li><a className="border-b-2 border-accent" href={`tel:${p.phoneHref}`}>{p.phone}</a></li>
          </ul>
        </Section>

        <footer className="mt-20 text-sm text-muted">
          © 2026 {p.first} {p.last}. Curieux, dynamique, sérieux. Football, natation, musculation, lecture et voyage.
        </footer>
      </main>
    </div>
  );
}
