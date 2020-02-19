import React, { Fragment } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Layout = props => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
      <ToastContainer />
    </Fragment>
  );
};

export default Layout;
