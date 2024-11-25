import React from 'react';
import { ExternalLink } from 'lucide-react';
import Section from './Section';
import { useLanguage } from '../context/LanguageContext';

const projects = {
  en: [
    {
      title: "Project One",
      description: "A modern web application built with React and Node.js",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      link: "#"
    },
    {
      title: "Project Two",
      description: "Mobile-first e-commerce platform",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      link: "#"
    },
    {
      title: "Project Three",
      description: "AI-powered data analytics dashboard",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80",
      link: "#"
    },
    {
      title: "Project Four",
      description: "Cloud-based collaboration tool",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      link: "#"
    }
  ],
  zh: [
    {
      title: "项目一",
      description: "使用 React 和 Node.js 构建的现代网络应用",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      link: "#"
    },
    {
      title: "项目二",
      description: "移动优先的电商平台",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      link: "#"
    },
    {
      title: "项目三",
      description: "人工智能驱动的数据分析仪表板",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80",
      link: "#"
    },
    {
      title: "项目四",
      description: "基于云的协作工具",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      link: "#"
    }
  ]
};

const Projects = () => {
  const { language } = useLanguage();

  return (
    <Section title={language === 'en' ? 'Selected Work' : '精选作品'} id="work">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects[language as keyof typeof projects].map((project) => (
          <div key={project.title} className="group relative overflow-hidden rounded-xl">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover transform transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-colors"
                >
                  {language === 'en' ? 'View Project' : '查看项目'} <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;