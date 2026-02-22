const Newsletter = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-[2rem] bg-gradient-to-r from-orange-100 via-white to-orange-50 p-10 text-center shadow-sm">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Get Exclusive Deals in Your Inbox
          </h2>
          <p className="mt-3 text-gray-600">
            Subscribe and get <span className="font-semibold">10% off</span>{" "}
            your first order.
          </p>

          <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              placeholder="Enter your email"
              className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-black"
            />
            <button className="rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
