import React from 'react'
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import { styles } from '../styles';
import {services} from '@constants';
import {fadeIn,textVariant} from '@utils/motion'
import {SectionWrapper} from '@hoc'
import playbook from '@assets/playbook.pdf';

const ServiceCard=({index,title,icon})=>{
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right","spring",0.5*index,0.74)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max : 45,
            scale : 1,
            speed : 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className="text-white text-[20px] text-center font-bold">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div 
        variants={textVariant()} className='sm:mt-0 mt-28'
      >
        <p className={styles.sectionSubText}>Overview.</p>
        <h2 className={styles.sectionHeadText}>Progen'i <span className='progeni'>24</span></h2>
      </motion.div>
      <motion.p
        variants={fadeIn("","",0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Progen'i, our name embodies the essence of pro-generation, where together, we construct the world of tomorrow using just ones and zeros. With a vision to enrich the annals of Progeni, we proudly unveil our latest endeavor: the creation of Progeni24.0 server. We extend a warm invitation to all students to showcase their skills, execute test cases, and seize the opportunity to claim the coveted cash prize. Let's embark on this journey of innovation and collaboration!
      </motion.p>
      <a href={playbook} download="Playbook"><button className='button px-7 py-3 mt-6 rounded-xl border-none outline-none text-white text-[18px] font-medium cursor-pointer tracking-wider'>Download Playbook</button></a>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About,"about");