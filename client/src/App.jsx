import React from 'react';
import Container from 'react-bootstrap/Container';
import Layout from './components/common/Layout/Layout';
import TweetsContainer from './containers/TweetsContainer';

const App = ({ store }) => {
  return (
    <Layout>
      <TweetsContainer />
    </Layout>
  );
}

export default App;