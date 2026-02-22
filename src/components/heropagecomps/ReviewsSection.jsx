import * as React from "react";

const reviews = [
  {
    name: "Arjun Malhotra",
    role: "Audio Engineer",
    rating: "4.9",
    text: "Balanced sound and exceptional comfort. The product quality feels premium.",
  },
  {
    name: "Aarav Mehta",
    role: "Music Producer",
    rating: "5.0",
    text: "Delivery was super fast and packaging was classy. Amazing experience overall.",
  },
  {
    name: "Neha Kapoor",
    role: "Content Creator",
    rating: "4.8",
    text: "Love the clean UI and product selection. Great comfort for long edits.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="bg-gray-50 py-14">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
          Customer Reviews
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between text-sm text-gray-500">
                <p>{r.role}</p>
                <p className="rounded-lg border px-2 py-1 text-xs font-semibold">
                  ⭐ {r.rating}
                </p>
              </div>

              <p className="mt-4 text-gray-700">{r.text}</p>

              <p className="mt-6 font-bold">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ReviewsSection;
