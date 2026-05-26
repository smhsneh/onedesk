import { motion } from "framer-motion";

const BentoGrid = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
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
    </motion.div>
  );
};

export default BentoGrid;