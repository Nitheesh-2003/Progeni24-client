import React from 'react'
import {motion} from 'framer-motion';
import {styles} from '../styles';
import Typewriter from 'typewriter-effect';
import { useSelector } from 'react-redux';
import Countdown from './Countdown';
import { Link } from 'react-router-dom';

const Hero = () => {
  const {user}=useSelector((state=>state.authReducer.authData));
  return (
    <section className="relative w-full md:h-screen h-[110vh] mx-auto" id="home">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 text-center`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>GOVERNMENT COLLEGE OF ENGINEERING , SALEM-11</h1>
          <div className={`${styles.heroSubText} mb-8`}>DEPARTMENT OF COMPUTER SCIENCE ENGINEERING.</div>
          <h2 className={`${styles.heroSubText} mt-8`}>Progen'i <span className='progeni'>24.0</span></h2>
          <p className='mt-2 max-w-[70%] text-[17px] m-auto text-secondary mb-8'>Pro-generate on March 11, 2024</p>
          <a href='/home/register' className='button px-7 w-fit py-3 m-auto sm:mt-20 mt-5 rounded-xl border-none outline-none text-white text-[18px] font-medium cursor-pointer tracking-wider relative z-10'>Register Now</a>
          <p className='mt-5 max-w-[70%] sm:text-[17px] text-[15px] m-auto text-secondary'>A National Level Technical Symposium conducted by Society for Advancement of Computer Science and Engineering (SACSE), where innovation takes center stage. Join us as we nurture young talents and encourage innovations through an array of captivating events.</p>
          <div className={`${styles.heroTypeText} type mt-7`}>
          <Typewriter
            options={{
              strings: [`< Welcome ${user.firstName} />`,"< Happy Coding />"],
              autoStart: true,
              loop: true,
            }}
          />
          </div>
          <div>
            <Countdown />
          </div>
        </div>
      </div>
      <div className="fixed xs:bottom-10 bottom-30 right-6 w-full sm:flex hidden justify-end items-center">
        <a href="#home">
          <div className="w-[45px] h-[45px] rounded-xl border-4  flex justify-center items-start p-2">
            <motion.div
              animate={{
                y : [0,15,0]
              }}
              transition={{
                duration : 1.5,
                repeat : Infinity
              }}
              className='w-4 h-3 rounded-full bg-white'
            >
              
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero