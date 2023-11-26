import {useState} from 'react'
import { dataServices } from "./dataServices";
import ServiceItem from "./ServiceItem";
import {useResize} from '../../inc/useResize';

const ServiceList = () => {
  const [showAll, setShowAll] = useState(false);
  const sizeScreen = useResize();
  const countProducts: number = (sizeScreen> 768) ? 6 : 4;
  const visibleProducts = showAll
    ? dataServices
    : dataServices.slice(0, countProducts );
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <>
      <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3 ">
        {visibleProducts.map((item, index) => {
          return <ServiceItem key={index} dataItem={item} />;
        })}
      </div>
      <div className="flex justify-center">
        <button
          onClick={toggleShowAll}
          type="button"
          className="
          rounded-full border border-transition bg-regal-blue py-3 flex justify-center px-16 mt-4
          ssm:mt-6 xl:mt-10 transition group hover:border-regal-blue hover:bg-white
          "
        >
          <div className="font-medium text-xl text-white transition group-hover:text-regal-blue">
            See / Hide All
          </div>
        </button>
      </div>
    </>
  );
};

export default ServiceList;
