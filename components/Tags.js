export default function Tags({ list }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {list.map((t) => (
        <li key={t} className="rounded-full border border-line bg-bg px-3 py-1 text-sm">{t}</li>
      ))}
    </ul>
  );
}
