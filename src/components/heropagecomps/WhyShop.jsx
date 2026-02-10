import { ShieldCheck, Sparkles, Truck } from "lucide-react";

const WhyShop = () => {
  const items = [
    {
      title: "Free Shipping",
      desc: "Fast, insured delivery on all orders over $99.",
      Icon: Truck,
    },
    {
      title: "Premium Warranty",
      desc: "12‑month coverage with easy replacements.",
      Icon: Sparkles,
    },
    {
      title: "Secure Checkout",
      desc: "Encrypted payments and trusted providers.",
      Icon: ShieldCheck,
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-6 text-xs uppercase tracking-widest text-gray-500">
        Why Shop With Us
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-black hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-900">
                <item.Icon size={20} />
              </span>
              <div className="text-sm font-semibold text-gray-900">
                {item.title}
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-600">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyShop;
