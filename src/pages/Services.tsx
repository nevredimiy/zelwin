import Search from "../components/Search";

import FilterPrice from "../components/Filters/FilterPrice";
import ServiceList from "../components/Services/ServiceList";
import DropdownCategories from "../components/Services/DropdownCategories";

const Services = () => {
  return (
    <div className="px-9 mt-12">
      <div className="container">
        <h1 className="font-bold text-[32px] md:text-[40px] lg:text-[52px] mb-8">
          Services
        </h1>
        <div className="grid gap-y-3 mb-6 ssm:grid-cols-2 gap-x-2 xl:grid-cols-3">
          <div className="lg:col-span-2 xl:col-span-1">
            <Search />
          </div>
          <form className="">
            <DropdownCategories />
          </form>
          <div className="ssm:col-span-2 lg:col-span-1">
            <FilterPrice />
          </div>
        </div>
        <ServiceList />
      </div>
    </div>
  );
};

export default Services;
