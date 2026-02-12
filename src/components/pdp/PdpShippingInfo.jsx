const PdpShippingInfo = () => {
      return(<div className="mt-1 rounded-2xl bg-gray-50 px-4 py-4 text-sm text-gray-500">
        <div className="grid grid-cols-2 gap-y-2.5">
          <div className="flex items-center gap-2">
            <span className="text-base">🚚</span>
            <span>Free shipping</span>
          </div>
          <div className="flex items-center gap-2 justify-end text-gray-400">
            2–4 business days
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base">↩️</span>
            <span>30-day returns</span>
          </div>
          <div className="flex items-center gap-2 justify-end text-gray-400">
            🔒 Secure checkout
          </div>
        </div>
      </div>)
}

export default PdpShippingInfo;