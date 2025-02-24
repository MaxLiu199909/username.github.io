import React from 'react';
import ProjectLayout from '../components/ProjectLayout';
import { useLanguage } from '../context/LanguageContext';

const ProjectFour = () => {
  const { language } = useLanguage();
  return (
    <ProjectLayout
      title={{
        en: "SafeEat - Your AI Food Safety Assistant",
        zh: "放心吃吧 - 你的AI食品安全助手"
      }}
      description={{
        en: "Using AI to ensure food safety and make informed dietary choices",
        zh: "用AI让你吃得更放心，选择更健康"
      }}
      projectNumber={4}
    >
      <div className="space-y-12">
        {/* Project Overview */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {language === 'en' ? 'Project Overview' : '项目概览'}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {language === 'en' 
              ? "SafeEat is an intelligent food safety assistant that helps users understand food ingredients, prevent safety risks, and make healthier dietary choices. By leveraging AI technology, we're making food safety information more accessible and personalized for everyone."
              : "放心吃吧是一款智能食品安全助手，帮助用户了解食品成分，预防安全风险，做出更健康的饮食选择。通过运用AI技术，我们让食品安全信息变得更易获取，更加个性化。"}
          </p>
        </section>

        {/* Key Features */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {language === 'en' ? 'Key Features' : '核心功能'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {language === 'en' ? 'Smart Ingredient Recognition' : '智能配料识别'}
              </h3>
              <p className="text-gray-700">
                {language === 'en'
                  ? "Take a photo of food packaging and let AI instantly analyze the ingredient list, providing detailed information about each component."
                  : "拍摄食品包装照片，让AI即时分析配料表，提供每种成分的详细信息。"}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {language === 'en' ? 'Safety Risk Assessment' : '安全风险评估'}
              </h3>
              <p className="text-gray-700">
                {language === 'en'
                  ? "Comprehensive evaluation of food safety levels, additive analysis, nutritional interpretation, and allergen risk alerts."
                  : "全面评估食品安全等级，分析添加剂，解读营养成分，提示过敏原风险。"}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {language === 'en' ? 'Personalized Service' : '个性化服务'}
              </h3>
              <p className="text-gray-700">
                {language === 'en'
                  ? "Set personal allergens, manage dietary preferences, and track your food safety history with our customized service."
                  : "设置个人过敏原，管理饮食偏好，追踪食品安全历史记录。"}
              </p>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {language === 'en' ? 'Technology Stack' : '技术架构'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">AI</div>
              <div className="text-gray-700">
                {language === 'en' ? 'Core Recognition' : '核心识别'}
              </div>
              <p className="mt-2 text-sm text-gray-600">
                {language === 'en' ? 'Vision Framework & OCR Technology' : 'Vision框架与OCR技术'}
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">Swift</div>
              <div className="text-gray-700">
                {language === 'en' ? 'Native Development' : '原生开发'}
              </div>
              <p className="mt-2 text-sm text-gray-600">
                {language === 'en' ? 'iOS 15.0+ Support' : '支持iOS 15.0以上'}
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">Cloud</div>
              <div className="text-gray-700">
                {language === 'en' ? 'Data Processing' : '数据处理'}
              </div>
              <p className="mt-2 text-sm text-gray-600">
                {language === 'en' ? 'Secure & GDPR Compliant' : '安全且符合GDPR标准'}
              </p>
            </div>
          </div>
        </section>

        {/* App Statistics */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {language === 'en' ? 'App Impact' : '应用影响'}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
              <div className="text-sm text-gray-700">
                {language === 'en' ? 'Recognition Accuracy' : '识别准确率'}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {language === 'en' ? 'For standard packaging' : '标准包装识别'}
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-600 mb-1">50k+</div>
              <div className="text-sm text-gray-700">
                {language === 'en' ? 'Active Users' : '活跃用户'}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {language === 'en' ? 'Monthly active users' : '月活跃用户'}
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-600 mb-1">1M+</div>
              <div className="text-sm text-gray-700">
                {language === 'en' ? 'Food Items' : '食品数据'}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {language === 'en' ? 'In our database' : '数据库收录'}
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-600 mb-1">4.8</div>
              <div className="text-sm text-gray-700">
                {language === 'en' ? 'App Rating' : '应用评分'}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {language === 'en' ? 'App Store Rating' : 'App Store评分'}
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {language === 'en' ? 'Future Vision' : '未来展望'}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {language === 'en'
              ? "We're committed to expanding our food safety database and enhancing our AI capabilities to provide even more accurate and comprehensive food safety information. Our vision is to become the most trusted AI-powered food safety assistant, helping everyone make informed decisions about their daily diet. We're also exploring partnerships with food manufacturers and regulatory bodies to create a more transparent and safer food ecosystem."
              : "我们致力于扩展食品安全数据库并增强AI能力，提供更准确、更全面的食品安全信息。我们的愿景是成为最值得信赖的AI食品安全助手，帮助每个人对日常饮食做出明智的选择。我们也在探索与食品制造商和监管机构的合作，创建一个更透明、更安全的食品生态系统。"}
          </p>
        </section>
      </div>
    </ProjectLayout>
  );
};

export default ProjectFour;
