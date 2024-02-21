import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import {motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { SectionWrapper } from '@hoc';
import { techeventDetails,nontecheventDetails } from '@constants';
import { textVariant,fadeIn } from '@utils/motion';
import Typewriter from 'typewriter-effect';
import {EventModel} from "@components";
import { useState } from 'react';


const EventCard = ({ event }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <VerticalTimelineElement
        contentStyle={{background : "#1d1836",color : '#fff'}}
        contentArrowStyle={{borderRight : '7px solid #232631'}}
        date={event.date}
        iconStyle={{background : event.iconBg}}
        icon={
          <div className='flex justify-center items-center w-full h-full'>
            <img 
              src={event.icon}
              alt={event.company_name}
              className='w-[100%] h-[100%] object-contain'
             />
          </div>
        }
      >
        <div>
          <h3 className='text-white text-[24px] font-bold' >{event.title}</h3>
          <p className='text-secondary text-[16px] font-semibold' style={{margin : 0}}>{event.company_name}</p>
        </div>
        <ul className='list-disc mt-5 ml-5 space-y-2' >
          {event.points.map((point,index)=>(
            <li key={`experience-point-${index}`} 
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >{point}</li>
          ))}
        </ul>
        <div className="mt-1 flex flex-wrap gap-2">
            {event?.tags?.map((tag)=>(
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
             </p>
            ))}
        </div>
        <button onClick={handleOpenModal} className='bg-tertiary mt-3 py-2 px-7 border-2 text-white rounded-lg font-medium ml-[35%]'>Explore</button>
      </VerticalTimelineElement>
      <EventModel open={modalOpen} onClose={handleCloseModal} experienceId={event.id} />
    </>
  );
};


const Events = () => {
  return (
    <>
      <motion.div variants={textVariant} className='mt-10'>
        <p className={styles.sectionSubText}>Explore the Events.</p>
        <h2 className={styles.sectionHeadText}>Events.</h2>
      </motion.div>
      <p
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Progen'i, our name embodies the essence of pro-generation, where together, we construct the world of tomorrow using just ones and zeros. With a vision to enrich the annals of Progeni, we proudly unveil our latest endeavor: the creation of Progeni24.0 server. We extend a warm invitation to all students to showcase their skills, execute test cases, and seize the opportunity to claim the coveted cash prize. Let's embark on this journey of innovation and collaboration!
      </p>
      <div className='text-center  m-auto md:max-w-[70%] sm:max-w-[90%] max-w-[95%] border-4 rounded-xl flex flex-col items-center mt-20 p-10  mb-[-80px]'>
          <div className='font-bold text-[30px] mb-5'>
          <Typewriter
            options={{
              strings: ["Technical Events."],
              autoStart: true,
              loop: true,
            }}
          />
          </div>
        <p className='text-secondary'>Dive into the heart of technological innovation with our lineup of captivating technical events! Whether you're a coding connoisseur, a data aficionado, a storytelling savant, or a trivia titan, there's something for everyone in our thrilling array of competitions.</p>
      </div>
      <div className='mt-20 flex flex-col' >
        <VerticalTimeline>
          {techeventDetails.map((event,index)=>(
            <EventCard key={index} event={event}/>
          ))}
        </VerticalTimeline>
      </div>
      <div className='text-center  m-auto md:max-w-[70%] sm:max-w-[90%] max-w-[95%] border-4 rounded-xl flex flex-col items-center mt-32 p-10  mb-[-80px]'>
          <div className='font-bold text-[30px] mb-5'>
          <Typewriter
            options={{
              strings: ["Non Technical Events.","Fun Events."],
              autoStart: true,
              loop: true,
            }}
          />
          </div>
        <p className='text-secondary'>Step into a world of non-stop fun and excitement with our lineup of thrilling non-technical events! Whether you're a master of laughter, a lover of games, or a seeker of adventure, there's something for everyone to enjoy in our diverse array of activities. </p>
      </div>
      <div className='mt-20 flex flex-col' >
        <VerticalTimeline>
          {nontecheventDetails.map((event,index)=>(
            <EventCard key={index} event={event}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Events,"work");