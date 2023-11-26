import SortBy from "./SortBy";


const FilterPrice = () => {
  return (
    <form action="">
      <div className="flex gap-3 justify-between">
        <div className="flex gap-1">
          <div className="relative z-10">
            <div className="font-medium text-regal-blue absolute right-4 top-3">
              $
            </div>
            <input
              className="w-full rounded font-medium text-regal-black/50 py-3 px-4 focus:border focus:border-accent-blue outline-regal-blue"
              type="text"
              name="min-price"
              id=""
              placeholder="From"
              maxLength={9}
            />
          </div>
          <div className="relative z-10">
            <div className="font-medium text-regal-blue absolute right-4 top-3">
              $
            </div>
            <input
              className="w-full rounded font-medium text-regal-black/50 py-3 px-4 focus:border focus:border-accent-blue outline-regal-blue"
              type="text"
              name="max-price"
              id=""
              placeholder="To"
              maxLength={9}
            />
          </div>
        </div>
       <SortBy />
      </div>
    </form>
  );
}

export default FilterPrice
