import { motion } from 'framer-motion';
import React from 'react';
import { Rounded } from 'shared/enums/Rounded';
import { Size } from 'shared/enums/Size';

interface MyFeatureCardProps {
  iconSize?: number;
  icon: JSX.Element;
  rounded?: Rounded;
  shadow?: Size;
  minimumHeight?: number;
  transition?: object;
  variants?: { onScreen: object; offScreen: object };
  children?: React.ReactNode;
}

const MyFeatureCard: React.FC<MyFeatureCardProps> = ({
  iconSize = 80,
  icon,
  rounded = Rounded.Medium,
  shadow = Size.Small,
  minimumHeight = 100,
  variants,
  transition,
  children,
}) => {
  return (
    <motion.div
      initial="offScreen"
      animate="onScreen"
      transition={transition}
      variants={variants}
      className="flex w-full flex-col items-center justify-center"
    >
      <div
        className={`${rounded} bg-surface dark:bg-blue-gray-900 shadow-${shadow} flex w-full flex-col items-center justify-center hover:cursor-pointer hover:shadow`}
        style={{ minHeight: minimumHeight }}
      >
        <div className="h-full w-full">{children}</div>
      </div>
      <div
        className={`absolute top-0 inline-flex  items-center justify-center rounded-full bg-primary text-4xl text-onPrimary dark:bg-secondary`}
        style={{
          height: iconSize,
          width: iconSize,
          marginTop: -iconSize / 2,
        }}
      >
        {icon}
      </div>
    </motion.div>
  );
};

export default MyFeatureCard;
