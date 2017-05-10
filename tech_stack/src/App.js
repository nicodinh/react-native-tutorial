import React, { Component } from 'react';
import { View }             from 'react-native';
import { Provider }         from 'react-redux';
import { createStore }      from 'redux';

import reducers     from './reducers';
import { Header }   from './components/common';
import LibraryList  from './components/LibraryList';

const App = () => {
  // <View style={{ flex: 1 }}> On utilise flex: 1 pour utiliser toute l'espace de l'ecran
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText='Tech Stack' />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;