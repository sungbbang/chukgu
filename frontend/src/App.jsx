import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import FixturesPage from './pages/FixturesPage';
import RecordPage from './pages/RecordPage';
import BoardPage from './pages/BoardPage';
import ContactPage from './pages/ContactPage';

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/fixtures',
        element: <FixturesPage />,
      },
      {
        path: '/record',
        element: <RecordPage />,
      },
      {
        path: '/board',
        element: <BoardPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
