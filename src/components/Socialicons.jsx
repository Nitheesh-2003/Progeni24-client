import { motion } from "framer-motion";
import {VscGithub} from 'react-icons/vsc'
import {AiOutlineLinkedin,AiOutlineInstagram} from 'react-icons/ai'
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
    <div className='flex justify-center gap-12 items-center'>
      <Link to='https://github.com/Nitheesh-2003'><motion.div
        className='green-pink-gradient p-[1px] shadow-card rounded-full'
        initial='hidden'
        animate='visible'
        variants={iconVariants}
        transition={iconTransition}
      >
        <div className="bg-tertiary shadow card p-3 rounded-full">
          <VscGithub size={30} />
        </div>
      </motion.div></Link>

      <Link to='https://www.linkedin.com/in/nitheesh-kumar-s-899002203/'><motion.div
        className='green-pink-gradient p-[1px] shadow-card rounded-full'
        initial='hidden'
        animate='visible'
        variants={iconVariants}
        transition={{ ...iconTransition, delay: 0.1 }}
      >
        <div className="bg-tertiary shadow card p-3 rounded-full">
          <AiOutlineLinkedin size={30} />
        </div>
      </motion.div>
      </Link>

      <Link to='https://www.instagram.com/sv_nitheesh/'>
      <motion.div
        className='green-pink-gradient p-[1px] shadow-card rounded-full'
        initial='hidden'
        animate='visible'
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
