import { motion } from 'framer-motion';
import { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MyTransition } from 'shared/animations/MyTransition';
import { MyVariants } from 'shared/animations/animate/MyVariants';
import Loading from 'shared/components/Loading';
import {
  PageTitleContext,
  PageTitleContextType,
} from 'shared/context/PageTitleContext';
import useQuery from 'shared/hooks/useQuery';
import { IResponseModel } from 'shared/interfaces/IResponseModel';
import { IStaff } from 'shared/interfaces/IStaff';

export default function Leaders() {
  const location = useLocation();
  const urlArrays = location.pathname.split('/');

  const { data, loading, executeQuery } = useQuery<IResponseModel<IStaff[]>>();

  useEffect(() => {
    executeQuery(
      process.env.REACT_APP_BASE_URL +
        '/api/staffs/staff-type/' +
        (urlArrays[2] ? urlArrays[2] : 'Office Bearer'),
      {}
    );
  }, []);

  const { setTitle } = useContext<PageTitleContextType>(PageTitleContext);
  setTitle(decodeURIComponent(urlArrays[2] ? urlArrays[2] : 'Office Bearer'));

  return (
    <motion.div transition={MyTransition.StaggerChildren.Slow}>
      <Loading isLoading={loading} />
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <div className="font-semibold uppercase text-secondary">
            LEADERSHIP
          </div>
          <div className="text-3xl font-extrabold text-primary dark:text-onPrimary">
            Who are leading us?
          </div>
          <div className="dark:text-onPrimary">
            The greatest leader is not necessarily the one who does the greatest
            things. He is the one that gets the people to do the greatest
            things. Our Leaders knows the way, goes the way, and shows the way.
          </div>
        </div>
        {data?.data && data?.data.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
            {data?.data.map((leader: IStaff, index: number) => {
              return (
                <motion.div
                  initial="offScreen"
                  animate="onScreen"
                  key={index}
                  variants={MyVariants.SlideInFromLeft}
                  transition={{
                    ...MyTransition.Spring.Low,
                    delay: index * 0.05,
                  }}
                  className="group my-2 rounded bg-surface py-6 px-6 shadow-sm hover:shadow dark:bg-blue-gray-900 dark:text-onPrimary"
                >
                  <div className="flex flex-col justify-center gap-4 md:flex-col lg:flex-row">
                    <div className="flex w-full items-center justify-center lg:w-1/3">
                      <img
                        className="h-48 w-48 rounded-full object-cover object-center transition-all duration-300 group-hover:scale-110"
                        src={leader.thumbnailAttachmentUrl}
                        alt="nature "
                      />
                    </div>
                    <div className="flex w-full flex-col justify-center lg:w-2/3">
                      <div className="">
                        <h4 className="text-xl font-bold text-primary dark:text-onPrimary">
                          {leader.name}
                        </h4>
                        <hr />
                        <span className="text-sm font-semibold">
                          {leader.position}
                        </span>
                        <p className="text-xs">{`${leader.staffType} | ${process.env.REACT_APP_COMPANY_NAME} | ${process.env.REACT_APP_COMPANY_ADDRESS}`}</p>
                        <div className="mt-2 flex gap-2">
                          <Link
                            to=""
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 dark:bg-secondary"
                          >
                            <i className="fa-brands fa-facebook"></i>
                          </Link>
                          <Link
                            to=""
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 dark:bg-secondary"
                          >
                            <i className="fa-brands fa-twitter"></i>
                          </Link>
                          <Link
                            to=""
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 dark:bg-secondary"
                          >
                            <i className="fa-brands fa-linkedin"></i>
                          </Link>
                          <Link
                            to=""
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 dark:bg-secondary"
                          >
                            <i className="fa-brands fa-skype"></i>
                          </Link>
                        </div>
                      </div>
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
                    <h1 className="text-2xl font-extrabold">Leaders</h1>
                    <p>Leaders not added. Please, stay connected.</p>
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
