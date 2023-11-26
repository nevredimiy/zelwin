import { useState } from "react";
import Dropdown from "../Dropdown";
import { submenu } from "../../inc/menuItemsData";

const category: string[] = [];
submenu.forEach((item) => [category.push(item.title)]);

const DropdownCategories = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <Dropdown
        rootClass=""
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        placeholder="Choose a category"
      >
        {category.map((item, index) => {
          return (
            <li
              className="hover:bg-accent-blue px-4 py-2 cursor-pointer"
              key={index}
            >
              <label className="flex items-center gap-2" htmlFor={index + item}>
                {" "}
                <input id={index + item} className="" type="checkbox" />
                {item}
              </label>
            </li>
          );
        })}
      </Dropdown>
  );
};

export default DropdownCategories;
