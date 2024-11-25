import { useState, useEffect } from 'react';
import { MessageCircle, Mail, ChevronDown } from 'lucide-react';
import { SiXiaohongshu } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import WeChatModal from './WeChatModal';
import { useLanguage } from '../context/LanguageContext';

const backgroundImages = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80"
];

const Hero = () => {
  const [isWeChatModalOpen, setIsWeChatModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const openModal = () => {
    setIsWeChatModalOpen(true);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Images with Overlay */}
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 z-0 transition-all duration-1000 ease-in-out ${
            currentImageIndex === index ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
        >
          <img 
            src={image}
            alt={`Background ${index + 1}`}
            className="w-full h-full object-cover transform transition-transform duration-[10000ms] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-white/10 backdrop-blur-[1px]"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-white">
        <div className="space-y-6 sm:space-y-8 backdrop-blur-sm bg-black/10 p-8 rounded-xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight animate-slideInFromLeft">
            {language === 'en' ? 'Hi, I\'m Max Liu 👋' : '你好，我是Max 👋'}
          </h1>

          <div className="mb-6 sm:mb-8 animate-slideInFromRight">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-white/90 font-semibold mb-2 sm:mb-3">
              {language === 'en' ? '🚀 Currently' : '🚀 目前在做'}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed pl-3 sm:pl-4 border-l-2 border-white/10">
              {language === 'en' 
                ? 'Head of Developer Relations & Community Operations in China at Sapient' 
                : 'Sapient 中国区开发者关系与社区运营负责人'}
            </p>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-4 sm:mb-6 animate-slideInFromLeft">
            {language === 'en' 
              ? 'Previously: COO at AI Education Startup (¥5M Angel Round) 📚, Research Team at Miracle Plus 🔍, and Community Operations at Founder Park 🌟' 
              : '过去经历：AI 教育初创公司 COO（¥5M 天使轮） 📚，奇绩创坛行研团队 🔍，Founder Park社区运营 🌟'}
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed animate-slideInFromRight">
            {language === 'en' 
              ? <>
                  Community builder with 3000+ AI professionals network 🤝
                  <br />
                  Creator on Xiaohongshu with 8K followers and 20M+ views 📱
                  <br />
                  Organizer of AdventureX (China's first pure youth hackathon) and HackathonWeekly（a non-profit tech community in Beijing and Shenzhen ）
                </>
              : <>
                  3000+ 人的 AI 专业人士网络社区建设者 🤝
                  <br />
                  小红书创作者，8K 粉丝，2000W 观看次数 📱
                  <br />
                  AdventureX（中国首个针对年轻人的黑客松）和 HackathonWeekly（北京和深圳的非营利技术社区 ） 💻 的组织者
                </>
            }
          </p>

          {/* Quick Contact Buttons for Mobile */}
          <div className="flex flex-col sm:hidden gap-3 mt-6">
            <button
              onClick={openModal}
              className="flex items-center justify-center bg-white text-black px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors w-full"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {language === 'en' ? 'Chat on WeChat' : '微信聊天'}
            </button>
            <a
              href="mailto:liudeze1999@gmail.com"
              className="flex items-center justify-center bg-transparent border-2 border-white text-white px-4 py-3 rounded-lg hover:bg-white/10 transition-colors w-full"
            >
              <Mail className="w-5 h-5 mr-2" />
              {language === 'en' ? 'Send Email' : '发送邮件'}
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 mt-6 sm:mt-8 animate-fadeIn">
            <a href="https://github.com/MaxLiu199909" 
               className="hover:text-white transform hover:scale-125 transition-all duration-300 hover:rotate-6" 
               title="GitHub"
               target="_blank" 
               rel="noopener noreferrer">
              <FaGithub className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 hover:text-blue-300" />
            </a>
            <a href="https://www.linkedin.com/in/max-liu-645814138/" 
               className="hover:text-white transform hover:scale-125 transition-all duration-300 hover:rotate-6" 
               title="LinkedIn"
               target="_blank" 
               rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 hover:text-blue-400" />
            </a>
            <a href="https://twitter.com/MaxLiu199909" 
               className="hover:text-white transform hover:scale-125 transition-all duration-300 hover:rotate-6" 
               title="Twitter"
               target="_blank" 
               rel="noopener noreferrer">
              <FaTwitter className="w-6 h-6 sm:w-8 sm:h-8 text-sky-500 hover:text-sky-400" />
            </a>
            <button
              onClick={openModal}
              className="hover:text-white transform hover:scale-125 transition-all duration-300 hover:rotate-6 hidden sm:block"
              title={language === 'en' ? 'WeChat' : '微信'}>
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 hover:text-green-400" />
            </button>
            <a href="mailto:liudeze1999@gmail.com" 
               className="hover:text-white transform hover:scale-125 transition-all duration-300 hover:rotate-6 hidden sm:block" 
               title={language === 'en' ? 'Email' : '邮件'}
               target="_blank" 
               rel="noopener noreferrer">
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 hover:text-amber-300" />
            </a>
            <a href="https://www.xiaohongshu.com/user/profile/64867045000000001c029874" 
               className="hover:text-white transform hover:scale-125 transition-all duration-300 hover:rotate-6" 
               title={language === 'en' ? 'Xiaohongshu' : '小红书'}
               target="_blank" 
               rel="noopener noreferrer">
              <SiXiaohongshu className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 hover:text-red-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
      </div>

      {/* WeChat Modal */}
      <WeChatModal 
        isOpen={isWeChatModalOpen}
        onClose={() => setIsWeChatModalOpen(false)}
        wechatId="Max_Deze"
        qrCodeUrl="/wechat-qr_副本.jpg"
      />
    </section>
  );
};

export default Hero;