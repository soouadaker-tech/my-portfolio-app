export default function Job({ when, title, where, items }) {
  return (
    <article className="grid gap-2 border-b border-line py-6 last:border-0 md:grid-cols-[150px_1fr] md:gap-x-7">
      <div className="pt-1 text-sm text-muted">{when}</div>
      <div>
        <h3 className="font-display text-xl font-bold">{title}</h3>
        <p className="mb-3 text-muted">{where}</p>
        {items && (
          <ul className="list-disc space-y-1 pl-5">
            {items.map((i) => <li key={i}>{i}</li>)}
          </ul>
        )}
      </div>
    </article>
  );
}
