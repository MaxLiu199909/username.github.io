import Section from './Section';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { language } = useLanguage();

  return (
    <Section title={language === 'en' ? 'About Me' : '关于我'} id="about" className="bg-gray-50">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img 
          src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
          alt={language === 'en' ? 'Profile' : '个人照片'}
          className="rounded-xl shadow-lg"
        />
        <div className="space-y-6">
          <p className="text-lg text-gray-600 leading-relaxed">
            {language === 'en' 
              ? "I'm a full-stack developer with a passion for building beautiful, functional, and user-friendly applications. With experience in React, Node.js, and cloud technologies, I focus on creating scalable solutions that solve real problems."
              : "我是一名全栈开发者，热衷于构建美观、实用、用户友好的应用程序。凭借 React、Node.js 和云技术的经验，我专注于创建可扩展的解决方案，解决实际问题。"}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            {language === 'en'
              ? "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring."
              : "在不编码的时候，你可以发现我在探索新技术、为开源项目做贡献，或通过技术写作和指导分享我的知识。"}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;