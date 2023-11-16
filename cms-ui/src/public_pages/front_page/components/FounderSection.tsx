import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MyTransition } from 'shared/animations/MyTransition';
import { MyVariants } from 'shared/animations/animate/MyVariants';
import Loading from 'shared/components/Loading';
import useQuery from 'shared/hooks/useQuery';
import { IPost } from 'shared/interfaces/IPost';
import { IResponseModel } from 'shared/interfaces/IResponseModel';

function FounderSection() {
  const {
    data: creditFounder,
    loading: creditFounderLoading,
    executeQuery: executeCreditFounderQuery,
  } = useQuery<IResponseModel<IPost>>();

  const {
    data: nagariCreditFounder,
    loading: nagariCreditFounderLoading,
    executeQuery: executeNagoriFounderQuery,
  } = useQuery<IResponseModel<IPost>>();

  useEffect(() => {
    executeCreditFounderQuery(
      process.env.REACT_APP_BASE_URL +
        '/api/pages/post-slug/the-pioneer-of-the-credit-union',
      {}
    );

    executeNagoriFounderQuery(
      process.env.REACT_APP_BASE_URL +
        '/api/pages/post-slug/founder-of-bangle-credit',
      {}
    );
  }, []);

  return (
    <>
      <motion.div transition={MyTransition.StaggerChildren.Slow}>
        <Loading
          isLoading={creditFounderLoading || nagariCreditFounderLoading}
        />
        {creditFounder && (
          <div className="container mx-auto mb-20">
            <div className="mb-10 text-center">
              <div className="font-semibold uppercase text-secondary">
                WHO WE ARE
              </div>
              <div className="text-3xl font-extrabold text-primary dark:text-onPrimary">
                History of Bangle Credit
              </div>
              <div className="dark:text-onPrimary">
                Visionaries are people who have the ability to imagine and plan
                for the future in a creative and innovative way. They often have
                a strong vision of how things could be better or different, and
                they inspire others to follow their lead.
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2">
              <motion.div
                initial="offScreen"
                animate="onScreen"
                variants={MyVariants.SlideInFromLeft}
                transition={{
                  ...MyTransition.Spring.Low,
                  delay: 1 * 0.05,
                }}
                className="group rounded bg-surface p-6 shadow-sm hover:shadow dark:bg-blue-gray-900 md:p-10"
              >
                <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                  <div className="w-full lg:w-2/5">
                    <img
                      className="transition-all duration-300 group-hover:scale-110"
                      src={creditFounder?.data?.thumbnailAttachmentUrl}
                      alt="nature "
                    />
                  </div>
                  <div className="w-full lg:w-3/5">
                    <h4 className="text-xl font-bold text-primary dark:text-onPrimary">
                      {creditFounder?.data?.title}
                    </h4>
                    <hr />
                    <span className="text-sm dark:text-onPrimary">
                      {creditFounder?.data?.shortDescription}
                    </span>

                    <div className="mt-2 flex gap-2">
                      <Link
                        to={`about/${creditFounder?.data?.slug}`}
                        className="text-sm group-hover:underline dark:text-onPrimary"
                      >
                        Continue reading ...
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="offScreen"
                animate="onScreen"
                variants={MyVariants.SlideInFromLeft}
                transition={{
                  ...MyTransition.Spring.Low,
                  delay: 1 * 0.05,
                }}
                className="group rounded bg-surface p-6 shadow-sm hover:shadow dark:bg-blue-gray-900 md:p-10"
              >
                <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                  <div className="w-full text-right lg:w-3/5">
                    <h4 className="text-xl font-bold text-primary dark:text-onPrimary">
                      {nagariCreditFounder?.data?.title}
                    </h4>
                    <hr />
                    <span className="text-sm dark:text-onPrimary">
                      {nagariCreditFounder?.data?.shortDescription}
                    </span>

                    <div className="mt-2 flex items-end justify-end gap-2">
                      <Link
                        to={`about/${nagariCreditFounder?.data?.slug}`}
                        className="text-sm group-hover:underline dark:text-onPrimary"
                      >
                        Continue reading ...
                      </Link>
                    </div>
                  </div>

                  <div className="w-full lg:w-2/5">
                    <img
                      className="transition-all duration-300 group-hover:scale-110"
                      src={nagariCreditFounder?.data?.thumbnailAttachmentUrl}
                      alt="nature "
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}

export default FounderSection;
