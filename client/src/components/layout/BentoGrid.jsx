const BentoGrid = ({ children }) => {
  return (
    <div
      className="
        grid
        grid-cols-12

        auto-rows-[160px]

        gap-5

        px-8
        pb-8
      "
    >
      {children}
    </div>
  );
};

export default BentoGrid;