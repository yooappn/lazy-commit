import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';


const Help = () => {
  return (
      <Layout style={{ color:'teal' }} >
        <Link to="/">Home</Link>

        <p>Help</p>
      </Layout>
  );
};

export default Help;
