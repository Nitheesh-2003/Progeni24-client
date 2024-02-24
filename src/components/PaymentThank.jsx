import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import { styles } from "../styles";
import { SiSitepoint } from "react-icons/si";
import {confetti} from '@assets';
import { FaWhatsapp } from "react-icons/fa";

const PaymentThank = ({ open, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="flex justify-center items-center"
    >   
      
      <Box className="violet-gradient rounded-xl max-w-[600px] border-2">
        <Box
          className="bg-primary text-white rounded-xl border-2"
          style={{ maxHeight: "80vh", overflowY: "auto" }}
        >
          <Box
            className={`${styles.heroHeadText} rounded-3xl flex justify-center`}
            component="div"
          >
            <h2 className="progeni">Tԋαɳƙ ყσυ</h2>
          </Box>
          <Box className="flex justify-center items-center">
                <img src={confetti} alt="Celebrate" className="w-28 h-28" />
          </Box>
          <Box className="bg-primary text-white p-4 ">
            <div className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
              <div className="flex items-center justify-start gap-4 my-3 text-secondary">
                <span className="text-[#790AF9]">
                  <SiSitepoint />
                </span>
                <span>
                  After the payment is done, take a screenshot of payment.
                </span>
              </div>
              <div className="flex items-center justify-start gap-4 my-3 text-secondary">
                <span className="text-[#790AF9]">
                  <SiSitepoint />
                </span>
                <span>
                  If this is done perfectly, join the whatsapp group for further verification.
                </span>
              </div>
            </div>
          </Box>
          <Box className="flex items-center justify-center my-3">
            <a className="flex gap-2 items-center justify-center py-4 px-7 bg-green-500 w-fit rounded-full" href="https://chat.whatsapp.com/Bf6hxaLFFkZBu5WfhdwZdJ" target="__blank">
            <FaWhatsapp size={25} /> Whatsapp
            </a>
          </Box>
          <Box className="bg-primary text-white rounded-3xl flex justify-center">
            <button
              onClick={handleClose}
              className="button px-8 py-2 rounded-xl border-none outline-none text-white text-[18px] font-medium cursor-pointer tracking-wider m-3"
            >
              Close
            </button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default PaymentThank;
