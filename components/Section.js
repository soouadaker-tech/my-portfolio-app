export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mt-20 md:mt-24">
      <h2 className="mb-7 border-b-2 border-ink pb-3 font-display text-3xl font-bold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}
