export default function Graphics({ pos }) {
  const style1 = {
    transform: `translateX(${pos.x / 8}px)`,
    // transition: "transform 0.3s ease",
  };
  return (
    <div className="relative h-[320px] w-full overflow-hidden rounded-xl lg:w-full">
      <div
        className="absolute -left-10 top-0 flex h-full w-screen bg-swirls_home bg-cover -translate-y-24 "
        style={{ ...style1 }}
      ></div>
      <div className="absolute bottom-3 left-0 lg:left-3">
        <div className="theme_text flex flex-col justify-end pl-[40px] uppercase">
          <div className="select-none text-[30px] font-bold leading-[85%]">
            All Limits;
          </div>
          <div className="flex select-none flex-col text-[80px] font-bold leading-[85%] lg:flex-row lg:text-[90px]">
            <div>BEYOND&nbsp;</div>
            <div>LIMITS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
