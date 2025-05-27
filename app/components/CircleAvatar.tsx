import Image from 'next/image';
import { motion } from 'framer-motion';

interface CircleAvatarProps {
  src: string;
  alt: string;
  size?: number;
  smSize?: number;
  mdSize?: number;
  lgSize?: number;
  positionX?: string | number;
  positionY?: string | number;
}

export default function CircleAvatar({ 
  src, 
  alt, 
  size = 120,
  smSize,
  mdSize,
  lgSize,
  positionX = '50%',
  positionY = '50%'
}: CircleAvatarProps) {
  return (
    <motion.div 
      className="relative rounded-full overflow-hidden border-4 border-blue-900 shadow-lg mb-6 mx-auto"
      style={{
        '--size': `${size}px`,
        '--sm-size': smSize ? `${smSize}px` : undefined,
        '--md-size': mdSize ? `${mdSize}px` : undefined,
        '--lg-size': lgSize ? `${lgSize}px` : undefined,
        width: 'var(--size)',
        height: 'var(--size)',
      } as React.CSSProperties}
      data-size={size}
      data-sm-size={smSize}
      data-md-size={mdSize}
      data-lg-size={lgSize}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Image 
        src={src} 
        alt={alt} 
        fill
        className="object-cover"
        style={{
          objectPosition: `${positionX} ${positionY}`
        }}
        sizes={`${size}px`}
        priority
      />
    </motion.div>
  );
}
