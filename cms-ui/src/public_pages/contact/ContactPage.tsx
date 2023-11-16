import { motion } from 'framer-motion';
import React from 'react';
import {
  SettingContext,
  SettingContextType,
} from 'shared/context/SettingContext';

function ContactPage() {
  const { setting } = React.useContext(SettingContext) as SettingContextType;

  return (
    <div className="">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <div className="font-semibold uppercase text-secondary">
            CONTACT US
          </div>
          <div className="text-3xl font-extrabold text-primary dark:text-onPrimary">
            Do you have any inquire?
          </div>
          <div className="dark:text-onPrimary">
            If you want to get in touch with us, you can use the form below to
            send us a message. We will reply to you as soon as possible.
            Alternatively, you can also contact us by phone, email, or social
            media. Here are our contact details:
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
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-10 rounded bg-surface p-4 shadow-sm hover:shadow dark:bg-blue-gray-900 dark:text-onPrimary md:grid-cols-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.353664829178!2d90.50623577608451!3d23.91252747856004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ce6722584acd%3A0xb383da374b548b15!2sNagari%20Christian%20Cooperative%20Credit%20Union%20Ltd.!5e0!3m2!1sen!2sbd!4v1697355853884!5m2!1sen!2sbd"
              title="map"
              className="aspect-video w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="flex flex-col items-start justify-center">
              <div className="flex w-full flex-col items-center">
                <div className="h-full w-full divide-y px-5 py-2">
                  <div className="flex items-center gap-2 font-bold text-primary dark:text-onPrimary">
                    <i className="fa-solid fa-map-location-dot"></i>
                    <span>Address</span>
                  </div>
                  <div className="pt-1 text-sm">
                    {setting
                      ? setting?.address
                      : process.env.REACT_APP_COMPANY_ADDRESS}
                  </div>
                </div>

                <div className="h-full w-full divide-y px-5 py-2">
                  <div className="flex items-center gap-2 font-bold text-primary dark:text-onPrimary">
                    <i className="fa-solid fa-at"></i>
                    <span>Email</span>
                  </div>
                  <div className="pt-1 text-sm">
                    {setting
                      ? setting?.customerSupportEmail
                      : process.env.REACT_APP_COMPANY_EMAIL}
                  </div>
                </div>

                <div className="h-full w-full divide-y px-5 py-2">
                  <div className="flex items-center gap-2 font-bold text-primary dark:text-onPrimary">
                    <i className="fa-solid fa-phone-volume"></i>
                    <span>Phone</span>
                  </div>
                  <div className="pt-1 text-sm">
                    {setting
                      ? setting?.customerSupportContact
                      : process.env.REACT_APP_COMPANY_CONTACT_NO}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactPage;
