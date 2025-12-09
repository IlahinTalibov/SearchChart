import './App.css'
import AuthPage from './pages/AuthPage'
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import SearchArtLanding from './pages/LandingPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AuthPage />
    },
    {
      path: '/authpage',
      element: <AuthPage />
    },
    {
      path: '/landing',
      element: <SearchArtLanding />
    }
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App