import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage.js';
import DashboardPage from './pages/DashboardPage.js';
import { ProtectedLayout } from './components/Layouts/ProtectedLayout.js';
import { ProductsPage } from './pages/ProductsPage.js';

function App() {
  return (
    <Router basename="/admin">
      <Routes>
        {/* Rutas públicas */}
        <Route path="/login" element={<LoginPage />} />


        <Route path='/' element={<ProtectedLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Route>

        {/* <Route path="/register" element={<RegisterPage />} /> */}


        {/* <Route
          path="/"
          element={
            <MainLayout>
              <Route index element={<DashboardPage />} />

            </MainLayout>
          }
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
