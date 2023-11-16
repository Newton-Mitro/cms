import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MyTransition } from 'shared/animations/MyTransition';
import { MyVariants } from 'shared/animations/animate/MyVariants';
import Loading from 'shared/components/Loading';
import MyCard from 'shared/components/MyCard';
import { Rounded } from 'shared/enums/Rounded';
import { Size } from 'shared/enums/Size';
import useQuery from 'shared/hooks/useQuery';
import { IPost } from 'shared/interfaces/IPost';
import { IResponseModel } from 'shared/interfaces/IResponseModel';

export default function SavingDeposits() {
  const { data, loading, executeQuery } = useQuery<IResponseModel<IPost[]>>();

  useEffect(() => {
    executeQuery(
      process.env.REACT_APP_BASE_URL + '/api/public/deposit-products',
      {}
    );
  }, []);

  return (
    <motion.div transition={MyTransition.StaggerChildren.Slow}>
      <Loading isLoading={loading} />
      <div className="container mx-auto flex flex-col gap-6 text-left md:text-justify lg:text-justify">
        <div className="mb-10 text-center">
          <div className="font-semibold uppercase text-secondary">
            SECURE YOUR FUTURE
          </div>
          <div className="text-3xl font-extrabold text-primary dark:text-onPrimary">
            Worried about your future?
          </div>
          <div className="dark:text-onPrimary">
            We have a clear and ambitious vision for the future that is aligned
            with the trends and opportunities in our industry. Make secure
            investment with us.
          </div>
        </div>
        {data?.data && data?.data.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data?.data.map((savingDeposits: IPost, index: number) => {
              return (
                <MyCard
                  rounded={Rounded.Small}
                  key={index}
                  shadow={Size.Small}
                  variants={MyVariants.SlideInFromLeft}
                  transition={{
                    ...MyTransition.Spring.Low,
                    delay: index * 0.05,
                  }}
                >
                  <NavLink to={savingDeposits.slug} className="">
                    <div
                      className={`group flex flex-row items-center justify-center py-4 pr-8`}
                    >
                      <div className="flex w-1/5 flex-col items-center justify-center">
                        <i className="fa-solid fa-piggy-bank text-2xl text-primary dark:text-onPrimary"></i>
                      </div>
                      <div className="w-4/5 grow divide-y divide-blue-gray-50 text-left">
                        <p className="font-bold text-primary dark:text-onPrimary">
                          {savingDeposits.title}
                        </p>
                        <p className="pt-1 text-sm dark:text-onPrimary">
                          {savingDeposits.shortDescription}
                        </p>
                      </div>
                    </div>
                  </NavLink>
                </MyCard>
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
                    <h1 className="text-2xl font-extrabold">Saving Deposits</h1>
                    <p>Saving deposit not added. Please, stay connected.</p>
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
