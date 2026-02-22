import { Link } from "react-router-dom";

const categories = [
  { name: "Audio", count: "250+ products", icon: "🎧", path: "/audioplp" },
  {
    name: "Wearables",
    count: "180+ products",
    icon: "⌚",
    path: "/wearableplp",
  },
  { name: "Gaming", count: "320+ products", icon: "🎮", path: "/gamingplp" },
  {
    name: "Photography",
    count: "150+ products",
    icon: "📷",
    path: "/photographyplp",
  },
];

const ShopByCategory = () => {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Shop by Category</h2>
          <Link to={'/allPlp'}
            className="text-sm font-semibold text-gray-600 hover:text-black"
          >
            View All →
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {categories.map((cat) => (
            <Link to={cat.path} key={cat.name}>
              <div
                key={cat.name}
                className="
                            group relative flex items-center justify-between 
                            overflow-hidden rounded-2xl border bg-white p-6 
                            shadow-sm transition-all duration-300 ease-out
                            hover:-translate-y-2 hover:shadow-xl hover:border-orange-200
                          "
              >
                {/* Gradient Hover Background */}
                <div
                  className="
                              absolute inset-0 opacity-0 transition-opacity duration-300
                              bg-gradient-to-r from-orange-50 via-white to-orange-100
                              group-hover:opacity-100
                            "
                />

                {/* Content */}
                <div className="relative z-10">
                  <p className="text-lg font-bold transition-colors duration-300 group-hover:text-orange-600">
                    {cat.name}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">{cat.count}</p>
                </div>

                {/* Icon */}
                <div className="relative z-10 text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {cat.icon}
                </div>

                {/* Glow Border Effect */}
                <div
                  className="
                          absolute -bottom-10 -right-10 h-32 w-32 rounded-full 
                          bg-orange-200 opacity-0 blur-3xl transition-opacity duration-300
                          group-hover:opacity-50
                        "
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ShopByCategory;
