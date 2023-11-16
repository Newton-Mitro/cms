import Admin404Page from 'auth_pages/404/Admin404Page';
import AccountSettingsView from 'auth_pages/account_settings/AccountSettingsView';
import DepositProductIndexView from 'auth_pages/deposit-products/DepositProductIndexView';
import DownloadIndexView from 'auth_pages/downloads/DownloadIndexView';
import GalleryImageIndexView from 'auth_pages/gallery-images/GalleryImageIndexView';
import { Home } from 'auth_pages/home/Home';
import JobCircularIndexView from 'auth_pages/job-circulars/JobCircularIndexView';
import LeaderIndexView from 'auth_pages/leaders/LeaderIndexView';
import LoanProductIndexView from 'auth_pages/loan-products/LoanProductIndexView';
import NoticeIndexView from 'auth_pages/notices/NoticeIndexView';
import PageIndexView from 'auth_pages/pages/PageIndexView';
import ServiceIndexView from 'auth_pages/services/ServiceIndexView';
import SiteSetting from 'auth_pages/settings/SiteSetting';
import SliderImageIndexView from 'auth_pages/slider-images/SliderImageIndexView';
import { AdminTemplate } from 'auth_pages/template/AdminTemplate';
import UserIndexView from 'auth_pages/users/UserIndexView';
import { AnimatePresence } from 'framer-motion';
import Public404Page from 'public_pages/404/Public404Page';
import AboutPage from 'public_pages/about/AboutPage';
import Career from 'public_pages/career/Career';
import CircularDetails from 'public_pages/career/CircularDetails';
import ContactPage from 'public_pages/contact/ContactPage';
import Forms from 'public_pages/forms/Forms';
import FrontPage from 'public_pages/front_page/FrontPage';
import Gallery from 'public_pages/gallery/Gallery';
import Leaders from 'public_pages/leaders/Leaders';
import LoanDetails from 'public_pages/loans/LoanDetails';
import Loans from 'public_pages/loans/Loans';
import NoticeDetails from 'public_pages/notices/NoticeDetails';
import Notices from 'public_pages/notices/Notices';
import SavingDepositDetails from 'public_pages/saving-deposits/SavingDepositDetails';
import SavingDeposits from 'public_pages/saving-deposits/SavingDeposits';
import ServiceDetails from 'public_pages/services/ServiceDetails';
import Services from 'public_pages/services/Services';
import PublicTemplate from 'public_pages/template/PublicTemplate';
import { useContext } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthUserContext, {
  AuthUserContextType,
} from 'shared/context/AuthUserContext';
import SettingProvider from 'shared/context/SettingContext';
import {
  MyThemeContext,
  MyThemeContextType,
} from 'shared/context/ThemeContext';

export default function App() {
  const location = useLocation();
  const { authUser } = useContext<AuthUserContextType>(AuthUserContext);
  const { darkMode } = useContext<MyThemeContextType>(MyThemeContext);

  return (
    <div className={`${darkMode === 'Dark' ? 'dark' : ''}`}>
      <SettingProvider>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PublicTemplate />}>
              <Route index element={<FrontPage />} />
              <Route path="about" element={<AboutPage />}></Route>
              <Route path="about/:slug" element={<AboutPage />}></Route>
              <Route path="services" element={<Services />} />
              <Route path="services/:slug" element={<ServiceDetails />} />
              <Route path="notices" element={<Notices />} />
              <Route path="notices/:slug" element={<NoticeDetails />} />
              <Route path="loans" element={<Loans />} />
              <Route path="loans/:slug" element={<LoanDetails />} />
              <Route path="saving-deposits" element={<SavingDeposits />} />
              <Route
                path="saving-deposits/:slug"
                element={<SavingDepositDetails />}
              />
              <Route path="gallery" element={<Gallery />} />
              <Route path="career" element={<Career />} />
              <Route path="career/:slug" element={<CircularDetails />} />
              <Route path="leadership" element={<Leaders />} />
              <Route path="leadership/:slug" element={<Leaders />} />
              <Route path="download" element={<Forms />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="*" element={<Public404Page />} />
            </Route>
            {authUser && (
              <Route path="auth" element={<AdminTemplate />}>
                <Route path="home" element={<Home />} />
                <Route path="users" element={<UserIndexView />} />
                <Route path="pages" element={<PageIndexView />} />
                <Route path="downloads" element={<DownloadIndexView />} />
                <Route path="notices" element={<NoticeIndexView />} />
                <Route path="our-services" element={<ServiceIndexView />} />
                <Route path="leaders" element={<LeaderIndexView />} />
                <Route
                  path="job-circulars"
                  element={<JobCircularIndexView />}
                />
                <Route
                  path="deposit-products"
                  element={<DepositProductIndexView />}
                />
                <Route
                  path="loan-products"
                  element={<LoanProductIndexView />}
                />
                <Route
                  path="slider-images"
                  element={<SliderImageIndexView />}
                />
                <Route
                  path="gallery-images"
                  element={<GalleryImageIndexView />}
                />
                <Route path="settings" element={<SiteSetting />} />
                <Route
                  path="account-settings"
                  element={<AccountSettingsView />}
                />
                <Route path="/auth/*" element={<Admin404Page />} />
              </Route>
            )}
          </Routes>
        </AnimatePresence>
      </SettingProvider>
      <ToastContainer />
    </div>
  );
}
