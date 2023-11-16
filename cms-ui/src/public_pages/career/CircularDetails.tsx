import { motion } from 'framer-motion';
import moment from 'moment';
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MyTransition } from 'shared/animations/MyTransition';
import { MyVariants } from 'shared/animations/animate/MyVariants';
import Loading from 'shared/components/Loading';
import {
  PageTitleContext,
  PageTitleContextType,
} from 'shared/context/PageTitleContext';
import useQuery from 'shared/hooks/useQuery';
import { IJobCircular } from 'shared/interfaces/IJobCircular';
import { IResponseModel } from 'shared/interfaces/IResponseModel';

export default function CircularDetails() {
  const location = useLocation();
  const urlArrays = location.pathname.split('/');
  const slug = urlArrays[2];

  const { data, loading, executeQuery } =
    useQuery<IResponseModel<IJobCircular>>();
  const { setTitle } = useContext<PageTitleContextType>(PageTitleContext);
  setTitle(data?.data?.jobPosition);

  useEffect(() => {
    executeQuery(
      process.env.REACT_APP_BASE_URL + '/api/job-circulars/post-slug/' + slug,
      {}
    );
  }, []);

  return (
    <>
      <Loading isLoading={loading} />
      {data ? (
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
            x: -window.innerWidth,
          }}
          animate={{ x: 0, opacity: 1 }}
          className="container mx-auto text-left md:text-justify lg:text-justify"
        >
          <div className="bg-surface px-6 py-6 shadow-sm dark:bg-blue-gray-900 dark:text-onPrimary lg:px-20 lg:py-20">
            <motion.h2
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="text-3xl font-bold"
            >
              {data?.data?.jobPosition == null ? '' : data?.data?.jobPosition}
            </motion.h2>
            <div className="mb-4 flex flex-col gap-4 text-justify">
              {data?.data?.totalNumberVacancy == null ||
              data?.data?.totalNumberVacancy == null ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Vacancy
                  </motion.h4>
                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    {data?.data?.totalNumberVacancy == null
                      ? ''
                      : data?.data?.totalNumberVacancy}
                  </motion.p>
                </div>
              )}
              {data?.data?.jobContext === null ||
              data?.data?.jobContext === '' ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Job Context
                  </motion.h4>

                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    <div
                      className="prose max-w-full text-justify dark:text-onPrimary dark:prose-headings:text-onPrimary"
                      dangerouslySetInnerHTML={{
                        __html: data?.data?.jobContext!,
                      }}
                    />
                  </motion.p>
                </div>
              )}

              {data?.data?.jobResponsibility === null ||
              data?.data?.jobResponsibility === '' ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Job Responsibilities
                  </motion.h4>

                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="prose max-w-full text-justify dark:text-onPrimary dark:prose-headings:text-onPrimary"
                    dangerouslySetInnerHTML={{
                      __html: data?.data?.jobResponsibility!,
                    }}
                  />
                </div>
              )}

              {data?.data?.employmentStatus == null ||
              data?.data?.employmentStatus === '' ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Employment Status
                  </motion.h4>
                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    {data?.data?.employmentStatus}
                  </motion.p>
                </div>
              )}

              {data?.data?.educationalRequirement === null ||
              data?.data?.educationalRequirement === '' ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Educational Requirements
                  </motion.h4>

                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="prose max-w-full text-justify dark:text-onPrimary dark:prose-headings:text-onPrimary"
                    dangerouslySetInnerHTML={{
                      __html: data?.data?.educationalRequirement!,
                    }}
                  />
                </div>
              )}

              {data?.data?.experienceRequirements == null ||
              data?.data?.experienceRequirements === '' ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Experience Requirements
                  </motion.h4>
                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="prose max-w-full text-justify dark:text-onPrimary dark:prose-headings:text-onPrimary"
                    dangerouslySetInnerHTML={{
                      __html: data?.data?.experienceRequirements,
                    }}
                  />
                </div>
              )}
              {data?.data?.religion === null || data?.data?.religion === '' ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Religion
                  </motion.h4>

                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    {data?.data?.religion}
                  </motion.p>
                </div>
              )}

              {data?.data?.additionalRequirements === null ||
              data?.data?.additionalRequirements === '' ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Additional Requirements
                  </motion.h4>
                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="prose max-w-full text-justify dark:text-onPrimary dark:prose-headings:text-onPrimary"
                    dangerouslySetInnerHTML={{
                      __html: data?.data?.additionalRequirements!,
                    }}
                  />
                </div>
              )}

              {data?.data?.age === null || data?.data?.age === '' ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Age
                  </motion.h4>

                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    {data?.data?.age}
                  </motion.p>
                </div>
              )}
              {data?.data?.gender === null || data?.data?.gender === '' ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Gender
                  </motion.h4>

                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    {data?.data?.gender}
                  </motion.p>
                </div>
              )}
              {data?.data?.jobLocation === null ||
              data?.data?.jobLocation === '' ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Job Location
                  </motion.h4>
                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    {data?.data?.jobLocation}
                  </motion.p>
                </div>
              )}

              {data?.data?.salary === null || data?.data?.salary === '' ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Salary
                  </motion.h4>
                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    {data?.data?.salary}
                  </motion.p>
                </div>
              )}
              {data?.data?.compensationAndOtherBenefits === null ||
              data?.data?.compensationAndOtherBenefits === '' ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Compensation &amp; Other Benefits
                  </motion.h4>
                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="prose max-w-full text-justify dark:text-onPrimary dark:prose-headings:text-onPrimary"
                    dangerouslySetInnerHTML={{
                      __html: data?.data?.compensationAndOtherBenefits!,
                    }}
                  />
                </div>
              )}
              {data?.data?.applicationDeadline == null ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Application Deadline
                  </motion.h4>

                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    {moment(data?.data?.applicationDeadline).format(
                      'DD-MMM-YYYY'
                    )}
                  </motion.p>
                </div>
              )}

              {data?.data?.publishedDate === null ||
              data?.data?.publishedDate === '' ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Published On
                  </motion.h4>

                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    {moment(data?.data?.publishedDate).format('DD-MMM-YYYY')}
                  </motion.p>
                </div>
              )}
              {data?.data?.applicationInstruction == null ? (
                ''
              ) : (
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="font-bold"
                  >
                    Application Instruction
                  </motion.h4>

                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="prose max-w-full text-justify dark:text-onPrimary dark:prose-headings:text-onPrimary"
                    dangerouslySetInnerHTML={{
                      __html: data?.data?.applicationInstruction!,
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>
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
                  <h1 className="text-2xl font-extrabold">500</h1>
                  <p>Internal server error.</p>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      )}
    </>
  );
}
