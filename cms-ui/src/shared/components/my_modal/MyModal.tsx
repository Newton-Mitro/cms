import { motion } from 'framer-motion';
import { useContext } from 'react';
import ReactDOM from 'react-dom';
import { MyTransition } from 'shared/animations/MyTransition';
import {
  MyThemeContext,
  MyThemeContextType,
} from 'shared/context/ThemeContext';
import { Rounded } from 'shared/enums/Rounded';
import { Size } from 'shared/enums/Size';

interface MyModalProps {
  openDialogue: boolean;
  onClose: () => void;
  rounded?: Rounded;
  variants?: { onScreen: object; offScreen: object };
  transition?: object;
  size?: Size;
  children?: React.ReactNode;
}

const MyModal: React.FC<MyModalProps> = ({
  children,
  onClose,
  rounded = Rounded.Small,
  size = Size.Medium,
  variants,
  openDialogue,
}) => {
  const { darkMode } = useContext<MyThemeContextType>(MyThemeContext);
  return ReactDOM.createPortal(
    <motion.div transition={MyTransition.Spring.Low}>
      {openDialogue && (
        <div
          className={`fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center overflow-hidden
          ${darkMode === 'Dark' ? 'dark' : ''}
           bg-gray-900 bg-opacity-80 text-onSurface backdrop-blur-sm`}
        >
          <motion.div
            initial="offScreen"
            animate="onScreen"
            variants={variants}
            className={`w-full overflow-hidden bg-surface shadow-sm dark:bg-blue-gray-900
            ${rounded}
            
            ${size === Size.Small && 'md:w-5/12 lg:w-5/12 xl:w-5/12 2xl:w-5/12'}
            ${
              size === Size.Medium && 'md:w-8/12 lg:w-8/12 xl:w-8/12 2xl:w-8/12'
            }
            ${
              size === Size.Large &&
              'md:w-10/12 lg:w-10/12 xl:w-10/12 2xl:w-10/12'
            }`}
            style={{
              maxHeight: window.innerHeight - 60,
            }}
          >
            {children}
          </motion.div>
        </div>
      )}
    </motion.div>,
    document.getElementById('portal')!
  );
};

export default MyModal;
