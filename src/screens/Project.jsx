import { Link, useNavigate, useParams } from 'react-router-dom';
import { PROJECTS } from '../constants';
import Hero from '../components/pages/project/Hero';
import { useEffect } from 'react';
import Content from '../components/pages/project/Content';
import { FaArrowLeft } from 'react-icons/fa';
import Projects from '/src/components/pages/home/Projects.jsx';

const Project = () => {
    const { id } = useParams();
    const navigate = useNavigate()

    const project = PROJECTS.find(p => p.id === parseInt(id));
    useEffect(() => {
        if (!project) {
          navigate('/');
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
      }, [project, navigate]);
    
      if (!project) {
        return <div>Loading...</div>;
      }

    const getRemainingProjects = () => {
      return PROJECTS.filter(p => p.id !== project.id);
    }

    const goBack = () => {
      navigate(-1);
    };

    return (
        <div>
            <button 
                onClick={goBack} 
                className="flex items-center gap-2 text-primary underline bg-transparent border-none cursor-pointer"
            >
                <FaArrowLeft /> Go back
            </button>
            <Hero project={project} />
            <Content project={project} />
            <Projects projects={getRemainingProjects()} />
        </div>
    )
}

export default Project
