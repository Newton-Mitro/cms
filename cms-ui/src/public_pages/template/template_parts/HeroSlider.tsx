import { Carousel } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useQuery from 'shared/hooks/useQuery';
import { IPost } from 'shared/interfaces/IPost';
import { IResponseModel } from 'shared/interfaces/IResponseModel';

interface HeroSliderProps {}

const HeroSlider: React.FC<HeroSliderProps> = ({}) => {
  const { data, loading, error, executeQuery } =
    useQuery<IResponseModel<IPost[]>>();

  useEffect(() => {
    executeQuery(
      process.env.REACT_APP_BASE_URL + '/api/public/slider-images',
      {}
    );
  }, []);

  return (
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
    >
      {data?.data && data.data.length > 0 && (
        <div className="h-auto md:h-[calc(100vh-120px)] lg:h-[calc(100vh-120px)]">
          <Carousel
            className=""
            autoplay={true}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-0 flex -translate-x-2/4 gap-2">
                {new Array(length).fill('').map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
            autoplayDelay={8000}
            loop={true}
          >
            {data?.data.map((slide: IPost, index: number) => {
              return (
                <div className="relative h-full w-full" key={index}>
                  <img
                    src={slide.landscapeAttachmentUrl}
                    alt="birdInLakeImage"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4">
                      <div className="mb-4 text-2xl font-extrabold text-white md:text-4xl lg:text-5xl">
                        {slide.title}
                      </div>
                      <p className="mb-12 text-sm text-white md:text-base lg:text-xl">
                        {slide.shortDescription}
                      </p>
                      <div className="flex justify-center gap-6">
                        <Link
                          to="saving-deposits"
                          className="w-32 rounded-md bg-secondary px-4 py-2 font-bold text-onPrimary shadow-sm hover:scale-110 hover:bg-secondaryVariant hover:shadow md:w-48 md:px-6 md:py-4 md:font-extrabold"
                        >
                          Savings
                        </Link>
                        <Link
                          to="loans"
                          className="w-32 rounded-md border-2 border-secondary px-4 py-2 font-bold text-onPrimary shadow-sm hover:scale-110 hover:bg-secondaryVariant hover:shadow md:w-48 md:px-6 md:py-4 md:font-extrabold"
                        >
                          Loans
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      )}
    </motion.div>
  );
};

export default HeroSlider;
