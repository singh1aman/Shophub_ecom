import { useParams } from "react-router-dom";
import PdpGallery from "../components/pdp/PdpGallery";
import PdpHighlights from "../components/pdp/PdpHighlights";
import PdpInBox from "../components/pdp/PdpInBox";
import PdpSpecs from "../components/pdp/PdpSpecs";
import PdpSummary from "../components/pdp/PdpSummary";

const ProductDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-6 text-xs uppercase tracking-wider text-gray-500">
          Home / Products / <span className="text-gray-900">Item {id}</span>
        </div>
        <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
          <PdpGallery id={id}/>
          <div className="flex flex-col gap-4">
            <PdpSummary />
            <PdpHighlights />
            <PdpSpecs />
            <PdpInBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
