import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MyVariants } from 'shared/animations/animate/MyVariants';
import { MyTransition } from 'shared/animations/MyTransition';
import MyFeatureCard from 'shared/components/MyFeatureCard';

function OurProductSection() {
  return (
    <motion.div
      initial="offScreen"
      animate="onScreen"
      transition={MyTransition.StaggerChildren.Fast}
    >
      <section className="container mx-auto text-center text-onSurface">
        <div className="mb-20 text-center">
          <div className="font-semibold uppercase text-secondary">
            WHAT WE OFFER
          </div>
          <div className="text-3xl font-extrabold text-primary dark:text-onPrimary">
            Worried about financing?
          </div>
          <div className="dark:text-onPrimary">
            Saving and loan products can help you achieve your financial goals,
            such as buying a house, starting a business, paying for education,
            or meeting an emergency.
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 gap-x-6 md:grid-cols-2 ">
          <motion.div
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
          >
            <MyFeatureCard
              icon={
                <i className="fa-solid fa-piggy-bank  dark:text-onPrimary"></i>
              }
              minimumHeight={280}
            >
              <Link to="saving-deposits" className="block divide-y px-6">
                <h5 className="mb-1 font-bold text-primary dark:text-onPrimary">
                  Saving Deposits
                </h5>
                <p className="flex flex-col items-center pt-1 text-sm dark:text-onPrimary">
                  We have a clear and ambitious vision for the future that is
                  aligned with the trends and opportunities in our industry.
                  Make secure investment with us.
                  <button className="mt-4 block hover:cursor-pointer group-hover:underline dark:text-onPrimary">
                    View All
                  </button>
                </p>
              </Link>
            </MyFeatureCard>
          </motion.div>

          <motion.div
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
          >
            <MyFeatureCard
              icon={<i className="fa-solid fa-sack-dollar"></i>}
              minimumHeight={280}
            >
              <Link to="loans" className="block divide-y px-6">
                <h5 className="mb-1 font-bold text-primary dark:text-onPrimary">
                  Loans
                </h5>
                <p className="flex flex-col items-center pt-1 text-sm dark:text-onPrimary">
                  We offer flexible and versatile personal loans that can be
                  used for any purpose you want, such as debt consolidation,
                  home improvement, education, travel, and more.
                  <button className="mt-4 block hover:cursor-pointer group-hover:underline dark:text-onPrimary">
                    View All
                  </button>
                </p>
              </Link>
            </MyFeatureCard>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default OurProductSection;
