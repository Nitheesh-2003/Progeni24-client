import React from 'react'
import { useState,useRef } from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import {EarthCanvas} from './canvas';
import {SectionWrapper} from '@hoc'
import { slideIn } from '@utils/motion'

const Contact = () => {
  const formRef=useRef();
  const [form,setForm]=useState({
    name : '',
    email : '',
    message : '',
  })
  const [loading,setLoading]=useState(false);

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setForm({...form,[name]: value});
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_bj449h6','template_1v1po2e',{
       user_name : form.name,
       user_email : form.email,
       message :  form.message,
       sender_name : "Nitheesh Kuamar",
       sender_email : "svnitheesh2003@gmail.com"
    },'N3X1ewi-3qjeqGOVB')
    .then(()=>{
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible');
      setForm({name : '',email : '',message : ''});
    },(error)=>{
      setLoading(false);
      console.log(error);
      alert('Something went wrong');
    })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden' >
      <motion.div variants={slideIn('left','tween',0.2,1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <form ref={formRef} autoComplete='off' onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <input type="text" name='name' value={form.name} onChange={handleChange} placeholder="What's your name?" className='bg-tertiary py-5 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>

          <input type="email" name='email' value={form.email} onChange={handleChange} placeholder="Enter your email" className='bg-tertiary py-5 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>

          <textarea rows='6' name='message' value={form.message} onChange={handleChange} placeholder="Your message..." className='bg-tertiary py-5 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>

          <button type='submit' className='bg-tertiary py-3 px-10 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl tracking-wider' >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right','tween',0.2,1)}
       className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")