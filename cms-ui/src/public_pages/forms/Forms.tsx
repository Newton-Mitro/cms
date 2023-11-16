import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { MyTransition } from 'shared/animations/MyTransition';
import { MyVariants } from 'shared/animations/animate/MyVariants';
import Loading from 'shared/components/Loading';
import useQuery from 'shared/hooks/useQuery';
import { IDocumentPost } from 'shared/interfaces/IDocumentPost';
import { IResponseModel } from 'shared/interfaces/IResponseModel';

export default function Forms() {
  const { data, loading, executeQuery } =
    useQuery<IResponseModel<IDocumentPost[]>>();

  useEffect(() => {
    executeQuery(
      process.env.REACT_APP_BASE_URL + '/api/public/document-posts',
      {}
    );
  }, []);

  return (
    <motion.div transition={MyTransition.StaggerChildren.Slow}>
      <Loading isLoading={loading} />
      <div className="container mx-auto flex flex-col gap-6 text-left md:text-justify lg:text-justify">
        <div className="mb-10 text-center">
          <div className="font-semibold uppercase text-secondary">
            VARIOUS FORMS
          </div>
          <div className="text-3xl font-extrabold text-primary dark:text-onPrimary">
            How to apply?
          </div>
          <div className="dark:text-onPrimary">
            If you are looking for account opening and loan application forms
            from financial institutions, you can use and download them.
          </div>
        </div>
        {data?.data && data?.data.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {data?.data.map((form: IDocumentPost, index: number) => {
              return (
                <motion.div
                  initial="offScreen"
                  key={index}
                  animate="onScreen"
                  className="group flex gap-4 divide-x rounded bg-surface py-4 px-6 text-onSurface shadow-sm hover:cursor-pointer hover:shadow dark:bg-blue-gray-900"
                  variants={MyVariants.SlideInFromLeft}
                  transition={{
                    ...MyTransition.Spring.Low,
                    delay: index * 0.05,
                  }}
                >
                  <div className="flex items-center justify-center">
                    <i className="fa-solid fa-file-pdf text-3xl text-primary dark:text-onPrimary"></i>
                  </div>
                  <div className="divide-y px-4">
                    <div className="">
                      <p className="font-bold text-primary dark:text-onPrimary">
                        {form.title}
                      </p>
                    </div>
                    <div className="pt-1 text-xs group-hover:cursor-pointer">
                      <a
                        download
                        href={form.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-light hover:underline dark:text-onPrimary"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
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
                    <h1 className="text-2xl font-extrabold">Forms</h1>
                    <p>Forms not added. Please, stay connected.</p>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
