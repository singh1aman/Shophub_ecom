const Footer = () => {
  return (
    <footer className="mt-16 bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="text-lg font-semibold tracking-wide">ShopHub</div>
            <p className="text-sm text-gray-300">
              A curated marketplace for premium audio, gaming, wearable, and
              photography gear. Crafted experiences, fast shipping, and
              thoughtful service in every order.
            </p>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span className="rounded-full border border-gray-700 px-3 py-1">
                Trusted Quality
              </span>
              <span className="rounded-full border border-gray-700 px-3 py-1">
                Secure Checkout
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold uppercase tracking-widest text-gray-300">
              Shop
            </div>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white transition-colors">Audio</li>
              <li className="hover:text-white transition-colors">Gaming</li>
              <li className="hover:text-white transition-colors">Wearables</li>
              <li className="hover:text-white transition-colors">Photography</li>
              <li className="hover:text-white transition-colors">New Arrivals</li>
              <li className="hover:text-white transition-colors">Best Sellers</li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold uppercase tracking-widest text-gray-300">
              Support
            </div>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white transition-colors">Help Center</li>
              <li className="hover:text-white transition-colors">Order Tracking</li>
              <li className="hover:text-white transition-colors">Returns & Refunds</li>
              <li className="hover:text-white transition-colors">Warranty</li>
              <li className="hover:text-white transition-colors">Shipping Info</li>
              <li className="hover:text-white transition-colors">Contact Us</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-semibold uppercase tracking-widest text-gray-300">
              Newsletter
            </div>
            <p className="text-sm text-gray-400">
              Get product drops, launch previews, and exclusive offers straight
              to your inbox.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-gray-700 bg-black px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-white focus:outline-none"
              />
              <button className="rounded-md border border-white px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-colors">
                Join
              </button>
            </div>
            <div className="text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy.
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 border-t border-gray-800 pt-6 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="text-xs text-gray-500">
            © 2026 ShopHub. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span className="hover:text-white transition-colors">Privacy</span>
            <span className="hover:text-white transition-colors">Terms</span>
            <span className="hover:text-white transition-colors">Cookies</span>
            <span className="hover:text-white transition-colors">Accessibility</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="rounded-full border border-gray-700 px-3 py-1">
              Visa
            </span>
            <span className="rounded-full border border-gray-700 px-3 py-1">
              Mastercard
            </span>
            <span className="rounded-full border border-gray-700 px-3 py-1">
              PayPal
            </span>
            <span className="rounded-full border border-gray-700 px-3 py-1">
              UPI
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
