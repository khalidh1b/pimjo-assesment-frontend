import { AlertTriangle } from 'lucide-react';

interface DialogIconProps {
  icon?: 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
};

const iconConfig = {
  warning: {
    component: AlertTriangle,
    bgClass: 'bg-red-100',
    textClass: 'text-red-600',
  },
  error: {
    component: AlertTriangle,
    bgClass: 'bg-red-100',
    textClass: 'text-red-600',
  },
  info: {
    component: AlertTriangle,
    bgClass: 'bg-blue-100',
    textClass: 'text-blue-600',
  },
};

const sizeConfig = {
  sm: {
    container: 'w-12 h-12',
    icon: 'w-6 h-6',
  },
  md: {
    container: 'w-16 h-16',
    icon: 'w-8 h-8',
  },
  lg: {
    container: 'w-20 h-20',
    icon: 'w-10 h-10',
  },
};

export const DialogIcon = ({ icon = 'warning', size = 'md' }: DialogIconProps) => {
  const config = iconConfig[icon];
  const sizeClasses = sizeConfig[size];
  const IconComponent = config.component;

  return (
    <div className="flex justify-center mb-6 pt-2">
      <div className={`${sizeClasses.container} ${config.bgClass} rounded-full flex items-center justify-center`}>
        <IconComponent className={`${sizeClasses.icon} ${config.textClass}`} />
      </div>
    </div>
  );
};