import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "@hoc";
import { slideIn, textVariant } from "@utils/motion";
import { Alert } from "@mui/material";
import { progeniqr } from "@assets";
import { SiSitepoint } from "react-icons/si";
import { PaymentThank } from "@components";
import Confetti from "./Confetti";
import { updateUser } from '@actions/UserAction';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage2 = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const { password, ...other } = user;
  const [formData, setFormData] = useState(other);
  const dispatch = useDispatch();
  const [celebrate, setCelebrate] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTechEvents, setSelectedTechEvents] = useState([]);
  const [selectedNonTechEvents, setSelectedNonTechEvents] = useState([]);
  const handleTechCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      if (selectedTechEvents.length < 3) {
        setSelectedTechEvents([...selectedTechEvents, value]);
      } else {
        event.target.checked = false;
      }
    } else {
      setSelectedTechEvents(
        selectedTechEvents.filter((event) => event !== value)
      );
    }
  };

  const handleNonTechCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      if (selectedNonTechEvents.length < 3) {
        setSelectedNonTechEvents([...selectedNonTechEvents, value]);
      } else {
        event.target.checked = false;
      }
    } else {
      setSelectedNonTechEvents(
        selectedNonTechEvents.filter((event) => event !== value)
      );
    }
  };

  const handleClick = async () => {
    try {
      const userId = user._id;
      let techevents = selectedTechEvents;
      let nontechevents = selectedNonTechEvents;
      setFormData(prevState => ({
        ...prevState,
        techevents,
        nontechevents
      }));
      await dispatch(updateUser(userId, formData));
        setCelebrate(true);
        setTimeout(() => {
          setModalOpen(true);
        }, 2000);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-right"
      });
    }
  };


  const handleCloseModal = () => {
    setModalOpen(false);
    setCelebrate(false);
  };

  return (
    <>
      <div>
        <ToastContainer />
        <motion.div variants={textVariant()} className="sm:mt-5 mt-20 relative">
          {celebrate ? <Confetti /> : null}
          <p className="fon-bold sm:text-[30px] text-[25px]">Rules.</p>
        </motion.div>
        <div className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Follow the rules properly for the registration,
          <div className="flex items-center justify-start gap-4 my-3 text-secondary">
            <span className="text-[#790AF9]">
              <SiSitepoint />
            </span>
            <span>
              Check the user details. If not right, login with formal username
              and email and then register.
            </span>
          </div>
          <div className="flex items-center justify-start gap-4 my-3 text-secondary">
            <span className="text-[#790AF9]">
              <SiSitepoint />
            </span>
            <span>
              Select events, and pay 200 using the QR code and take a screenshot and proceed to the
              next page.
            </span>
          </div>
          <div className="flex items-center justify-start gap-4 my-3 text-secondary">
            <span className="text-[#790AF9]">
              <SiSitepoint />
            </span>
            <span>
              You can participate in only 3 tech events and 3 non-tech event.
            </span>
          </div>
        </div>
      </div>
      <div className="xl:mt-12 xl:flex-row flex-col flex gap-10 justify-between items-center">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-1 bg-black-100 p-8 rounded-2xl sm:max-w-[500px] max-w-[300px]"
        >
          <p className={`${styles.sectionSubText}`}>Details for register</p>
          <h3 className={`${styles.sectionHeadText}`}>Info.</h3>
          <form autoComplete="off" className="mt-5 flex flex-col gap-8">
            <input
              type="text"
              name="name"
              value={`${user?.firstName} ${user.lastName}`}
              placeholder="What's your name?"
              className="bg-tertiary py-5 px-6 placeholder:text-secondary text-secondary rounded-lg outlined-none border-none font-medium cursor-not-allowed sm:text-[17px] text-[13px]"
              disabled
            />
            <input
              type="email"
              name="email"
              value={user.email}
              placeholder="Enter your email"
              className="bg-tertiary py-5 px-6 placeholder:text-secondary text-secondary rounded-lg outlined-none cursor-not-allowed border-none font-medium sm:text-[17px] text-[13px]"
              disabled
            />
          </form>
          <div className="mt-5 text-secondary flex flex-col justify-center gap-4 sm:text-[17px] text-[13px]">
            <p>Choose three Tech events</p>
            <table style={{ borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td style={{ paddingRight: "30px" }}>
                    <label>
                      <input
                        type="checkbox"
                        value="gnidoc"
                        onChange={handleTechCheckboxChange}
                      />
                      Gnidoc
                    </label>
                  </td>
                  <td>
                    <label>
                      <input
                        type="checkbox"
                        value="querywhizz"
                        onChange={handleTechCheckboxChange}
                      />
                      QueryWhizz
                    </label>
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingRight: "30px" }}>
                    <label>
                      <input
                        type="checkbox"
                        value="projectexpo"
                        onChange={handleTechCheckboxChange}
                      />
                      Project Expo
                    </label>
                  </td>
                  <td>
                    <label>
                      <input
                        type="checkbox"
                        value="stylestack"
                        onChange={handleTechCheckboxChange}
                      />
                      StyleStack
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-5 text-secondary flex flex-col gap-3 sm:text-[17px] text-[13px]">
            <p>Choose three Non-Tech events</p>
            <table style={{ borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td style={{ paddingRight: "30px" }}>
                    <label>
                      <input
                        type="checkbox"
                        value="riddlerally"
                        onChange={handleNonTechCheckboxChange}
                      />
                      Riddle Rally
                    </label>
                  </td>
                  <td>
                    <label>
                      <input
                        type="checkbox"
                        value="snapfiction"
                        onChange={handleNonTechCheckboxChange}
                      />
                      Snap Fiction
                    </label>
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingRight: "30px" }}>
                    <label>
                      <input
                        type="checkbox"
                        value="cineminds"
                        onChange={handleNonTechCheckboxChange}
                      />
                      Cineminds
                    </label>
                  </td>
                  <td>
                    <label>
                      <input
                        type="checkbox"
                        value="iplauction"
                        onChange={handleNonTechCheckboxChange}
                      />
                      IPL auction
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Alert
            severity="warning"
            className="w-full mt-10 sm:text-[17px] text-[13px]"
            sx={{ bgcolor: "#151030", color: "#fff" }}
          >
            This username will be used for your certificates, so please make
            sure to have formal name.
          </Alert>
        </motion.div>

        <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="">
          <img
            src={progeniqr}
            alt="QR"
            className="object-cover w-[450px] h-[550px] rounded-2xl"
          />
        </motion.div>
      </div>
      
        <div className="flex flex-col items-center mt-10">
          <p>Click here only if the payment is done.</p>
          <button
            className="button px-8 py-5 rounded-xl border-none outline-none text-white text-[18px] font-medium cursor-pointer tracking-wider mt-10"
            onClick={handleClick}
          >
            Payment Done
          </button>
        </div>
      <PaymentThank open={modalOpen} onClose={handleCloseModal} /> 
    </>
  );
};

export default SectionWrapper(RegisterPage2, "registerpage2");
