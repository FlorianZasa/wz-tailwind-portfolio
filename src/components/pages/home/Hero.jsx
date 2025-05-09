import hero from '../../../assets/hero.png';
import Button from '../../elements/Button';
import { motion } from 'framer-motion'; // Corrected import
import ContactButton from '../../elements/ContactButton';

const Hero = () => {
  const donwload = () => {
    const pdfUrl = import.meta.env.VITE_CV_FILE_PATH;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV_Wiktoria_Zemla";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const myAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
        variants={myAnimation}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center gap-12 lg:gap-0">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col lg:items-start">
            <h4 className="text-[16px] lg:text-[18px] mb-[6px]">
              Hi there,
            </h4>
            <h1 className="mb-[12px] text-[44px] lg:text-[72px] font-bold">
              I’m Wiktoria
            </h1>
            <span className="pb-16 text-[24px] font-medium">
              I’m a passionate <span className="text-primary">UX/UI Designer</span> who crafts engaging and intuitive digital experiences.
            </span>
            {/* No need for extra motion.div wrapper here */}
            <div className="flex flex-col lg:flex-row gap-[20px] w-full items-start">
              <ContactButton />
              <Button text={"Download my CV"} variant="secondary" onClick={() => donwload()} />
            </div>
          </div>
        </div>
        <img
          src={hero}
          alt="Wiktoria Zemla"
          className="max-w-full"
          style={{ width: '477px', height: 'auto' }}
        />
      </div>
    </motion.div>
  );
};

export default Hero;
