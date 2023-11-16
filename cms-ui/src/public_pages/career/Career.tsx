import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MyTransition } from 'shared/animations/MyTransition';
import { MyVariants } from 'shared/animations/animate/MyVariants';
import Loading from 'shared/components/Loading';
import MyEventCard from 'shared/components/MyEventCard';
import { Rounded } from 'shared/enums/Rounded';
import { Size } from 'shared/enums/Size';
import useQuery from 'shared/hooks/useQuery';
import { IJobCircular } from 'shared/interfaces/IJobCircular';
import { IResponseModel } from 'shared/interfaces/IResponseModel';

export default function Career() {
  const { data, loading, executeQuery } =
    useQuery<IResponseModel<IJobCircular[]>>();

  useEffect(() => {
    executeQuery(
      process.env.REACT_APP_BASE_URL + '/api/public/job-circulars',
      {}
    );
  }, []);

  return (
    <motion.div transition={MyTransition.StaggerChildren.Slow}>
      <Loading isLoading={loading} />
      <div className="container mx-auto flex flex-col gap-6 text-left md:text-justify lg:text-justify">
        <div className="mb-10 text-center">
          <div className="font-semibold uppercase text-secondary">
            {' '}
            COME JOIN US{' '}
          </div>
          <div className="text-3xl font-extrabold text-primary dark:text-onPrimary">
            Do you want to be part of our family?
          </div>
          <div className="dark:text-onPrimary">
            We have a collaborative and supportive culture that encourages
            teamwork, innovation, and learning. You can work with talented and
            diverse colleagues who share your passion and vision. We’re always
            looking for creative, talented self-starters to join the Nagari
            Credit family. Check out our open roles below and fill out an
            application.
          </div>
        </div>
        {data?.data && data?.data.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data?.data.map((circular: IJobCircular, index: number) => {
              return (
                <MyEventCard
                  key={index}
                  eventDate={circular.applicationDeadline}
                  rounded={Rounded.Small}
                  shadow={Size.Small}
                  variants={MyVariants.SlideInFromLeft}
                  transition={{
                    ...MyTransition.Spring.Low,
                    delay: index * 0.05,
                  }}
                >
                  <NavLink to={circular.slug} className="">
                    <div className="divide-y divide-blue-gray-100">
                      <h5 className="font-semibold text-primary dark:text-onPrimary">
                        {circular.jobPosition}
                      </h5>
                      <div className="pt-1 text-sm font-light dark:text-onPrimary">
                        <p>{circular.experienceRequirements}</p>
                        <p>{circular.educationalRequirement}</p>
                      </div>
                    </div>
                  </NavLink>
                </MyEventCard>
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
                    <h1 className="text-2xl font-extrabold">Job Circulars</h1>
                    <p>
                      No job circulars at this moment. Please, stay connected.
                    </p>
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
