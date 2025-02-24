import React from 'react';
import ProjectLayout from '../components/ProjectLayout';
import { useLanguage } from '../context/LanguageContext';

const ProjectThree = () => {
  const { language } = useLanguage();
  return (
    <ProjectLayout
      title={{
        en: "BeautyTest - AI Skin Analysis Assistant",
        zh: "美美测 - AI肤色分析助手"
      }}
      description={{
        en: "Your personal AI beauty consultant for precise skin tone analysis",
        zh: "你的AI美容顾问，精准分析肤色类型"
      }}
      projectNumber={3}
    >
      <div className="space-y-12">
        {/* Project Overview */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {language === 'en' ? 'Project Overview' : '项目概览'}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {language === 'en' 
              ? "BeautyTest is an innovative AI-powered skin analysis application that helps users understand their skin tone and receive personalized skincare recommendations. Using advanced computer vision technology, it provides accurate skin tone analysis and tailored beauty advice."
              : "美美测是一款创新的AI肤色分析应用，帮助用户了解自己的肤色类型并获取个性化护肤建议。通过先进的计算机视觉技术，提供精准的肤色分析和定制化的美容建议。"}
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
                {language === 'en' ? 'Smart Skin Analysis' : '智能肤色分析'}
              </h3>
              <p className="text-gray-700">
                {language === 'en'
                  ? "Take a photo or select from gallery to get instant AI-powered skin tone analysis with high accuracy."
                  : "拍照或从相册选择照片，即刻获得AI驱动的高精度肤色分析。"}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {language === 'en' ? 'Personalized Advice' : '个性化建议'}
              </h3>
              <p className="text-gray-700">
                {language === 'en'
                  ? "Receive customized skincare tips and product recommendations based on your skin type."
                  : "根据肤色类型获取定制化护肤建议和产品推荐。"}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {language === 'en' ? 'Skin Care Tracking' : '护肤追踪'}
              </h3>
              <p className="text-gray-700">
                {language === 'en'
                  ? "Track your skin condition changes over time and adjust care routine accordingly."
                  : "追踪记录肤色状态变化，相应调整护理方案。"}
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
              <div className="text-4xl font-bold text-blue-600 mb-2">Vision</div>
              <div className="text-gray-700">
                {language === 'en' ? 'Core Analysis' : '核心分析'}
              </div>
              <p className="mt-2 text-sm text-gray-600">
                {language === 'en' ? 'Apple Vision Framework for precise detection' : 'Apple Vision框架实现精准检测'}
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">Swift</div>
              <div className="text-gray-700">
                {language === 'en' ? 'Native Development' : '原生开发'}
              </div>
              <p className="mt-2 text-sm text-gray-600">
                {language === 'en' ? 'High-performance iOS app' : '高性能iOS应用'}
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">ML</div>
              <div className="text-gray-700">
                {language === 'en' ? 'Smart Analysis' : '智能分析'}
              </div>
              <p className="mt-2 text-sm text-gray-600">
                {language === 'en' ? 'Advanced machine learning models' : '先进的机器学习模型'}
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
              <div className="text-3xl font-bold text-blue-600 mb-1">95%</div>
              <div className="text-sm text-gray-700">
                {language === 'en' ? 'Analysis Accuracy' : '分析准确率'}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {language === 'en' ? 'In standard lighting' : '标准光照条件下'}
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-600 mb-1">20k+</div>
              <div className="text-sm text-gray-700">
                {language === 'en' ? 'Active Users' : '活跃用户'}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {language === 'en' ? 'Monthly active users' : '月活跃用户'}
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-600 mb-1">100+</div>
              <div className="text-sm text-gray-700">
                {language === 'en' ? 'Skin Types' : '肤色类型'}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {language === 'en' ? 'Comprehensive analysis' : '全面分析覆盖'}
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-600 mb-1">4.7</div>
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
              ? "We're committed to advancing our AI technology to provide even more precise skin analysis and personalized recommendations. Our vision is to become the most trusted AI beauty consultant, helping everyone understand their skin better and make informed skincare choices. We're also exploring new features like seasonal skin condition tracking and integration with smart beauty devices."
              : "我们致力于提升AI技术，提供更精准的肤色分析和个性化建议。我们的愿景是成为最值得信赖的AI美容顾问，帮助每个人更好地了解自己的肤质并做出明智的护肤选择。我们也在探索新功能，如季节性肤质变化追踪和智能美容设备集成。"}
          </p>
        </section>
      </div>
    </ProjectLayout>
  );
};

export default ProjectThree;
