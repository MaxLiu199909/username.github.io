import { useState, useEffect } from 'react';
import { MessageCircle, Mail, ChevronDown } from 'lucide-react';
import { SiXiaohongshu } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import WeChatModal from './WeChatModal';
import { useLanguage } from '../context/LanguageContext';

const backgroundImages = [
  {
    webp: {
      small: "/images/backgrounds/bg1-small.webp",
      medium: "/images/backgrounds/bg1-medium.webp",
      large: "/images/backgrounds/bg1.webp"
    },
    jpg: {
      small: "/images/backgrounds/bg1-small.jpg",
      medium: "/images/backgrounds/bg1-medium.jpg",
      large: "/images/backgrounds/bg1.jpg"
    }
  },
  {
    webp: {
      small: "/images/backgrounds/bg2-small.webp",
      medium: "/images/backgrounds/bg2-medium.webp",
      large: "/images/backgrounds/bg2.webp"
    },
    jpg: {
      small: "/images/backgrounds/bg2-small.jpg",
      medium: "/images/backgrounds/bg2-medium.jpg",
      large: "/images/backgrounds/bg2.jpg"
    }
  },
  {
    webp: {
      small: "/images/backgrounds/bg3-small.webp",
      medium: "/images/backgrounds/bg3-medium.webp",
      large: "/images/backgrounds/bg3.webp"
    },
    jpg: {
      small: "/images/backgrounds/bg3-small.jpg",
      medium: "/images/backgrounds/bg3-medium.jpg",
      large: "/images/backgrounds/bg3.jpg"
    }
  },
  {
    webp: {
      small: "/images/backgrounds/bg4-small.webp",
      medium: "/images/backgrounds/bg4-medium.webp",
      large: "/images/backgrounds/bg4.webp"
    },
    jpg: {
      small: "/images/backgrounds/bg4-small.jpg",
      medium: "/images/backgrounds/bg4-medium.jpg",
      large: "/images/backgrounds/bg4.jpg"
    }
  }
];

