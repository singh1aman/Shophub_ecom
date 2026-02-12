const EmptyFilterMsg = () => {
    return(
       <div className="col-span-full rounded-2xl border border-neutral-200/60 bg-neutral-50 p-8 text-center shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              No Results
            </p>
            <h2 className="mt-2 text-2xl font-bold text-neutral-900">
              We couldn’t find a match for your filters
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Try clearing a filter, widening your price range, or choosing a
              different category.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-neutral-900 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-900">
              Tip: Start with category only
            </div>
          </div> 
    )
}
export default EmptyFilterMsg;