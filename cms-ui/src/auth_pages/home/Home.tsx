import { motion } from 'framer-motion';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from 'shared/components/Loading';
import AuthUserContext, {
  AuthUserContextType,
} from 'shared/context/AuthUserContext';
import useQuery from 'shared/hooks/useQuery';
import { IResponseModel } from 'shared/interfaces/IResponseModel';

export function Home() {
  const { authUser } = useContext<AuthUserContextType>(AuthUserContext);

  const { loading, data, executeQuery } = useQuery<IResponseModel<any>>();

  console.log(data);

  const HEADERS = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${authUser?.access_token}`,
    },
  };

  useEffect(() => {
    executeQuery(
      `${process.env.REACT_APP_BASE_URL}/api/auth/dashboard`,
      HEADERS
    );
  }, []);

  return (
    <div>
      <Loading isLoading={loading} />
      <motion.div
        initial={{ opacity: 1, x: '100vw', skewX: '-30deg' }}
        animate={{
          x: 0,
          y: 0,
          skewX: '0deg',
          opacity: 1,
          transition: { velocity: 10 },
        }}
        className="p-2"
      >
        <div className="pb-2">
          <div className="text-2xl font-bold text-onSurface dark:text-white">
            Dashboard
          </div>
        </div>
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Link
            to={'/auth/pages'}
            className="flex items-center rounded-lg bg-white p-6 shadow-sm hover:cursor-pointer hover:shadow dark:bg-blue-gray-900"
          >
            <div className="mx-6 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <i className="fa-brands fa-page4 text-xl"></i>
            </div>
            <div>
              <div className="-mb-1 text-xl font-bold">Pages</div>
              <div className="-mt-1 text-sm text-gray-500">
                <span className="text-green-900 dark:text-green-600">
                  {data?.data?.publishedPages} Published
                </span>
                <span> & </span>
                <span className="text-orange-500">
                  {data?.data?.draftPages} Draft.
                </span>
              </div>
            </div>
          </Link>

          <Link
            to={'/auth/Notices'}
            className="flex items-center rounded-lg bg-white p-6 shadow-sm hover:cursor-pointer hover:shadow dark:bg-blue-gray-900"
          >
            <div className="mx-6 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <i className="fa-solid fa-bullhorn text-xl"></i>
            </div>
            <div>
              <div className="-mb-1 text-xl font-bold">Notices</div>
              <div className="-mt-1 text-sm text-gray-500">
                <span className="text-green-900 dark:text-green-600">
                  {data?.data?.publishedNotices} Published
                </span>
                <span> & </span>
                <span className="text-orange-500">
                  {data?.data?.draftNotices} Draft.
                </span>
              </div>
            </div>
          </Link>

          <Link
            to={'/auth/downloads'}
            className="flex items-center rounded-lg bg-white p-6 shadow-sm hover:cursor-pointer hover:shadow dark:bg-blue-gray-900"
          >
            <div className="mx-6 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <i className="fa-solid fa-file-pdf text-xl"></i>
            </div>
            <div>
              <div className="-mb-1 text-xl font-bold">Forms</div>
              <div className="-mt-1 text-sm text-gray-500">
                <span className="text-green-900 dark:text-green-600">
                  {data?.data?.publishedForms} Published
                </span>
                <span> & </span>
                <span className="text-orange-500">
                  {data?.data?.draftForms} Draft.
                </span>
              </div>
            </div>
          </Link>

          <Link
            to={'/auth/deposit-products'}
            className="flex items-center rounded-lg bg-white p-6 shadow-sm hover:cursor-pointer hover:shadow dark:bg-blue-gray-900"
          >
            <div className="mx-6 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <i className="fa-solid fa-piggy-bank text-xl"></i>
            </div>
            <div>
              <div className="-mb-1 text-xl font-bold">Saving Products</div>
              <div className="-mt-1 text-sm text-gray-500">
                <span className="text-green-900 dark:text-green-600">
                  {data?.data?.publishedSavingDeposits} Published
                </span>
                <span> & </span>
                <span className="text-orange-500">
                  {data?.data?.draftSavingDeposits} Draft.
                </span>
              </div>
            </div>
          </Link>

          <Link
            to={'/auth/loan-products'}
            className="flex items-center rounded-lg bg-white p-6 shadow-sm hover:cursor-pointer hover:shadow dark:bg-blue-gray-900"
          >
            <div className="mx-6 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <i className="fa-solid fa-sack-dollar text-xl"></i>
            </div>
            <div>
              <div className="-mb-1 text-xl font-bold">Loan Products</div>
              <div className="-mt-1 text-sm text-gray-500">
                <span className="text-green-900 dark:text-green-600">
                  {data?.data?.publishedLoanProducts} Published
                </span>
                <span> & </span>
                <span className="text-orange-500">
                  {data?.data?.draftLoanProducts} Draft.
                </span>
              </div>
            </div>
          </Link>

          <Link
            to={'/auth/leaders'}
            className="flex items-center rounded-lg bg-white p-6 shadow-sm hover:cursor-pointer hover:shadow dark:bg-blue-gray-900"
          >
            <div className="mx-6 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <i className="fa-solid fa-user-tie text-xl"></i>
            </div>
            <div>
              <div className="-mb-1 text-xl font-bold">Leaders</div>
              <div className="-mt-1 text-sm text-gray-500">
                <span className="text-green-900 dark:text-green-600">
                  {data?.data?.publishedLeaders} Published
                </span>
                <span> & </span>
                <span className="text-orange-500">
                  {data?.data?.draftLeaders} Draft.
                </span>
              </div>
            </div>
          </Link>

          <Link
            to={'/auth/gallery-images'}
            className="flex items-center rounded-lg bg-white p-6 shadow-sm hover:cursor-pointer hover:shadow dark:bg-blue-gray-900"
          >
            <div className="mx-6 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <i className="fa-regular fa-images text-xl"></i>
            </div>
            <div>
              <div className="-mb-1 text-xl font-bold">Gallery Images</div>
              <div className="-mt-1 text-sm text-gray-500">
                <span className="text-green-900 dark:text-green-600">
                  {data?.data?.publishedGalleryImages} Published
                </span>
                <span> & </span>
                <span className="text-orange-500">
                  {data?.data?.draftGalleryImages} Draft.
                </span>
              </div>
            </div>
          </Link>

          <Link
            to={'/auth/slider-images'}
            className="flex items-center rounded-lg bg-white p-6 shadow-sm hover:cursor-pointer hover:shadow dark:bg-blue-gray-900"
          >
            <div className="mx-6 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <i className="fa-solid fa-panorama text-xl"></i>
            </div>
            <div>
              <div className="-mb-1 text-xl font-bold">Slider Images</div>
              <div className="-mt-1 text-sm text-gray-500">
                <span className="text-green-900 dark:text-green-600">
                  {data?.data?.publishedSliderImages} Published
                </span>
                <span> & </span>
                <span className="text-orange-500">
                  {data?.data?.draftSliderImages} Draft,
                </span>
              </div>
            </div>
          </Link>

          <Link
            to={'/auth/our-services'}
            className="flex items-center rounded-lg bg-white p-6 shadow-sm hover:cursor-pointer hover:shadow dark:bg-blue-gray-900"
          >
            <div className="mx-6 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <i className="fa-solid fa-hands-holding-child text-xl"></i>
            </div>
            <div>
              <div className="-mb-1 text-xl font-bold">Services</div>
              <div className="-mt-1 text-sm text-gray-500">
                <span className="text-green-900 dark:text-green-600">
                  {data?.data?.publishedServices} Published
                </span>
                <span> & </span>
                <span className="text-orange-500">
                  {data?.data?.draftServices} Draft.
                </span>
              </div>
            </div>
          </Link>

          <Link
            to={'/auth/users'}
            className="flex items-center rounded-lg bg-white p-6 shadow-sm hover:cursor-pointer hover:shadow dark:bg-blue-gray-900"
          >
            <div className="mx-6 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <i className="fa-solid fa-users text-xl"></i>
            </div>
            <div>
              <div className="-mb-1 text-xl font-bold">Users</div>
              <div className="-mt-1 text-sm text-gray-500">
                <span className="text-green-900 dark:text-green-600">
                  {data?.data?.publishedUsers} Active
                </span>
                <span> & </span>
                <span className="text-orange-500">
                  {data?.data?.draftUsers} Inactive.
                </span>
              </div>
            </div>
          </Link>

          <div className="flex items-center rounded-lg bg-white p-6 shadow-sm hover:cursor-not-allowed hover:shadow dark:bg-blue-gray-900">
            <div className="mx-6 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <i className="fa-solid fa-people-group text-xl"></i>
            </div>
            <div>
              <div className="-mb-1 text-xl font-bold ">Visitors</div>
              <div className="-mt-1 text-sm text-gray-500">
                <span className="text-green-900 dark:text-green-600">
                  {data?.data?.todaysVisitors} people visited today.
                </span>
                <span> & </span>
                <span className="text-orange-500">
                  {data?.data?.totalVisitors} people visited in total.
                </span>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
