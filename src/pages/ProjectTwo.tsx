import React from 'react';
import ProjectLayout from '../components/ProjectLayout';
import { useLanguage } from '../context/LanguageContext';

const ProjectTwo = () => {
  const { language } = useLanguage();
  return (
    <ProjectLayout
      title={{
        en: "AI Education - Personalized Learning Revolution",
        zh: "AI 教育 - 个性化学习革命"
      }}
      description={{
        en: "Empowering everyone to unlock their learning potential with AI",
        zh: "用 AI 赋能每个人解锁学习潜能"
      }}
      projectNumber={2}
    >
      <div className="space-y-12">
        {/* Vision Overview */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {language === 'en' ? 'Vision Overview' : '愿景概览'}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {language === 'en' 
              ? "In the AI era, education is undergoing a fundamental transformation. We believe that AI will unlock everyone's ability to learn freely, moving away from traditional one-size-fits-all education to truly personalized learning journeys. With AI as your personal tutor, you can learn anything you want, at your own pace, in your own way."
              : "在AI时代，教育正在经历根本性的转变。我们相信AI将解锁每个人自由学习的能力，从传统的统一化教育模式转向真正的个性化学习之旅。有了AI作为你的私人导师，你可以按照自己的节奏，用自己的方式，学习任何你想学习的内容。"}
          </p>
        </section>

        {/* Key Features */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {language === 'en' ? 'Key Features' : '核心特点'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {language === 'en' ? 'Personalized Learning Path' : '个性化学习路径'}
              </h3>
              <p className="text-gray-700">
                {language === 'en'
                  ? "AI analyzes your learning style, pace, and preferences to create a customized learning journey that adapts to your needs and progress."
                  : "AI分析你的学习风格、节奏和偏好，创建适应你的需求和进度的定制化学习旅程。"}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {language === 'en' ? 'Interactive Learning' : '互动学习'}
              </h3>
              <p className="text-gray-700">
                {language === 'en'
                  ? "Engage in dynamic conversations with AI tutors, receive instant feedback, and explore concepts through interactive exercises and real-world examples."
                  : "与AI导师进行动态对话，获得即时反馈，通过互动练习和真实案例探索概念。"}
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
              <div className="text-4xl font-bold text-blue-600 mb-2">LLM</div>
              <div className="text-gray-700">
                {language === 'en' ? 'Core AI Engine' : '核心AI引擎'}
              </div>
              <p className="mt-2 text-sm text-gray-600">
                {language === 'en' ? 'Advanced language model for natural interactions' : '自然交互的高级语言模型'}
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">RAG</div>
              <div className="text-gray-700">
                {language === 'en' ? 'Knowledge Base' : '知识库'}
              </div>
              <p className="mt-2 text-sm text-gray-600">
                {language === 'en' ? 'Retrieval-augmented generation for accurate learning' : '检索增强生成确保学习准确性'}
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">API</div>
              <div className="text-gray-700">
                {language === 'en' ? 'Integration Hub' : '集成中心'}
              </div>
              <p className="mt-2 text-sm text-gray-600">
                {language === 'en' ? 'Connected with various learning resources' : '连接多样化学习资源'}
              </p>
            </div>
          </div>
        </section>

        {/* Learning Statistics */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {language === 'en' ? 'Learning Impact' : '学习效果'}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-600 mb-1">85%</div>
              <div className="text-sm text-gray-700">
                {language === 'en' ? 'Learning Efficiency' : '学习效率'}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {language === 'en' ? 'Improvement vs traditional methods' : '相比传统方法的提升'}
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-600 mb-1">10k+</div>
              <div className="text-sm text-gray-700">
                {language === 'en' ? 'Active Users' : '活跃用户'}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {language === 'en' ? 'Learning with AI daily' : '每日使用AI学习'}
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-600 mb-1">100+</div>
              <div className="text-sm text-gray-700">
                {language === 'en' ? 'Subject Areas' : '学科领域'}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {language === 'en' ? 'Comprehensive coverage' : '全面的知识覆盖'}
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
              <div className="text-sm text-gray-700">
                {language === 'en' ? 'Availability' : '全天候服务'}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {language === 'en' ? 'Learn anytime, anywhere' : '随时随地学习'}
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
              ? "We envision a future where AI transforms education from a standardized system to a personalized journey of discovery. By leveraging AI's capabilities, we're not just making education more accessible - we're making it more effective, engaging, and tailored to each individual's needs. Our goal is to create a world where everyone has the power to learn anything, breaking down traditional barriers and unleashing human potential through technology."
              : "我们展望着AI将教育从标准化系统转变为个性化的探索之旅的未来。通过利用AI的能力，我们不仅让教育变得更容易获取，还让它变得更有效、更有吸引力，更适合每个人的需求。我们的目标是创造一个人人都能学习任何东西的世界，通过技术打破传统障碍，释放人类潜能。"}
          </p>
        </section>
      </div>
    </ProjectLayout>
  );
};

export default ProjectTwo;
