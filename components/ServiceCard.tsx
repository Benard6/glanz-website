type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function ServiceCard({
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <a
      href={href}
      className="block rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
      <p className="mt-5 text-sm font-semibold text-slate-900">Learn more →</p>
    </a>
  );
}