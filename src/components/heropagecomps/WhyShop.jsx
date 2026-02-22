import { ShieldCheck, Sparkles, Truck } from "lucide-react";

const WhyShop = () => {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
          Why Shop With Us
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
          {[
            {
              title: "Free Shipping",
              desc: "Fast delivery on all orders above $99.",
              icon: "🚚",
            },
            {
              title: "Premium Warranty",
              desc: "12-month easy replacement warranty.",
              icon: "🛡️",
            },
            {
              title: "Secure Checkout",
              desc: "Encrypted payments & trusted providers.",
              icon: "🔒",
            },
            {
              title: "Easy Returns",
              desc: "Hassle-free 7 day returns policy.",
              icon: "↩️",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border bg-white p-6 text-left shadow-sm"
            >
              <div className="text-3xl">{item.icon}</div>
              <p className="mt-4 font-bold">{item.title}</p>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyShop;
