import { motion } from "framer-motion";

const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

export default FadeUp;