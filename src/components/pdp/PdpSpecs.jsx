const PdpSpecs = () => {
  return (
    <div className="mt-8 border-t border-gray-200 pt-6">
      <div className="text-xs uppercase tracking-wider text-gray-500">
        Specifications
      </div>
      <div className="mt-4 grid gap-3 rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <span className="text-gray-500">Driver Size</span>
          <span className="font-medium text-gray-900">40mm</span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <span className="text-gray-500">Battery Life</span>
          <span className="font-medium text-gray-900">40 hours</span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <span className="text-gray-500">Bluetooth</span>
          <span className="font-medium text-gray-900">5.3</span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <span className="text-gray-500">Noise Canceling</span>
          <span className="font-medium text-gray-900">Adaptive ANC</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Weight</span>
          <span className="font-medium text-gray-900">265g</span>
        </div>
      </div>
    </div>
  );
};

export default PdpSpecs;
