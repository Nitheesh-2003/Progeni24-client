import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "@utils/motion";
import { SectionWrapper } from "@hoc";
import { SiSitepoint } from "react-icons/si";
import { Alert } from "@mui/material";

const RegisterForm = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="sm:mt-0 mt-10">
        <p className={styles.sectionSubText}>Enroll event.</p>
        <h2 className={styles.sectionHeadText}>
          <span className="progeni">R</span>egister.
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Welcome to our exciting event lineup! 🎉 Join us for a thrilling array
        of competitions where talent meets excitement. Registration fee is only{" "}
        <span className="progeni">₹ 200</span>, granting access to all events.
        Once payment is completed, participants can manage their time to
        participate in all activities
      </motion.p>
      <div className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Additionally, along with this pack
        <div className="flex items-start justify-start gap-4 my-3 text-secondary">
          <span className="text-[#790AF9]">
            <SiSitepoint />
          </span>
          <span>Free lunch will be provided.</span>
        </div>
        <div className="flex items-start justify-start gap-4 my-3 text-secondary">
          <span className="text-[#790AF9]">
            <SiSitepoint />
          </span>
          <span>Free accomodation the day before night.</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-16">
        <button className="button px-8 py-5 rounded-xl border-none outline-none text-white text-[18px] font-medium cursor-pointer tracking-wider mt-10">
          Register Now
        </button>
        <Alert
          severity="warning"
          className="w-full"
          sx={{ bgcolor: "#151030", color: "#fff" }}
        >
          This will use the username and email with which you logged in, so
          please make sure that you have entered a valid username and email.
        </Alert>
      </div>
    </>
  );
};

export default SectionWrapper(RegisterForm, "registerform");
