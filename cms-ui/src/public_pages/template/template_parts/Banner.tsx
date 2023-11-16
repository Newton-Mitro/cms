import noticesImage from 'assets/images/banner-images/bird_lake.jpg';
import contactImage from 'assets/images/banner-images/bok.jpg';
import managementsImage from 'assets/images/banner-images/dog.jpg';
import careerImage from 'assets/images/banner-images/holli.jpg';
import loansImage from 'assets/images/banner-images/house_loan.jpg';
import serviceImage from 'assets/images/banner-images/investment_1.jpg';
import savingDepositsImage from 'assets/images/banner-images/piggi.jpg';
import aboutImage from 'assets/images/banner-images/sun_set.jpg';
import { AnimatePresence, motion } from 'framer-motion';
import Breadcrumb from 'public_pages/template/template_parts/Breadcrumb';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface BannerProps {}

const Banner: React.FC<BannerProps> = ({}) => {
  const location = useLocation();
  const urlArrays = decodeURIComponent(location.pathname)
    .replace(/[_-]/g, ' ')
    .split('/');
  const [bannerImage, setBannerImage] = useState(aboutImage);

  useEffect(() => {
    if (urlArrays[1] === 'about') {
      setBannerImage(aboutImage);
    }
    if (urlArrays[1] === 'services') {
      setBannerImage(serviceImage);
    }

    if (urlArrays[1] === 'contact') {
      setBannerImage(contactImage);
    }

    if (urlArrays[1] === 'notices') {
      setBannerImage(noticesImage);
    }

    if (urlArrays[1] === 'career') {
      setBannerImage(careerImage);
    }

    if (urlArrays[1] === 'saving-deposits') {
      setBannerImage(savingDepositsImage);
    }

    if (urlArrays[1] === 'loans') {
      setBannerImage(loansImage);
    }

    if (urlArrays[1] === 'managements') {
      setBannerImage(managementsImage);
    }
  }, [urlArrays]);

  return (
    <AnimatePresence>
      <motion.div className="">
        <div className="relative h-48">
          <div
            style={{ backgroundImage: `url(${bannerImage})` }}
            className="h-full bg-cover bg-center bg-no-repeat"
          >
            <div className="absolute inset-0 h-full w-full overflow-hidden bg-black/75 bg-fixed">
              <div className="h-full text-gray-300">
                <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                  <motion.div
                    className="text-2xl font-bold md:text-3xl lg:text-4xl"
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
                    {urlArrays[1].toUpperCase()}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <Breadcrumb urlSegments={urlArrays} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Banner;
