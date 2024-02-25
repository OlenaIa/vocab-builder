import { lazy } from 'react';
import { Routes } from 'react-router';
import { Route } from 'react-router-dom';
import { Layout } from '../Layout/Layout';

const RegisterPage = lazy(() => import('../../pages/Register/Register'));
const LoginPage = lazy(() => import('../../pages/Login/Login'));
const DictionaryPage = lazy(() => import('../../pages/Dictionary/Dictionary'));
const RecommendPage = lazy(() => import('../../pages/Recommend/Recommend'));
const TrainingPage = lazy(() => import('../../pages/Training/Training'));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<RegisterPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dictionary" element={<DictionaryPage />} />
        <Route path="/recommend" element={<RecommendPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="*" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

