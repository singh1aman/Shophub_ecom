const Footer = () => {
  return (
      <footer className="border-t bg-white py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            <div>
              <p className="text-xl font-bold">
                Shop<span className="text-orange-500">Hub</span>
              </p>
              <p className="mt-3 text-sm text-gray-600">
                Premium tech products delivered fast. Built for modern shoppers.
              </p>
            </div>

            <div>
              <p className="font-semibold">Shop</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-black">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Trending
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">Support</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-black">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Warranty
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">Payments</p>
              <div className="mt-4 flex flex-col flex-wrap gap-3 text-sm text-gray-700">
                <span className="rounded-xl  px-4 py-2">Visa</span>
                <span className="rounded-xl  px-4 py-2">Mastercard</span>
                <span className="rounded-xl  px-4 py-2">PayPal</span>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} ShopHub. All rights reserved.
          </div>
        </div>
      </footer>
  );
};

export default Footer;
