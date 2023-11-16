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

function ServiceSection() {
  const { data, loading, executeQuery } = useQuery<IResponseModel<IPost[]>>();

  useEffect(() => {
    executeQuery(
      process.env.REACT_APP_BASE_URL + '/api/public/our-services',
      {}
    );
  }, []);

  return (
    <motion.div
      initial="offScreen"
      animate="onScreen"
      transition={MyTransition.StaggerChildren.Fast}
    >
      <Loading isLoading={loading} />
      {data?.data && data.data.length > 0 && (
        <section className="container mx-auto mb-20 text-center text-onSurface">
          <div className="mb-20 text-center">
            <div className="font-semibold uppercase text-secondary">
              SERVICES
            </div>
            <div className="text-3xl font-extrabold text-primary dark:text-onPrimary">
              Did we meet your expectations?
            </div>
            <div className=" dark:text-onPrimary">
              We offer a wide range of services that cater to your specific
              needs and goals. Member satisfaction is our main priority.
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
            {data.data &&
              data?.data.map((service: any, index: number) => {
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
                        to={`services/${service.slug}`}
                        className="block divide-y px-6"
                      >
                        <h5 className="mb-1 font-bold text-primary dark:text-onPrimary">
                          {service.title}
                        </h5>
                        <p className="flex flex-col items-center pt-1 text-sm dark:text-onPrimary">
                          {service.shortDescription}
                          <button className="mt-4 block hover:cursor-pointer group-hover:underline">
                            Read More
                          </button>
                        </p>
                      </Link>
                    </MyFeatureCard>
                  </div>
                );
              })}
          </div>
        </section>
      )}
    </motion.div>
  );
}

export default ServiceSection;
