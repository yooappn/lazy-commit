import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { AppContext } from '../context/AppContext';

const Help = () => {
  return (
    <Layout style={{ color:'teal' }} >
      <Link to="/">Home</Link>

      <p>Help</p>

      <AppContext.Consumer>
        {({searchText}) => (
          <p>{searchText}</p>
        )}
      </AppContext.Consumer>
    </Layout>
  );
};

export default Help;
