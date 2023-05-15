import React from 'react';
import './App.css';
import LandingPage from './pages/Landing/landing.container';
import { Provider } from 'react-redux';
import { store } from './service/store';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/layout.view';
import Rockets from './pages/Rockets/rockets.container';
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
          <Route path='/rockets'
            element={
            <Layout>
              <Rockets />
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
