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

export default function LoanDetails() {
  const location = useLocation();
  const urlArrays = location.pathname.split('/');
  const slug = urlArrays[2];

  const { data, loading, executeQuery } = useQuery<IResponseModel<IPost>>();
  const { setTitle } = useContext<PageTitleContextType>(PageTitleContext);
  setTitle(data?.data?.title);

  useEffect(() => {
    executeQuery(
      process.env.REACT_APP_BASE_URL + '/api/loan-products/post-slug/' + slug,
      {}
    );
  }, []);

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
        <div className="bg-surface shadow-sm hover:shadow dark:bg-blue-gray-900">
          <div className="px-4 py-10 md:px-6 lg:py-20 lg:px-10">
            {data?.data?.thumbnailAttachmentUrl && (
              <img
                src={data?.data.thumbnailAttachmentUrl}
                alt=""
                className="float-left mr-6 mb-6 w-full md:w-full lg:w-1/3"
              />
            )}

            <div
              className="prose max-w-full text-justify dark:text-onPrimary dark:prose-headings:text-onPrimary"
              dangerouslySetInnerHTML={{
                __html: data?.data?.content ? data?.data.content : '',
              }}
            ></div>
            <div className="clear-both"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
