import { useEffect, useState } from 'react';
import {AnimatePresence, motion, useScroll} from 'motion/react'

import { WORK, EDUCATION } from '../constants/index';
import ContactButton from '../components/elements/ContactButton';
import LanguageComponent from '../components/elements/LanguageComponent';
import Button from '../components/elements/Button';

import aboutme_1 from '../assets/about_me/images/hero.png'
import withJackie from '../assets/about_me/images/dog_pic.png'

import english from '../assets/about_me/icons/cookie.png'
import german from '../assets/about_me/icons/pretzel.png'
import polish from '../assets/about_me/icons/pierogi.png'
import dutch from '../assets/about_me/icons/kaas.png'

function Aboutme() {
    const { scrollYProgress } = useScroll();

    const hiMsg = ["Cześć", "Hoi", "Hello", "Moin"]
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            });
        }, []);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % hiMsg.length);
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  

  return (
    <div className='flex flex-col gap-[220px]'>
      <motion.section
          whileInView={{y: 0, opacity: 1}}
          initial={{y: 40, opacity: 0}}
          transition={{duration: 0.3}}
      >
        <div className="flex flex-col lg:flex-row gap-[125px]">
          <div className='flex flex-col justify-end'>
            <div className='mb-[24px]' style={{ height: '70px', position: 'relative', overflow: 'hidden' }}>
              <AnimatePresence initial={false}>
                <motion.div
                  key={hiMsg[currentIndex]}
                  initial={{ y: '-100%' }}
                  animate={{ y: '0%' }}
                  exit={{ y: '100%' }}
                  transition={{ 
                    y: { type: "tween", duration: 0.5, ease: "easeInOut" }
                  }}
                  style={{ 
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                  }}
                >
                  <h1 className="mb-[12px] text-[72px] font-bold">
                    {hiMsg[currentIndex]}<span className='text-primary'>!</span>
                  </h1>
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="mb-[64px]" style={{fontSize: '18px', maxWidth: '28.75rem'}}>I’m Wiktoria Zemla, a recent graduate with a degree 
in Communication and Multimedia Design, specializing 
in UX/UI design. I was born in Poland, then moved to 
the Netherlands when I was 14, and now I’m about to relocate to Germany. I’m looking forward to learning 
more and taking on new challenges.</p>
            <div className="flex flex-col lg:flex-row gap-[20px] w-full items-start">
              <Button text={"Download my CV"} variant="primary" />
              <Button  text={"LinkedIn profile"} variant="secondary" onClick={() => window.open("https://www.linkedin.com/in/wiktoria-zemla-00a20b252/", "_blank")} />
            </div>
          </div>
          <img src={aboutme_1} alt='me' width='515'/>
        </div>
      </motion.section>


      <motion.section 
        whileInView={{y: 0, opacity: 1}}
        initial={{y: 40, opacity: 0}}
        transition={{duration: 0.3}}
        className="flex flex-col gap-[72px]">
        <h2 className='my-8 text-center text-[48px] font-bold'>Languages I speak</h2>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-[96px] w-full'>
            <LanguageComponent iconSrc={polish} language='Polish' level='Native' />
            <LanguageComponent iconSrc={dutch} language='Dutch' level='Fluent' />
            <LanguageComponent iconSrc={english} language='English' level='Fluent' />
            <LanguageComponent iconSrc={german} language='German' level='Intermediate' />
        </div>
      </motion.section>




      <motion.section 
        whileInView={{y: 0, opacity: 1}}
        initial={{y: 40, opacity: 0}}
        transition={{duration: 0.3}}
        style={{ shadow: scrollYProgress }}
        >
        <div className="flex flex-col lg:flex-row justify-center gap-[124px]">
          <div>
            <h2 className='my-8 text-[48px] font-bold'>
              When I’m <span className='text-primary'>not</span> working
            </h2>
            <p className="text">
              In my free time, I’m a proud dog lover, nothing brings me more joy than spending time with dogs. I also love unwinding with a good Netflix series like La Casa de Papel, where I admire how much effort goes into executing great ideas, which parallels my own design process.
            </p>
          </div>
          <img
            src={withJackie}
            alt="me"
            width= "443"
            className='shadow-primary shadow-[-16px_-16px_0px_0px]' // 42 when scroll
          />
        </div>
        <div id="about-3-right-border"/>
      </motion.section>










      <section style={{textAlign: 'center', display: 'flex', gap: '4rem'}}>
        <h2>Work experience</h2>

      </section> 

      <section style={{textAlign: 'center', display: 'flex', gap: '4rem'}}>
      <h2>Education</h2>

      </section>   
      
    </div>
  )
}

export default Aboutme