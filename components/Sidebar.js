import { profile as p } from "@/data/profile";

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-8 bg-navy px-6 py-9 text-[#e8ecf6] md:sticky md:top-0 md:h-screen md:overflow-auto md:px-8 md:py-12">
      {/* Pour ta photo : remplace ce bloc par <img src="/photo.jpg" alt="Soufiane" className="h-[120px] w-[120px] rounded-full object-cover" /> */}
      <div
        className="relative h-[120px] w-[120px] overflow-hidden rounded-full border-2 border-[#a9b4cf]"
      >
        <img
          src="/images/soufiane1.png"
          alt="Soufiane"
          className="h-full w-full object-cover"
        />
      </div>

      <div>
        <h2 className="mb-2 text-sm font-semibold text-[#a9b4cf]">Contact</h2>
        <ul className="grid gap-2 text-[15px]">
          <li><a className="hover:underline" href={`mailto:${p.email}`}>{p.email}</a></li>
          <li><a className="hover:underline" href={`tel:${p.phoneHref}`}>{p.phone}</a></li>
          <li>{p.city}</li>
          <li>{p.license}</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-2 text-sm font-semibold text-[#a9b4cf]">Langues</h2>
        <ul className="grid gap-2 text-[15px]">
          {p.languages.map(([lang, level]) => (
            <li key={lang} className="flex justify-between border-b border-navy2 pb-1.5">
              <span>{lang}</span>
              <span className="text-[#a9b4cf]">{level}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
