import { motion } from 'framer-motion';

export default function Admin404Page() {
  return (
    <>
      <motion.div>
        <section className="flex h-[calc(100vh-112px)] flex-col items-center justify-center text-onSurface dark:bg-blue-gray-900 dark:text-white">
          <div className="text-center">
            <h1 className="text-9xl font-extrabold">404</h1>
            <p>Resource not found</p>
          </div>
        </section>
      </motion.div>
    </>
  );
}
