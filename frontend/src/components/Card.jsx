import { motion } from "framer-motion"
import { fadeIn } from "../utils/animation"

export function Card({ children, className = "", ...props }) {
  return (
    <motion.div
      {...fadeIn}
      whileHover={{ scale: 1.02 }}
      className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

