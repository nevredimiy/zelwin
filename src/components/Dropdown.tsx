import { useRef, useEffect, Dispatch, SetStateAction } from "react";
import chevron from "../assets/images/faq/chevron.svg";

interface CustomSelectProps {
  rootClass: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  placeholder: string;
}

const Dropdown = ({
  rootClass,
  children,
  isOpen,
  setIsOpen,
  placeholder,
}: CustomSelectProps) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const listHeightRef = useRef<string>("");

  useEffect(() => {
    if (selectRef.current)
      listHeightRef.current = "h-[" + selectRef.current.clientHeight + "px]";
    function handleClickOutside(event: Event) {
      if (
        isOpen &&
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={selectRef} className={`${rootClass} relative z-20`}>
      <button
        onClick={handleSelect}
        className="
                bg-white border border-transparent font-medium w-full py-3 pl-4 pr-1 text-regal-black/50
                rounded-md flex justify-between items-center focus:border focus:border-accent-blue outline-regal-blue
                "
        type="button"
      >
        { placeholder}
        <img
          className={`${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform px-3`}
          src={chevron}
          alt=""
        />
      </button>
      <ul
        className={`
                ${
                  isOpen
                    ? `visible opacity-100 ${listHeightRef.current}`
                    : "invisible opacity-0 h-0"
                }
                duration-500 transition bg-white rounded py-3 absolute top-full inset-x-0
                `}
      >
        {children}
      </ul>
    </div>
  );
};
export default Dropdown;
