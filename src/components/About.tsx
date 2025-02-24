import Section from './Section';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { language } = useLanguage();

  return (
    <Section 
      title={language === 'en' ? 'About Me' : '关于我'} 
      id="about" 
      className="bg-gray-50"
      titleClassName="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-gray-900"
    >
      <div className="grid md:grid-cols-2 gap-6 sm:gap-12 items-start">
        {/* Profile Image Container */}
        <div className="relative aspect-[3/4] md:sticky md:top-24">
          <picture>
            <source
              srcSet="/images/profile.webp"
              type="image/webp"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <img 
              src="/images/profile.jpg"
              alt={language === 'en' ? 'Profile' : '个人照片'}
              className="rounded-xl shadow-lg w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-300"
              style={{ objectPosition: '50% 15%' }}
              loading="eager"
              fetchpriority="high"
              decoding="async"
              width="800"
              height="1067"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
        </div>

        {/* Text Content */}
        <div className="space-y-4 sm:space-y-6">
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {language === 'en' 
              ? "Born in 2000, I was pursuing my Bachelor's degree in Accounting and Business at the University of Auckland, New Zealand. During my summer break in October 2023, I made a pivotal decision that would reshape my journey."
              : "我出生于2000年，曾在新西兰奥克兰大学主修会计与商业。2023年10月的暑假期间（新西兰位于南半球），我做出了一个改变人生轨迹的决定。"}
          </p>

          <div className="h-px bg-gray-200 w-full my-4 sm:my-6"></div>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {language === 'en'
              ? "Witnessing the AI revolution sweeping across China while my peers in New Zealand were still discussing how to use GPT for essays, I took a leap of faith. I participated in hackathons, founded a B2B startup, and later joined the research team at Miracle Plus, followed by roles at an AI education startup and Founder Park."
              : "当我发现国内的同龄人都在积极投身AI创业浪潮时，新西兰的同学们还在讨论如何用GPT写论文。我毅然决定休学，投身AI浪潮。我先后参与黑客松比赛、创立To B服务公司、加入奇绩创坛行研团队，之后在AI教育创业公司和Founder Park积累了宝贵经验。"}
          </p>

          <div className="h-px bg-gray-200 w-full my-4 sm:my-6"></div>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {language === 'en'
              ? "Beyond my professional roles, I've built a thriving community of over 3,000 AI professionals. As a content creator on Xiaohongshu, I've grown to 10,000 followers with my tech-focused content reaching over 20 million views. I'm also proud to have organized AdventureX, China's first pure youth hackathon, and co-founded HackathonWeekly, a non-profit tech community in Beijing and Shenzhen."
              : "除了专业角色外，我还建立了一个拥有3000多名AI专业人士的活跃社区。作为小红书创作者，我的技术内容已吸引了1万名粉丝，总浏览量超过2000万。我还很荣幸组织了中国首个纯青年黑客松AdventureX，并共同创立了北京和深圳的非营利技术社区HackathonWeekly。"}
          </p>

          <div className="h-px bg-gray-200 w-full my-4 sm:my-6"></div>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {language === 'en'
              ? "Currently at Sapient, a Singapore-based AI startup that's making waves in enterprise AI. Sapient stands out with its innovative approach to large language models, developing new model architectures that are both more efficient and cost-effective than traditional approaches. The company's models achieve superior performance while using significantly less computational resources, marking a breakthrough in enterprise AI solutions."
              : "目前我在Sapient工作，这是一家来自新加坡的AI创业公司，正在企业AI领域掀起波澜。Sapient以其创新的大语言模型架构脱颖而出，开发出比传统方法更高效、更具成本效益的模型。公司的模型在显著减少计算资源使用的同时，实现了卓越的性能，这在企业AI解决方案领域具有突破性意义。"}
          </p>

          <div className="h-px bg-gray-200 w-full my-4 sm:my-6"></div>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {language === 'en'
              ? "Beyond my role at Sapient, I'm actively exploring AI programming and declarative development. I've already achieved some promising results, and this website is one of them - built entirely through declarative development using Windsurf. This approach represents a fundamental shift in how we create software, making development more accessible and efficient. I'm excited to be at the forefront of this transformation in software development."
              : "除了在Sapient的工作，我也在积极探索AI编程和声明式开发。我已经取得了一些成果，本网站就是其中之一 - 完全通过Windsurf进行声明式开发构建。这种方法代表了软件创建方式的根本转变，使开发变得更加便捷和高效。我很高兴能够站在软件开发变革的前沿。"}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;