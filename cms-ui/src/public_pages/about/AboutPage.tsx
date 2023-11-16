import { motion } from 'framer-motion';
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from 'shared/components/Loading';
import {
  PageTitleContext,
  PageTitleContextType,
} from 'shared/context/PageTitleContext';
import useQuery from 'shared/hooks/useQuery';
import { IPost } from 'shared/interfaces/IPost';
import { IResponseModel } from 'shared/interfaces/IResponseModel';

function AboutPage() {
  const location = useLocation();
  const urlArrays = location.pathname.split('/');
  const slug = urlArrays.length > 2 ? urlArrays[2] : urlArrays[1];

  const { setTitle } = useContext<PageTitleContextType>(PageTitleContext);

  const {
    data: page,
    loading,
    executeQuery,
  } = useQuery<IResponseModel<IPost>>();

  useEffect(() => {
    executeQuery(
      process.env.REACT_APP_BASE_URL + '/api/pages/post-slug/' + slug,
      {}
    );
  }, []);

  setTitle(page?.data?.title);

  return (
    <motion.div
      className=""
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
    >
      <div className="container mx-auto">
        <Loading isLoading={loading} />
        {page ? (
          <div className="bg-surface text-onSurface shadow-sm hover:shadow dark:bg-blue-gray-900 dark:text-onPrimary">
            <div className="px-4 py-10 md:px-6 lg:py-20 lg:px-10">
              {page?.data?.thumbnailAttachmentUrl && (
                <img
                  src={page?.data?.thumbnailAttachmentUrl}
                  alt=""
                  className="float-left mr-6 mb-6 w-full md:w-full lg:w-1/3"
                />
              )}

              <div
                className="prose max-w-full text-justify dark:text-onPrimary dark:prose-headings:text-onPrimary"
                dangerouslySetInnerHTML={{
                  __html: page?.data?.content ? page?.data?.content : '',
                }}
              ></div>
              <div className="clear-both"></div>
            </div>
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
            <section className="flex  flex-col items-center justify-center bg-background text-onSurface dark:bg-blue-gray-900 dark:text-onPrimary ">
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
      </div>
    </motion.div>
  );
}

export default AboutPage;
