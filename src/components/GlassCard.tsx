import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useThemeContext } from '../hooks/useTheme';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className = '' }: GlassCardProps) => {
  const { theme } = useThemeContext();

  // Adjust the text color and background color based on the theme
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const bgColor = theme === 'dark' ? 'bg-black/30' : 'bg-white/0';
  const borderColor = theme === 'dark' ? 'border-white/10' : 'border-purple-400/50';
  const blurEffect = theme === 'dark' ? 'backdrop-blur-xl' : 'backdrop-blur-md'; // Reduce blur in light mode

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative ${className}`}
    >
      <div 
        className={`absolute inset-0 ${theme === 'dark' 
          ? 'bg-gradient-to-br from-purple-600/20 to-purple-400/10' 
          : 'bg-gradient-to-br from-purple-300/40 to-purple-200/30'} 
        rounded-2xl blur-xl`} 
      />
      <div 
        className={`relative rounded-2xl border p-4 ${bgColor} ${borderColor} ${blurEffect}`}
      >
        <div className={textColor}>
          {children}
        </div>
      </div>
    </motion.div>
  );
};
