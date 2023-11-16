import { Carousel } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import Loading from 'shared/components/Loading';
import {
  SettingContext,
  SettingContextType,
} from 'shared/context/SettingContext';
import useQuery from 'shared/hooks/useQuery';
import { IPost } from 'shared/interfaces/IPost';
import { IResponseModel } from 'shared/interfaces/IResponseModel';

export default function Gallery() {
  const { data, loading, executeQuery } = useQuery<IResponseModel<IPost[]>>();
  const { setting } = React.useContext(SettingContext) as SettingContextType;

  useEffect(() => {
    executeQuery(
      process.env.REACT_APP_BASE_URL + '/api/public/gallery-images',
      {}
    );
  }, []);

  return (
    <div className="">
      <Loading isLoading={loading} />
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <div className="font-semibold uppercase text-secondary">
            WORLD CLASS ENVIRONMENT
          </div>
          <div className="text-3xl font-extrabold text-primary dark:text-onPrimary">
            Do you curious, how and where we work?
          </div>
          <div className="dark:text-onPrimary">
            We have a collaborative and supportive culture that encourages
            teamwork, innovation, and learning. You can work with talented and
            diverse colleagues who share your passion and vision.
          </div>
        </div>
      </div>
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
        {data?.data && data?.data.length > 0 && (
          <div className="container mx-auto">
            <div className="" style={{ height: window.innerHeight - 360 }}>
              <Carousel className="" autoplayDelay={5000} loop={true}>
                {data?.data.map((galleryImage: IPost, index: number) => {
                  return (
                    <div className="relative h-full w-full" key={index}>
                      <img
                        src={galleryImage.landscapeAttachmentUrl}
                        alt="birdInLakeImage"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/10"></div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        )}

        <div className="container mx-auto mt-20 ">
          <h2 className="mb-10 text-center text-3xl font-bold dark:text-gray-200">
            Featured Video
          </h2>
          <iframe
            className="aspect-video w-full"
            src={`${setting?.featuredVideoUrl}&show_text=false&width=560&t=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}
