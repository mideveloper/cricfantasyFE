import React, { Fragment } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Layout = props => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
