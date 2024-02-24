import { motion } from "framer-motion";
import { BiLogoGmail } from "react-icons/bi";
import { AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const iconVariants = {
  hidden: { opacity: 0, y: 1000 },
  visible: { opacity: 1, y: 0 },
};

const iconTransition = {
  type: "spring",
  damping: 10,
  stiffness: 100,
};

const Socialicons = () => {
  return (
    <div className="flex justify-center gap-12 items-center">
      <motion.a
        href="mailto:progeni2024@gmail.com"
        className="green-pink-gradient p-[1px] shadow-card rounded-full"
        initial="hidden"
        animate="visible"
        variants={iconVariants}
        transition={iconTransition}
      >
        <div className="bg-tertiary shadow card p-3 rounded-full">
          <BiLogoGmail size={30} />
        </div>
      </motion.a>

      <Link to="https://www.linkedin.com/company/placement-cell-gce-salem/" target="__blank">
        <motion.div
          className="green-pink-gradient p-[1px] shadow-card rounded-full"
          initial="hidden"
          animate="visible"
          variants={iconVariants}
          transition={{ ...iconTransition, delay: 0.1 }}
        >
          <div className="bg-tertiary shadow card p-3 rounded-full">
            <AiOutlineLinkedin size={30} />
          </div>
        </motion.div>
      </Link>

      <Link to="https://www.instagram.com/progeni24/" target="__blank">
        <motion.div
          className="green-pink-gradient p-[1px] shadow-card rounded-full"
          initial="hidden"
          animate="visible"
          variants={iconVariants}
          transition={{ ...iconTransition, delay: 0.2 }}
        >
          <div className="bg-tertiary shadow card p-3 rounded-full">
            <AiOutlineInstagram size={30} />
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default Socialicons;
