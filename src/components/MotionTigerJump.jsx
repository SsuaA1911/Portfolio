import React from "react";
import { motion } from "framer-motion";

const tigerVariants = {
  move: {
    x: [0, 20, -20, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

function TigerGroup() {
  return (
    <motion.div
      animate="move"
      variants={tigerVariants}
      transition={{ staggerChildren: 0.3 }}
      className="flex gap-4"
    >
      <motion.img src="art/n1-tiger.png" className="w-full" variants={tigerVariants} />
      <motion.img src="art/n2-tiger.png" className="w-full" variants={tigerVariants} />
      <motion.img src="art/n3-tiger.png" className="w-full" variants={tigerVariants} />
    </motion.div>
  );
}

export default TigerGroup;