import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MyVariants } from 'shared/animations/animate/MyVariants';
import { MyTransition } from 'shared/animations/MyTransition';
import Loading from 'shared/components/Loading';
import MyFeatureCard from 'shared/components/MyFeatureCard';
import useQuery from 'shared/hooks/useQuery';
import { IPost } from 'shared/interfaces/IPost';
import { IResponseModel } from 'shared/interfaces/IResponseModel';

export default function Services() {
  const { data, loading, executeQuery } = useQuery<IResponseModel<IPost[]>>();

  useEffect(() => {
    executeQuery(
      process.env.REACT_APP_BASE_URL + '/api/public/our-services',
      {}
    );
  }, []);

  return (
    <>
      <Loading isLoading={loading} />
      <motion.div transition={MyTransition.StaggerChildren.Fast}>
        <section className="text-onSurface">
          <div className="container mx-auto">
            <div className="mb-20 text-center">
              <div className="font-semibold uppercase text-secondary">
                QUALITY OVER QUANTITY
              </div>
              <div className="text-3xl font-extrabold text-primary dark:text-onPrimary">
                Did we meet your expectations?
              </div>
              <div className="dark:text-onPrimary">
                We offer a wide range of services that cater to your specific
                needs and goals. Member satisfaction is our main priority.
              </div>
            </div>
            {data?.data && data?.data.length ? (
              <div className="grid grid-cols-1 gap-y-16 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
                {data?.data.map((service: IPost, index: number) => {
                  return (
                    <div className="group" key={index}>
                      <MyFeatureCard
                        icon={<i className="fa-solid fa-hands-holding"></i>}
                        minimumHeight={220}
                        variants={MyVariants.SlideInFromLeft}
                        transition={{
                          ...MyTransition.Spring.Low,
                          delay: index * 0.05,
                        }}
                      >
                        <Link
                          to={`${service.slug}`}
                          className="block divide-y px-6"
                        >
                          <h5 className="mb-1 text-lg font-semibold text-primary dark:text-onPrimary">
                            {service.title}
                          </h5>
                          <p className="flex flex-col items-center pt-1 text-sm dark:text-onPrimary">
                            {service.shortDescription}
                            <button className="mt-4 block hover:cursor-pointer group-hover:underline ">
                              Read More
                            </button>
                          </p>
                        </Link>
                      </MyFeatureCard>
                    </div>
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
                        <h1 className="text-2xl font-extrabold">Services</h1>
                        <p>Service not added. Please, stay connected.</p>
                      </div>
                    </div>
                  </div>
                </section>
              </motion.div>
            )}
          </div>
        </section>
      </motion.div>
    </>
  );
}
