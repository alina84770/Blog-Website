import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact';
import Blog from './pages/Blog.jsx';
import About from './pages/About.jsx';
import Footer from './components/Footer/Footer.jsx';
import BlogDetailPage from './pages/BlogDetail/BlogDetailPage.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <>
        <Navbar />
        <Footer />
      </>,

      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/blog',
          element: <Blog />
        },
        {
          path: '/services',
          element: <Services />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/blog/:id',
          element: <BlogDetailPage />
        }
      ]

    }
  ]);

  return (
    <RouterProvider router={router} ></RouterProvider>
  )
}

export default App;
