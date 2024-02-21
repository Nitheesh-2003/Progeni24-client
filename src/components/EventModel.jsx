import React from 'react';
import { Modal, Box, Typography } from '@mui/material'; 
import { eventDetails } from '@constants';
import { styles } from '../styles';
import { SiSitepoint } from "react-icons/si";

const EventModal = ({ open, onClose, experienceId }) => {
  const handleClose = () => {
    onClose();
  };

  const eventDetail = eventDetails.find(event => event.id === experienceId);

  const title = eventDetail ? eventDetail.details.title : "";
  const description = eventDetail ? eventDetail.details.description : "";
  const rules = eventDetail ? eventDetail.details.rules : [];

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className='flex justify-center items-center'
    >
      <Box className='violet-gradient rounded-xl max-w-[600px] border-2'>
        <Box className='bg-primary text-white rounded-xl border-2' style={{ maxHeight: '80vh', overflowY: 'auto' }}>
          <Box className={`${styles.heroHeadText} rounded-3xl ml-10`} component="div">{title}</Box>
          <Box className="bg-primary text-white p-4 ml-6">
            <Typography className='sm:text-[17px] text-[15px] text-secondary' id="modal-modal-description">
              {description}
            </Typography>
            <div className="text-[25px] mt-10">
              Rules.
            </div>
            <ul>
              {rules.map((rule, index) => (
                <div className='flex items-start justify-start gap-4 my-3 text-secondary' key={index}>
                  <span className='text-[#790AF9]'><SiSitepoint /></span>
                  <li>{rule}</li>
                </div>
              ))}
            </ul>
          </Box>
          <Box className="bg-primary text-white rounded-3xl flex justify-center">
            <button onClick={handleClose} className='button px-8 py-2 rounded-xl border-none outline-none text-white text-[18px] font-medium cursor-pointer tracking-wider m-3'>
              Close
            </button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default EventModal;
