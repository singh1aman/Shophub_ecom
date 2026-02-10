const PdpGallery = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-square w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm transition-shadow duration-300 hover:shadow-md">
        <img
          src="https://placehold.co/800x800/f3f4f6/111827?text=Product+Image"
          alt="Product"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="aspect-square overflow-hidden rounded-lg border border-gray-200 bg-gray-50 hover:border-black transition-colors duration-200 hover:shadow-sm"
          >
            <img
              src="https://placehold.co/200x200/f3f4f6/111827?text=Thumb"
              alt="Thumbnail"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdpGallery;
