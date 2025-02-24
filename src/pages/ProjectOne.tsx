import React from 'react';
import ProjectLayout from '../components/ProjectLayout';
import { useLanguage } from '../context/LanguageContext';

const ProjectOne = () => {
  const { language } = useLanguage();
  return (
    <ProjectLayout
      title={{
        en: "AdventureX - China's First Youth Hackathon",
        zh: "AdventureX - 中国年轻人第一场黑客松"
      }}
      description={{
        en: "A revolutionary hackathon empowering China's next generation of innovators",
        zh: "一场赋能中国下一代创新者的革命性黑客松"
      }}
      projectNumber={1}
    >
      <div className="space-y-12">
        {/* Event Overview */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {language === 'en' ? 'Event Overview' : '活动概览'}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {language === 'en' 
              ? "AdventureX is China's first youth-focused hackathon, designed specifically for innovators under 26. Breaking away from traditional hackathon formats, we've created an immersive 5-day experience that combines intensive development with mentorship, workshops, and networking opportunities. Our mission is to empower China's next generation of tech talents and foster a vibrant innovation ecosystem."
              : "AdventureX 是中国首个专注于年轻人的黑客松，专为26岁以下的创新者打造。打破传统黑客松的形式，我们创造了一个为期5天的沉浸式体验，将高强度开发与导师指导、工作坊和社交机会相结合。我们的使命是赋能中国下一代科技人才，培育充满活力的创新生态系统。"}
          </p>
        </section>

        {/* Event Highlights */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {language === 'en' ? 'Event Highlights' : '活动亮点'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {language === 'en' ? 'Youth-Focused Innovation' : '青年创新'}
              </h3>
              <p className="text-gray-700">
                {language === 'en'
                  ? "Exclusively for innovators under 26, creating a unique environment where young talents can freely express their ideas and collaborate with peers."
                  : "专为26岁以下的创新者打造，创造一个独特的环境，让年轻人才能自由表达想法并与同龄人合作。"}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {language === 'en' ? 'Comprehensive Support' : '全方位支持'}
              </h3>
              <p className="text-gray-700">
                {language === 'en'
                  ? "Beyond just coding, we provide mentorship from industry experts, technical workshops, and networking sessions to help participants grow."
                  : "不仅仅是编程，我们还提供行业专家指导、技术工作坊和社交活动，帮助参与者全面成长。"}
              </p>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {language === 'en' ? 'Event Details' : '活动细节'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-gray-700">
                {language === 'en' ? 'Days Duration' : '活动天数'}
              </div>
              <p className="mt-2 text-sm text-gray-600">
                {language === 'en' ? 'Full immersive experience' : '全沉浸式体验'}
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">72h</div>
              <div className="text-gray-700">
                {language === 'en' ? 'Hacking Time' : '编程时间'}
              </div>
              <p className="mt-2 text-sm text-gray-600">
                {language === 'en' ? 'Intensive development' : '高强度开发'}
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">¥50k</div>
              <div className="text-gray-700">
                {language === 'en' ? 'Prize Pool' : '奖金池'}
              </div>
              <p className="mt-2 text-sm text-gray-600">
                {language === 'en' ? 'Rewards for innovation' : '创新奖励'}
              </p>
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {language === 'en' ? 'Event Schedule' : '活动日程'}
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>• {language === 'en' ? 'Day 1: Opening ceremony & Team formation' : '第一天：开幕式与组队'}</li>
                <li>• {language === 'en' ? 'Day 2-4: 72-hour hackathon' : '第2-4天：72小时黑客松'}</li>
                <li>• {language === 'en' ? 'Day 5: Project presentation & Awards' : '第五天：项目展示与颁奖'}</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {language === 'en' ? 'Resources Provided' : '提供资源'}
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>• {language === 'en' ? 'Technical mentorship from industry experts' : '行业专家技术指导'}</li>
                <li>• {language === 'en' ? 'Development tools and API access' : '开发工具和API访问'}</li>
                <li>• {language === 'en' ? 'Meals and accommodation' : '餐饮和住宿'}</li>
              </ul>
            </div>
          </div>

          {/* Participant Statistics */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              {language === 'en' ? 'Participant Statistics' : '参与者数据'}
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">200+</div>
                <div className="text-sm text-gray-700">
                  {language === 'en' ? 'Participants' : '参与者'}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {language === 'en' ? 'From 50+ universities' : '来自50+所高校'}
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">40+</div>
                <div className="text-sm text-gray-700">
                  {language === 'en' ? 'Teams' : '参赛团队'}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {language === 'en' ? 'Cross-disciplinary collaboration' : '跨学科合作'}
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
                <div className="text-sm text-gray-700">
                  {language === 'en' ? 'Mentors' : '导师团队'}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {language === 'en' ? 'Industry experts' : '行业专家'}
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">30+</div>
                <div className="text-sm text-gray-700">
                  {language === 'en' ? 'Projects' : '创新项目'}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {language === 'en' ? 'Cutting-edge solutions' : '前沿解决方案'}
                </div>
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
              ? "AdventureX is more than just a hackathon - it's a movement to revolutionize how young Chinese innovators approach technology and entrepreneurship. We're building a sustainable ecosystem where creativity thrives, connections are forged, and the next generation of tech leaders emerges. Our vision extends beyond the event itself, as we aim to establish a nationwide network of young innovators who will shape China's technological future."
              : "AdventureX 不仅仅是一场黑客松，更是一场革新中国年轻创新者对待技术和创业方式的运动。我们正在建立一个可持续发展的生态系统，在这里创造力蓬勃发展，人脉纽带不断形成，下一代科技领袖不断涌现。我们的愿景超越活动本身，致力于建立一个全国性的年轻创新者网络，他们将塑造中国的科技未来。"}
          </p>
        </section>
      </div>
    </ProjectLayout>
  );
};

export default ProjectOne;
