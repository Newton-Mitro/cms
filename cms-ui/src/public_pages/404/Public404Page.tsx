import { motion } from 'framer-motion';

export default function Public404Page() {
  return (
    <>
      <motion.div
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
        }}
        exit={{
          opacity: 0,
          x: -window.innerWidth,
          transition: { duration: 0.3 },
        }}
        initial={{
          opacity: 0,
          x: window.innerWidth,
        }}
        animate={{ x: 0, opacity: 1 }}
      >
        <section className="flex  flex-col items-center justify-center bg-background text-onSurface">
          <div className="container mx-auto">
            <div className="bg-surface px-4 py-4 shadow-sm hover:cursor-pointer hover:shadow md:py-10 md:px-10 lg:py-28 lg:px-20">
              <div className="text-center">
                <h1 className="text-9xl font-extrabold">404</h1>
                <p>Resource not found</p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
