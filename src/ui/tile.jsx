import { motion } from "framer-motion";

const Tile = () => {
  return (
    <motion.div
      whileHover={{
        zIndex: 1,
        backgroundColor: "#ff3800", 
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="aspect-square bg-white border border-gray-100 "
    />
  );
};

export default Tile;
