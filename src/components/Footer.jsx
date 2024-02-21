import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@utils/motion";
import { SectionWrapper } from "@hoc";
import Socialicons from "@components/Socialicons";
import { IoIosStats } from "react-icons/io";
import { SlGraph } from "react-icons/sl";

const Footer = () => {
  return (
    <>
      {" "}
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="lg:flex  items-start justify-between border-t-4"
      >
        <p className="mt-12 lg:mr-3 text-secondary text-[14px] max-w-3xl leading-[30px] flex-3/4">
          Welcome to the cradle of future engineering, where a melting pot of
          curious minds blends seamlessly with  seasoned faculty. Our department serves as the cornerstone upon which
          visionary circuitry is forged, fostering talent and innovation at
          every turn.
        </p>
        <div className="flex-1/4 mt-12">
          <Socialicons />
        </div>
      </motion.div>
      <motion.div
        variants={textVariant()}
        className="flex flex-col gap-1 mt-3 text-secondary text-[14px] max-w-3xl leading-[30px]"
      >
        <p>
           Feel free to reach out to us anytime for clarifications or
          assistance. We're here to help and ensure all your doubts are
          addressed promptly and effectively.
          you out
        </p>
        <div className="md:flex justify-between">
        <p>Gmail : nitheeshkumar770@gmail.com</p>
        <p>Mobile No. : +91 7708623734</p>
        <p>Alternative No. :+91 7708623734</p>
        </div>
      </motion.div>
      <div className="m-auto bg-tertiary w-72 px-11 py-2 rounded-3xl flex flex-col gap-1  mt-6">
        <div className="text-secondary flex items-center justify-around">
          <IoIosStats size={20} />
          <p className=" text-[12px]"> VISITOR COUNT</p>
        </div>
        <div className="flex items-center">
        <a target="_blank">
          <img
            src="https://hitwebcounter.com/counter/counter.php?page=11419845&style=0006&nbdigits=5&type=page&initCount=0"
            title="Counter Widget"
            border="0"
          />
        </a>
        <div className="ml-6"><SlGraph size={55} /></div>
        </div>
      </div>
      <div className="text-white text-[17px] flex items-center gap-2 w-fit m-auto mt-10 mb-[-20px]"> 2024<span className="text-[25px]">©</span>All right reserved by CSE.</div>
    </>
  );
};

export default SectionWrapper(Footer, "footer");
