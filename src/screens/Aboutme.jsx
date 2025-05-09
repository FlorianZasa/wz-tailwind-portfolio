import { useEffect, useState } from 'react';
import {motion} from 'motion/react'

import { WORK, EDUCATION, ABOUTMEHETO, ABOUTMEFREETIME } from '../constants/index';
import LanguageComponent from '../components/elements/LanguageComponent';
import Button from '../components/elements/Button';

import aboutme_1 from '../assets/about_me/images/hero.png'
import withJackie from '../assets/about_me/images/dog_pic.png'

import english from '../assets/about_me/icons/cookie.png'
import german from '../assets/about_me/icons/pretzel.png'
import polish from '../assets/about_me/icons/pierogi.png'
import dutch from '../assets/about_me/icons/kaas.png'
import Timeline from "../components/elements/Timeline.jsx";

function Aboutme() {
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

    const donwload = () => {
        const pdfUrl = import.meta.env.VITE_CV_FILE_PATH;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "CV_Wiktoria_Zemla";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <div className='flex flex-col gap-[220px]'>
        <motion.section
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                ease: "easeInOut",
                duration: 0.6,
            }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <div className="flex flex-col lg:flex-row gap-[125px]">
              <div className='flex flex-col justify-end'>
                <div className='mb-[24px]' style={{ height: '70px', position: 'relative', overflow: 'hidden' }}>
                    <div
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
                    </div>
                  {/*</AnimatePresence>*/}
                </div>

                <p className="mb-[64px] text-[18px]">
                    {ABOUTMEHETO}
                </p>
                <div className="flex flex-col lg:flex-row gap-[20px] w-full items-start">
                  <Button text={"Download my CV"} variant="primary" onClick={() => donwload()} />
                  <Button  text={"LinkedIn profile"} variant="secondary" onClick={() => window.open("https://www.linkedin.com/in/wiktoria-zemla-00a20b252/", "_blank")} />
                </div>
              </div>
              <img src={aboutme_1} alt='me' width='515'/>
            </div>
        </motion.section>


        <motion.section
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                ease: "easeInOut",
                duration: 0.5,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className='flex flex-col sm:gap-2'
        >
        <h2 className='my-8 text-center text-[48px] font-bold'>Languages I speak</h2>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-[96px] w-full mt-8'>
            <motion.span
                initial={{ y: 0, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                    delay: 0.1
                }}
                viewport={{ once: true }}
            >
                <LanguageComponent iconSrc={polish} language='Polish' level='Native' />
            </motion.span>
            <motion.span
                initial={{ y: 0, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                    delay: 0.2
                }}
                viewport={{ once: true }}
            >
                <LanguageComponent iconSrc={dutch} language='Dutch' level='Fluent' />
            </motion.span>
            <motion.span
                initial={{ y: 0, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                    delay: 0.3
                }}
                viewport={{ once: true }}
            >
                <LanguageComponent iconSrc={english} language='English' level='Fluent' />
            </motion.span>
            <motion.span
                initial={{ y: 0, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                    delay: 0.4
                }}
                viewport={{ once: true }}
            >
                <LanguageComponent iconSrc={german} language='German' level='Intermediate' />
            </motion.span>
        </div>
      </motion.section>




    <motion.section
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
            ease: "easeInOut",
            duration: 0.5,
        }}
        viewport={{ once: true, amount: 0.3 }}>
        <div className="flex flex-col lg:flex-row justify-center gap-[124px]">
          <div>
            <h2 className='my-8 text-[48px] font-bold'>
              When I’m <span className='text-primary'>not</span> working
            </h2>
            <p className="text text-[18px]">
                {ABOUTMEFREETIME}
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
      {/*</motion.section>*/}
      </motion.section>



    <motion.section
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
            ease: "easeInOut",
            duration: 0.6,
        }}
        viewport={{ once: true, amount: 0.3 }}
        className='flex flex-col justify-center items-center w-full gap-12'>
          <h2 className='my-8 text-center text-[48px] font-bold'>Work Experience</h2>
          <Timeline data={WORK} />
      </motion.section>

        <motion.section
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                ease: "easeInOut",
                duration: 0.6,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className='flex flex-col justify-center items-center w-full gap-12'
        >
        <h2 className='my-8 text-center text-[48px] font-bold'>Education</h2>
        <Timeline data={EDUCATION} />

      </motion.section>
      
    </div>
  )
}

export default Aboutme