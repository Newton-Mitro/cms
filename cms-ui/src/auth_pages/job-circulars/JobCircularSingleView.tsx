import { motion } from 'framer-motion';
import moment from 'moment';
import React from 'react';
import { MyTransition } from 'shared/animations/MyTransition';
import { MyVariants } from 'shared/animations/animate/MyVariants';

interface JobCircularSingleViewProps {
  jobCircularInputState: any;
}

const JobCircularSingleView: React.FC<JobCircularSingleViewProps> = ({
  jobCircularInputState,
}) => {
  console.log(jobCircularInputState);

  return (
    <>
      <div
        className="w-full overflow-auto border-b bg-surface px-6 py-6 dark:bg-blue-gray-800 lg:px-20"
        style={{
          maxHeight: 'calc(100vh - 205px)',
        }}
      >
        <div className="">
          <motion.h2
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="text-3xl font-bold"
          >
            {jobCircularInputState?.jobPosition == null
              ? ''
              : jobCircularInputState?.jobPosition}
          </motion.h2>
          <div className="mb-4 flex flex-col gap-4 text-justify">
            {jobCircularInputState?.totalNumberVacancy == null ||
            jobCircularInputState?.totalNumberVacancy == null ? (
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
                  {jobCircularInputState?.totalNumberVacancy == null
                    ? ''
                    : jobCircularInputState?.totalNumberVacancy}
                </motion.p>
              </div>
            )}
            {jobCircularInputState?.jobContext === null ||
            jobCircularInputState?.jobContext === '' ? (
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
                      __html: jobCircularInputState?.jobContext!,
                    }}
                  />
                </motion.p>
              </div>
            )}

            {jobCircularInputState?.jobResponsibility === null ||
            jobCircularInputState?.jobResponsibility === '' ? (
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
                    __html: jobCircularInputState?.jobResponsibility!,
                  }}
                />
              </div>
            )}

            {jobCircularInputState?.employmentStatus == null ||
            jobCircularInputState?.employmentStatus === '' ? (
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
                  {jobCircularInputState?.employmentStatus}
                </motion.p>
              </div>
            )}

            {jobCircularInputState?.educationalRequirement === null ||
            jobCircularInputState?.educationalRequirement === '' ? (
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
                    __html: jobCircularInputState?.educationalRequirement!,
                  }}
                />
              </div>
            )}

            {jobCircularInputState?.experienceRequirements == null ||
            jobCircularInputState?.experienceRequirements === '' ? (
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
                    __html: jobCircularInputState?.experienceRequirements,
                  }}
                />
              </div>
            )}
            {jobCircularInputState?.religion === null ||
            jobCircularInputState?.religion === '' ? (
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
                  {jobCircularInputState?.religion}
                </motion.p>
              </div>
            )}

            {jobCircularInputState?.additionalRequirements === null ||
            jobCircularInputState?.additionalRequirements === '' ? (
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
                    __html: jobCircularInputState?.additionalRequirements!,
                  }}
                />
              </div>
            )}

            {jobCircularInputState?.age === null ||
            jobCircularInputState?.age === '' ? (
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
                  {jobCircularInputState?.age}
                </motion.p>
              </div>
            )}
            {jobCircularInputState?.gender === null ||
            jobCircularInputState?.gender === '' ? (
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
                  {jobCircularInputState?.gender}
                </motion.p>
              </div>
            )}
            {jobCircularInputState?.jobLocation === null ||
            jobCircularInputState?.jobLocation === '' ? (
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
                  {jobCircularInputState?.jobLocation}
                </motion.p>
              </div>
            )}

            {jobCircularInputState?.salary === null ||
            jobCircularInputState?.salary === '' ? (
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
                  {jobCircularInputState?.salary}
                </motion.p>
              </div>
            )}
            {jobCircularInputState?.compensationAndOtherBenefits === null ||
            jobCircularInputState?.compensationAndOtherBenefits === '' ? (
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
                    __html:
                      jobCircularInputState?.data
                        ?.compensationAndOtherBenefits!,
                  }}
                />
              </div>
            )}
            {jobCircularInputState?.applicationDeadline == null ? (
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
                  {moment(jobCircularInputState?.applicationDeadline).format(
                    'DD-MMM-YYYY'
                  )}
                </motion.p>
              </div>
            )}

            {jobCircularInputState?.publishedDate === null ||
            jobCircularInputState?.publishedDate === '' ? (
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
                  {moment(jobCircularInputState?.publishedDate).format(
                    'DD-MMM-YYYY'
                  )}
                </motion.p>
              </div>
            )}
            {jobCircularInputState?.applicationInstruction == null ? (
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
                    __html: jobCircularInputState?.applicationInstruction!,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCircularSingleView;