const Hero = () => {
  const [isWeChatModalOpen, setIsWeChatModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { language } = useLanguage();
  const [supportsWebP] = useState(() => 
    CSS.supports('(background-image: -webkit-image-set(url("") 1x))')
  );

  useEffect(() => {
    const preloadNextImage = () => {
      const nextIndex = (currentImageIndex + 1) % backgroundImages.length;
      const nextImage = backgroundImages[nextIndex];
      
      const preloadImage = (src: string) => {
        const img = new Image();
        img.src = src;
      };
      
      if (supportsWebP) {
        preloadImage(nextImage.webp.medium);
      } else {
        preloadImage(nextImage.jpg.medium);
      }
    };

    preloadNextImage();

    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [currentImageIndex]);

  const openModal = () => {
    setIsWeChatModalOpen(true);
  };

  const getCreatorText = () => {
    if (language === 'en') {
      return 'Creator on Xiaohongshu with 10K followers and 20M+ views 📱';
    } else {
      return '小红书创作者，1万粉丝，2000W 观看次数 📱';
    }
  };

  const getOrganizerText = () => (
    <>
      {language === 'en' ? 'Organizer of ' : ''}
      <a 
        href="https://adventure-x.org/#/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 transition-colors"
      >
        AdventureX
      </a>
      {language === 'en' 
        ? ' (China\'s first pure youth hackathon) and HackathonWeekly（a non-profit tech community in Beijing and Shenzhen ）'
        : '（中国首个针对年轻人的黑客松）和 HackathonWeekly（北京和深圳的非营利技术社区 ） 💻 的组织者'}
    </>
  );

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Images with Overlay */}
      {backgroundImages.map((image, index) => (
        <div
          key={image.jpg.large}
          className={`absolute inset-0 z-0 transition-all duration-1000 ease-in-out ${
            currentImageIndex === index ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
        >
          <picture>
            <source
              type="image/webp"
              srcSet={`
                ${image.webp.small} 640w,
                ${image.webp.medium} 1280w,
                ${image.webp.large} 1920w
              `}
              sizes="100vw"
            />
            <source
              type="image/jpeg"
              srcSet={`
                ${image.jpg.small} 640w,
                ${image.jpg.medium} 1280w,
                ${image.jpg.large} 1920w
              `}
              sizes="100vw"
            />
            <img 
              src={image.jpg.medium}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover transform transition-transform duration-[10000ms] ease-out"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-white/10 backdrop-blur-[1px]"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-white">
        <div className="space-y-4 sm:space-y-8 backdrop-blur-sm bg-black/10 p-4 sm:p-8 rounded-xl">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-3 sm:mb-6 leading-tight animate-slideInFromLeft">
            {language === 'en' ? 'Hi, I\'m Max Liu 👋' : '你好，我是Max 👋'}
          </h1>

          <div className="mb-4 sm:mb-8 animate-slideInFromRight">
            <h2 className="text-lg sm:text-2xl md:text-3xl text-white/90 font-semibold mb-2 sm:mb-3">
              {language === 'en' ? '🚀 Currently' : '🚀 目前在做'}
            </h2>
            <p className="text-base sm:text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed pl-2 sm:pl-4 border-l-2 border-white/10">
              {language === 'en' ? 'Head of Developer Relations & Community Operations in China at ' : ''}
              <a 
                href="https://www.sapient.inc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Sapient
              </a>
              {language === 'en' 
                ? '' 
                : ' 中国区开发者关系与社区运营负责人'}
            </p>
          </div>

          <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-3 sm:mb-6 animate-slideInFromLeft">
            {language === 'en' 
              ? 'Previously: COO at AI Education Startup (¥5M Angel Round) 📚, Research Team at '
              : '过去经历：AI 教育初创公司 COO（¥5M 天使轮） 📚，'}
            <a 
              href={language === 'en' ? 'https://www.miracleplus.com/en/' : 'https://www.miracleplus.com/'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              {language === 'en' ? 'Miracle Plus' : '奇绩创坛'}
            </a>
            {language === 'en'
              ? ' 🔍, and Community Operations at '
              : ' 行研团队 🔍，'}
            <a 
              href="https://founderpark.net/pchome/pchomepage" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Founder Park
            </a>
            {language === 'en' ? ' 🌟' : '社区运营 🌟'}
          </p>

          <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed animate-slideInFromRight">
            {language === 'en' 
              ? <>
                  Community builder with 3000+ AI professionals network 🤝
                  <br className="hidden sm:block" />
                  <span className="inline sm:hidden"> • </span>
                  {getCreatorText()}
                  <br className="hidden sm:block" />
                  <span className="inline sm:hidden"> • </span>
                  {getOrganizerText()}
                </>
              : <>
                  3000+ 人的 AI 专业人士网络社区建设者 🤝
                  <br className="hidden sm:block" />
                  <span className="inline sm:hidden"> • </span>
                  {getCreatorText()}
                  <br className="hidden sm:block" />
                  <span className="inline sm:hidden"> • </span>
                  {getOrganizerText()}
                </>
            }
          </p>

          {/* Quick Contact Buttons for Mobile */}
          <div className="flex flex-col sm:hidden gap-3 mt-4">
            <button
              onClick={openModal}
              className="flex items-center justify-center bg-white/90 backdrop-blur-sm text-black px-4 py-2.5 rounded-lg hover:bg-white transition-colors w-full"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {language === 'en' ? 'Chat on WeChat' : '微信聊天'}
            </button>
            <a
              href="mailto:liudeze1999@gmail.com"
              className="flex items-center justify-center bg-transparent border border-white/80 text-white px-4 py-2.5 rounded-lg hover:bg-white/10 transition-colors w-full"
            >
              <Mail className="w-5 h-5 mr-2" />
              {language === 'en' ? 'Send Email' : '发送邮件'}
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-6 mt-6 animate-fadeIn">
            <a href="https://github.com/MaxLiu199909" 
               className="hover:text-white transform hover:scale-110 active:scale-95 transition-all duration-300" 
               title="GitHub"
               target="_blank" 
               rel="noopener noreferrer">
              <FaGithub className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 hover:text-blue-300" />
            </a>
            <a href="https://www.linkedin.com/in/max-liu-645814138/" 
               className="hover:text-white transform hover:scale-110 active:scale-95 transition-all duration-300" 
               title="LinkedIn"
               target="_blank" 
               rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 hover:text-blue-400" />
            </a>
            <a href="https://x.com/Max939566737067" 
              className="hover:text-white hover:scale-110 transition-all duration-300" 
              title="X"
              target="_blank" 
              rel="noopener noreferrer">
              <FaTwitter className="w-6 h-6 sm:w-8 sm:h-8 text-sky-500 hover:text-sky-400" />
            </a>
            <button
              onClick={openModal}
              className="hover:text-white transform hover:scale-110 active:scale-95 transition-all duration-300 hidden sm:block"
              title={language === 'en' ? 'WeChat' : '微信'}>
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 hover:text-green-400" />
            </button>
            <a href="mailto:liudeze1999@gmail.com" 
               className="hover:text-white transform hover:scale-110 active:scale-95 transition-all duration-300 hidden sm:block" 
               title={language === 'en' ? 'Email' : '邮件'}
               target="_blank" 
               rel="noopener noreferrer">
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 hover:text-amber-300" />
            </a>
            <a href="https://www.xiaohongshu.com/user/profile/64867045000000001c029874" 
               className="hover:text-white transform hover:scale-110 active:scale-95 transition-all duration-300" 
               title="小红书"
               target="_blank" 
               rel="noopener noreferrer">
              <SiXiaohongshu className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 hover:text-red-400" />
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
            <ChevronDown className="w-8 h-8 text-white/60" />
          </div>
        </div>
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