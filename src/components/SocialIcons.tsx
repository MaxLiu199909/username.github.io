import { type FC } from 'react';
import { MessageCircle, Twitter } from 'lucide-react';
import { SiXiaohongshu } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaTwitter, Mail } from 'react-icons/fa';

const SocialIcons: FC = () => {
  return (
    <div className="flex space-x-6">
      <a href="https://github.com/MaxLiu199909" 
         className="hover:text-white hover:scale-110 transition-all duration-300" 
         title="GitHub"
         target="_blank" 
         rel="noopener noreferrer">
        <FaGithub className="w-8 h-8 text-blue-400 hover:text-blue-300" />
      </a>
      <a href="https://www.linkedin.com/in/max-liu-645814138/" 
         className="hover:text-white hover:scale-110 transition-all duration-300" 
         title="LinkedIn"
         target="_blank" 
         rel="noopener noreferrer">
        <FaLinkedin className="w-8 h-8 text-blue-500 hover:text-blue-400" />
      </a>
      <a href="https://x.com/Max939566737067" 
         className="hover:text-white hover:scale-110 transition-all duration-300" 
         title="X"
         target="_blank" 
         rel="noopener noreferrer">
        <Twitter className="w-8 h-8 text-sky-500 hover:text-sky-400" />
      </a>
      <button
        onClick={() => window.open('weixin://')}
        className="hover:text-white hover:scale-110 transition-all duration-300"
        title="WeChat">
        <MessageCircle className="w-8 h-8 text-green-500 hover:text-green-400" />
      </button>
      <a href="mailto:liudeze1999@gmail.com" 
         className="hover:text-white hover:scale-110 transition-all duration-300" 
         title="Email"
         target="_blank" 
         rel="noopener noreferrer">
        <Mail className="w-8 h-8 text-amber-400 hover:text-amber-300" />
      </a>
      <a href="https://www.xiaohongshu.com/user/profile/64867045000000001c029874" 
         className="hover:text-white hover:scale-110 transition-all duration-300" 
         title="小红书"
         target="_blank" 
         rel="noopener noreferrer">
        <SiXiaohongshu className="w-8 h-8 text-red-500 hover:text-red-400" />
      </a>
    </div>
  );
};

export default SocialIcons;