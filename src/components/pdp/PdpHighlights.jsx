import { Battery, Waves, Hand } from "lucide-react";

const PdpHighlights = () => {
  return (
    <div className="mt-2 border-t border-gray-200 pt-4">
      <div className="text-xs uppercase tracking-wider text-gray-500">
        Highlights
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-3 text-sm text-gray-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-black hover:shadow-md">
          <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-900">
            <Battery size={32} />
          </span>
          <div>
            <div className="text-[11px] uppercase tracking-widest text-gray-500">
              Battery
            </div>
            <div className="mt-1 text-sm font-medium text-gray-900">
              40-hour battery life
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-3 text-sm text-gray-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-black hover:shadow-md">
          <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-900">
            <Waves size={32} />
          </span>
          <div>
            <div className="text-[11px] uppercase tracking-widest text-gray-500">
              ANC
            </div>
            <div className="mt-1 text-sm font-medium text-gray-900">
              Active noise cancellation
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-3 text-sm text-gray-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-black hover:shadow-md">
          <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-900">
            <Hand size={32} />
          </span>
          <div>
            <div className="text-[11px] uppercase tracking-widest text-gray-500">
              Finish
            </div>
            <div className="mt-1 text-sm font-medium text-gray-900">
              Premium metal & soft-touch
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdpHighlights;
