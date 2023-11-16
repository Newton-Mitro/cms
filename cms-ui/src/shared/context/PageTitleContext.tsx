import React from 'react';

export type PageTitleContextType = {
  title: any;
  setTitle: React.Dispatch<React.SetStateAction<any>>;
};

export const PageTitleContext = React.createContext<PageTitleContextType>({
  title: '',
  setTitle: (newTitle: any) => {},
});

const PageTitleContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [title, setTitle] = React.useState<any>(null);

  return (
    <PageTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
};

export default PageTitleContextProvider;
