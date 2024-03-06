import React from 'react';
import {ThemeProvider} from 'styled-components';
import Footer from '../components/Footer';
import {ContentWrapper} from '../components/ui/ContentWrapper';

type Props = {
  children?: React.ReactNode;
};


const MainLayout = ({children}: Props) => {
  return (
    <ThemeProvider theme={{}}>
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </ThemeProvider>
  );
};

export default MainLayout;
