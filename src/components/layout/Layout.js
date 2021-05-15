import { Fragment } from 'react';

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import ProductList from '../ProductList/ProductList';

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
     
    </Fragment>
  );
};

export default Layout;
