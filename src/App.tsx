import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthPage, EditorPage, ErrorPage, WelcomePage } from './pages';
import { RootLayout } from './layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
      {
        path: 'editor',
        element: <EditorPage />,
      },
      {
        path: 'auth',
        element: <AuthPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
