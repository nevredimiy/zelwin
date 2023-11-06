export default function ShineHover() {
  return (
    <div className="group flex justify-center items-center relative w-80 h-60 bg-red-200 cursor-pointer text-4xl">
      <h2>Hover over me</h2>

      {/* shine box */}
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
    </div>
  );
}