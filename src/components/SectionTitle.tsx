
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  alignment = 'center',
  className
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };
  
  return (
    <div className={cn(
      'max-w-2xl mb-16',
      alignmentClasses[alignment],
      className
    )}>
      <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-bitcoin uppercase bg-bitcoin/10 rounded-full">
        {subtitle}
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
