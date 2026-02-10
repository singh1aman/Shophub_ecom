import { Link } from "react-router-dom";

const categoryTileArray = [
  {
    id: 1,
    name: "Audio",
    icon: "🎧",
    count: "250+ products",
    path: "/audioplp",
  },
  {
    id: 2,
    name: "Wearables",
    icon: "⌚",
    count: "180+ products",
    path: "wearableplp",
  },
  {
    id: 3,
    name: "Gaming",
    icon: "🎮",
    count: "320+ products",
    path: "gamingplp",
  },
  {
    id: 4,
    name: "Photography",
    icon: "📷",
    count: "150+ products",
    path: "photographyplp",
  },
];
const CategoryTile = ({ icon, name, count, path }) => {
  return (
    <Link
      to={path}
      className="category-tile  p-6 flex-wrap border border-gray-200 rounded-lg hover:border hover:border-gray-300 cursor-pointer hover:-translate-y-1
  hover:shadow-lg
  transition-all duration-200 ease-out"
      style={{ width: "49%" }}
    >
      <div>
        <div className="image-container">{icon}</div>
        <p className="category-name">{name}</p>
        <p className="category-description">{count}</p>
      </div>
    </Link>
  );
};

const ShopByCategory = () => {
  return (
    <div className="shopbycategory-wrapper mt-20">
      <div className="top-layer flex items-center justify-between pl-2 pr-2 mb-10">
        <h1 className="text-2xl font-bold">Shop by Category</h1>
        <p>View All</p>
      </div>
      <div className="bottom-layer gap-4 flex flex-wrap item-center justify-center">
        {categoryTileArray.map((tile) => (
          <CategoryTile key={tile.id} {...tile} />
        ))}
      </div>
    </div>
  );
};
export default ShopByCategory;
