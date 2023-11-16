import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {
  PageTitleContext,
  PageTitleContextType,
} from 'shared/context/PageTitleContext';
import { slugify } from 'shared/utils/string.slugify';

interface BreadcrumbProps {
  urlSegments: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ urlSegments }) => {
  const { title } = useContext<PageTitleContextType>(PageTitleContext);
  if (urlSegments?.length > 2) {
    return (
      <div className="breadcrumb_component container relative mx-auto  w-full text-onPrimary ">
        <div className="absolute left-0 right-0 -bottom-5 ml-4 w-full md:ml-0">
          <div className="flex flex-wrap uppercase">
            <NavLink
              to={`/${slugify(urlSegments[1])}`}
              className="rounded-l-md bg-primaryVariant px-6 py-2 font-semibold"
            >
              {decodeURIComponent(urlSegments[1])}
            </NavLink>
            {title && (
              <span className="rounded-r-md bg-primary px-6 py-2">{title}</span>
            )}
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default Breadcrumb;
