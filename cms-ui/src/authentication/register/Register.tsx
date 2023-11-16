import { motion } from 'framer-motion';

function Register() {
  return (
    <>
      <motion.div
        exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
      ></motion.div>
    </>
  );
}

export default Register;
