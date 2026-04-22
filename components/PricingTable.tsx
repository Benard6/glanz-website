type PricingRow = {
  item: string;
  pricing: string;
  details: string;
};

type PricingTableProps = {
  title: string;
  note?: string;
  rows: PricingRow[];
};

export default function PricingTable({
  title,
  note,
  rows,
}: PricingTableProps) {
  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            {title}
          </h2>
          {note ? (
            <p className="mt-4 text-lg leading-8 text-slate-600">{note}</p>
          ) : null}
        </div>

        <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 bg-white">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Service Item
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Pricing
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {rows.map((row) => (
                  <tr key={row.item}>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">
                      {row.item}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {row.pricing}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {row.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}