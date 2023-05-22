import React from 'react';
import './App.css';
import LandingPage from './pages/Landing/landing.container';
import { Provider } from 'react-redux';
import { store } from './service/store';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/layout.view';
import Ships from './pages/Rockets/ships.container';
function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path='/'
            element={
            <Layout>
              <LandingPage />
            </Layout>
            }
          >
          </Route>
          <Route path='/ships'
            element={
            <Layout>
              <Ships />
            </Layout>
            }
          >
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
