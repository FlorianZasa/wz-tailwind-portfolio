import { NavLink } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex justify-between py-[62px] text-[18px]">
      <div className="flex flex-col lg:flex-row gap-[38px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-primary transition-all duration-200 ease-in-out font-bold'
              : 'hover:text-primary hover:font-bold transition-all duration-200 ease-in-out'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive
              ? 'text-primary transition-all duration-200 ease-in-out font-bold'
              : 'hover:text-primary hover:font-bold transition-all duration-200 ease-in-out'
          }
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/aboutme"
          className={({ isActive }) =>
            isActive
              ? 'text-primary transition-all duration-200 ease-in-out font-bold'
              : 'hover:text-primary hover:font-bold transition-all duration-200 ease-in-out'
          }
        >
          About me
        </NavLink>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <NavLink
          to="https://www.instagram.com/wiktoria_designwork/"
          className="flex items-center gap-2 hover:text-primary hover:font-bold transition-all duration-200 ease-in-out"
          target="_blank"
        >
          <FaInstagram /> Instagram
        </NavLink>
        <NavLink
          to="https://www.linkedin.com/in/wiktoria-zemla-00a20b252/"
          className="flex items-center gap-2 hover:text-primary hover:font-bold transition-all duration-200 ease-in-out"
          target="_blank"
        >
          <FaLinkedinIn /> LinkedIn
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
