import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
  titleClassName?: string;
}

const Section = ({ title, children, id, className = '', titleClassName = 'text-3xl sm:text-4xl font-bold text-gray-900 mb-12' }: SectionProps) => {
  return (
    <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={titleClassName}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;