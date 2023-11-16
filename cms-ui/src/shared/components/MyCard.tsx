import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { Rounded } from 'shared/enums/Rounded';
import { Size } from 'shared/enums/Size';

interface MyCardProps {
  rounded?: Rounded;
  shadow?: Size;
  borderClass?: string;
  minimumHeight?: number;
  transition?: object;
  variants?: { onScreen: object; offScreen: object };
  children?: React.ReactNode;
}

const MyCard: FC<MyCardProps> = ({
  rounded,
  shadow,
  borderClass,
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
      className={`group ${borderClass} flex items-center gap-2 overflow-hidden bg-surface dark:bg-blue-gray-900 shadow-${shadow} hover:cursor-pointer hover:shadow ${rounded}`}
      style={{ minHeight: minimumHeight }}
    >
      {children}
    </motion.div>
  );
};

export default MyCard;
