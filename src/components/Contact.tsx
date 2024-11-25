import { useState } from 'react';
import { Mail } from 'lucide-react';
import Section from './Section';
import SocialIcons from './SocialIcons';
import WeChatModal from './WeChatModal';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const [isWeChatModalOpen, setIsWeChatModalOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <Section title={language === 'en' ? 'Get in Touch' : '联系我'} id="contact">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xl text-gray-600 mb-8">
          {language === 'en' ? 
            'I\'m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.' : 
            '我随时欢迎讨论新项目、创意想法或参与您愿景的机会。'}
        </p>
        <div className="space-y-8">
          <a 
            href="mailto:your@email.com"
            className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {language === 'en' ? 'Send me an email' : '给我发邮件'} <Mail size={20} className="ml-2" />
          </a>
          
          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              {language === 'en' ? 'Or find me on social media' : '或者在社交媒体上找到我'}
            </h3>
            <div className="flex justify-center">
              <SocialIcons />
            </div>
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
    </Section>
  );
};

export default Contact;