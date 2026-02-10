const PdpInBox = () => {
  return (
    <div className="mt-8 border-t border-gray-200 pt-6">
      <div className="text-xs uppercase tracking-wider text-gray-500">
        What's In The Box
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {["Headphones", "USB-C Charging Cable", "Premium Carry Case"].map(
          (item) => (
            <div
              key={item}
              className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-black hover:shadow-md"
            >
              <div className="text-[11px] uppercase tracking-widest text-gray-500">
                Included
              </div>
              <div className="mt-1 font-medium text-gray-900">{item}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PdpInBox;
