import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import Navigation from '~/components/Navigation';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () =>(
  <>
    <StatusBar
      backgroundColor="transparent"
      translucent
      barStyle="light-content"
    />

    {/* <Routes /> */}

    <Navigation />
  </>
);

export default App;
