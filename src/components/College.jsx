import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { collegeService } from "@constants";
import { fadeIn, textVariant } from "@utils/motion";
import { SectionWrapper } from "@hoc";
import { gce } from "@assets";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.74)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] text-center font-bold">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const College = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div variants={textVariant()} className="mt-10">
        <p className={styles.sectionSubText}>About us.</p>
        <h2 className={styles.sectionHeadText}>
          Welcome to <span className="progeni">GCE.</span>
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]"
      >
        Government College of Engineering, Salem-11, was started during the
        Third Five year plan in the year 1966. GCE, Salem was then the Third
        Engineering Institution in Tamil Nadu. GCE Salem boasts an impressive
        track record of placements, with top companies from various industries
        regularly recruiting students from the campus. The college has a
        dedicated placement cell that works tirelessly to facilitate
        interactions between students and potential employers. Through career
        counseling, training sessions, and industry collaborations, the
        placement cell prepares students for interviews and equips them with the
        necessary skills to excel in their chosen fields. As a result, a
        significant percentage of graduating students secure lucrative job
        offers from leading companies, both in India and abroad.
        <p className="text-[14px] mt-5">
          GCE Salem's rich history, strong placement record, and vibrant
          cultural heritage make it a distinguished institution that not only
          imparts quality education but also nurtures holistic development and
          fosters a sense of belonging among its students.
        </p>
      </motion.p>
      <div
        className="relative m-auto w-[80%] mt-10 rounded-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <video autoPlay muted loop className={`w-full h-full rounded-xl border-[#5100ff] border-4 ${isHovered ? 'opacity-50' : ''}`} style={{ outline: '1px solid white' }}>
          <source src={gce} type="video/mp4" />
        </video>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute inset-0 flex justify-center items-center"
            style={{ zIndex: 1 }}
          ><a href="https://gcesalem.edu.in/" target="__blank">
            <button className="button px-7 py-3 mt-6 rounded-xl border-none outline-none text-white text-[18px] font-medium cursor-pointer tracking-wider bg-opacity-100 bg-purple-900">
              Read More
            </button>
          </a>
          </motion.div>
        )}
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {collegeService.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(College, "college");
